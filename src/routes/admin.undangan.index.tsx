import { createFileRoute } from "@tanstack/react-router";
import { Copy, Eye } from "lucide-react";
import { useMemo, useState } from "react";
import { Action, ConfirmDelete, DataTable, LinkAction, PageHead, Pill, SelectInput, TextInput } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/undangan/")({
  head: () => ({
    meta: [
      { title: "Kelola Undangan — Aksara Cinta" },
      { name: "description", content: "Seluruh undangan pernikahan digital yang terdaftar di platform." },
      { property: "og:title", content: "Kelola Undangan — Aksara Cinta" },
      { property: "og:description", content: "Seluruh undangan pernikahan digital yang terdaftar di platform." },
    ],
  }),
  component: InvitationsPage,
});

function InvitationsPage() {
  const { invitations, templates, setState } = useStore();
  const [query, setQuery] = useState("");
  const [template, setTemplate] = useState("Semua");
  const [pending, setPending] = useState<string | null>(null);

  const rows = useMemo(
    () =>
      invitations.filter(
        (item) =>
          `${item.slug} ${item.groom} ${item.bride}`.toLowerCase().includes(query.toLowerCase()) &&
          (template === "Semua" || item.template === template),
      ),
    [invitations, query, template],
  );

  return (
    <>
      <PageHead title="Undangan" subtitle="Katalog undangan aktif">
        <Pill tone="gold">{invitations.length} undangan</Pill>
        <TextInput placeholder="Cari" value={query} onChange={(event) => setQuery(event.target.value)} className="w-40 sm:w-56" />
        <SelectInput value={template} onChange={(event) => setTemplate(event.target.value)} className="w-40">
          <option>Semua</option>
          {templates.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </SelectInput>
        <LinkAction to="/admin/undangan/baru" tone="gold" size="sm">
          + Buat
        </LinkAction>
      </PageHead>

      <DataTable head={["Slug", "Mempelai", "Template", "Status", "Kunjungan", "Tanggal", "Aksi"]}>
        {rows.map((item) => (
          <tr key={item.id} className="transition-colors hover:bg-surface/40">
            <td className="px-4 py-3">
              <button
                onClick={() => navigator.clipboard?.writeText(`aksaracinta.com/u/${item.slug}`)}
                className="flex items-center gap-2 font-mono text-xs text-primary"
              >
                /u/{item.slug}
                <Copy className="size-3" />
              </button>
            </td>
            <td className="px-4 py-3 text-sm">
              {item.groom} & {item.bride}
            </td>
            <td className="px-4 py-3">
              <Pill tone="gold">{item.template}</Pill>
            </td>
            <td className="px-4 py-3">
              <Pill tone={item.status === "Aktif" ? "success" : "neutral"}>{item.status}</Pill>
            </td>
            <td className="px-4 py-3">
              <Pill tone="info">
                <Eye className="size-3" /> {item.views}
              </Pill>
            </td>
            <td className="px-4 py-3 text-xs text-helper">{item.date}</td>
            <td className="px-4 py-3">
              <div className="flex gap-2">
                <LinkAction to="/admin/undangan/$id" params={{ id: item.id }} tone="ghost" size="sm">
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

      <ConfirmDelete
        open={pending !== null}
        onCancel={() => setPending(null)}
        onConfirm={() => {
          setState((state) => ({ ...state, invitations: state.invitations.filter((item) => item.id !== pending) }));
          setPending(null);
        }}
      />
    </>
  );
}
