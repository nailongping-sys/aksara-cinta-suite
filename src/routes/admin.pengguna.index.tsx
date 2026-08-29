import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Action,
  Avatar,
  ConfirmDelete,
  DataTable,
  initialsOf,
  LinkAction,
  PageHead,
  Pill,
  SelectInput,
  TextInput,
} from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/pengguna/")({
  head: () => ({
    meta: [
      { title: "Kelola Pengguna — Aksara Cinta" },
      { name: "description", content: "Daftar akun pengantin dan admin pada platform Aksara Cinta." },
      { property: "og:title", content: "Kelola Pengguna — Aksara Cinta" },
      { property: "og:description", content: "Daftar akun pengantin dan admin pada platform Aksara Cinta." },
    ],
  }),
  component: UsersPage,
});

function UsersPage() {
  const { users, setState } = useStore();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [pending, setPending] = useState<string | null>(null);

  const rows = useMemo(
    () =>
      users.filter((item) => {
        const matchQuery = `${item.name} ${item.email}`.toLowerCase().includes(query.toLowerCase());
        const matchFilter =
          filter === "Semua" || (filter === "Admin" ? item.role === "admin" : item.tier === filter);
        return matchQuery && matchFilter;
      }),
    [users, query, filter],
  );

  return (
    <>
      <PageHead title="Pengguna" subtitle="Akun terdaftar">
        <Pill tone="matcha">{users.length} akun</Pill>
        <TextInput
          placeholder="Cari"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-40 sm:w-56"
        />
        <SelectInput value={filter} onChange={(event) => setFilter(event.target.value)} className="w-32">
          {["Semua", "Admin", "Free", "Gold", "Platinum"].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </SelectInput>
        <LinkAction to="/admin/pengguna/baru" tone="gold" size="sm">
          + Tambah
        </LinkAction>
      </PageHead>

      <DataTable head={["Nama", "Email", "Peran", "Paket", "Undangan", "Bergabung", "Aksi"]}>
        {rows.map((item) => (
          <tr key={item.id} className="transition-colors hover:bg-surface/40">
            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Avatar text={initialsOf(item.name)} tone={item.role === "admin" ? "gold" : "matcha"} size="sm" />
                <span className="font-semibold">{item.name}</span>
              </div>
            </td>
            <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{item.email}</td>
            <td className="px-4 py-3">
              <Pill tone={item.role === "admin" ? "gold" : "neutral"}>{item.role === "admin" ? "Admin" : "User"}</Pill>
            </td>
            <td className="px-4 py-3">
              <Pill tone={item.tier === "Free" ? "neutral" : "matcha"}>{item.tier}</Pill>
            </td>
            <td className="px-4 py-3">{item.invitations}</td>
            <td className="px-4 py-3 text-xs text-helper">{item.joined}</td>
            <td className="px-4 py-3">
              <div className="flex gap-2">
                <LinkAction to="/admin/pengguna/$id" params={{ id: item.id }} tone="ghost" size="sm">
                  Edit
                </LinkAction>
                <Action tone="danger" size="sm" onClick={() => setPending(item.id)}>
                  Hapus
                </Action>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>

      <div className="mt-4 flex items-center justify-between text-xs text-helper">
        <span>1 - {rows.length} dari 128</span>
        <div className="flex gap-2">
          <Action tone="ghost" size="sm">
            Prev
          </Action>
          <Action tone="ghost" size="sm">
            Next
          </Action>
        </div>
      </div>

      <ConfirmDelete
        open={pending !== null}
        onCancel={() => setPending(null)}
        onConfirm={() => {
          setState((state) => ({ ...state, users: state.users.filter((item) => item.id !== pending) }));
          setPending(null);
        }}
      />
    </>
  );
}
