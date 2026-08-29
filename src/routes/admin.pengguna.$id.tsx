import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Action, Avatar, Field, FormShell, GlassCard, initialsOf, PageHead, Pill, SelectInput, TextInput } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/pengguna/$id")({
  head: () => ({
    meta: [
      { title: "Edit Pengguna — Aksara Cinta" },
      { name: "description", content: "Perbarui paket, peran, dan status akun pengguna Aksara Cinta." },
      { property: "og:title", content: "Edit Pengguna — Aksara Cinta" },
      { property: "og:description", content: "Perbarui paket, peran, dan status akun pengguna Aksara Cinta." },
    ],
  }),
  component: EditUserPage,
});

function EditUserPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { users, setState } = useStore();
  const user = users.find((item) => item.id === id);
  const [form, setForm] = useState({
    name: user?.name ?? "",
    tier: user?.tier ?? "Free",
    role: user?.role ?? "user",
    status: user?.status ?? "Aktif",
  });

  if (!user) {
    return (
      <>
        <PageHead title="Edit Pengguna" back="/admin/pengguna" />
        <GlassCard className="p-6 text-sm text-helper">Data tidak ditemukan.</GlassCard>
      </>
    );
  }

  const submit = () => {
    setState((state) => ({
      ...state,
      users: state.users.map((item) =>
        item.id === id
          ? { ...item, name: form.name, tier: form.tier as typeof item.tier, role: form.role as typeof item.role, status: form.status as typeof item.status }
          : item,
      ),
    }));
    navigate({ to: "/admin/pengguna" });
  };

  return (
    <>
      <PageHead title="Edit Pengguna" subtitle={user.id} back="/admin/pengguna" />

      <GlassCard className="mb-4 flex flex-wrap items-center gap-4 p-5">
        <Avatar text={initialsOf(user.name)} tone={user.role === "admin" ? "gold" : "matcha"} />
        <div className="min-w-0">
          <p className="font-semibold">{user.name}</p>
          <p className="font-mono text-xs text-helper">{user.email}</p>
        </div>
        <Pill tone="info">{user.invitations} undangan</Pill>
        <Pill tone="neutral">{user.joined}</Pill>
      </GlassCard>

      <FormShell
        actions={
          <>
            <Action tone="ghost" onClick={() => navigate({ to: "/admin/pengguna" })}>
              Batal
            </Action>
            <Action tone="gold" onClick={submit}>
              Simpan
            </Action>
          </>
        }
      >
        <Field label="Nama Lengkap">
          <TextInput placeholder="Nama" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        </Field>
        <Field label="Paket">
          <SelectInput value={form.tier} onChange={(event) => setForm({ ...form, tier: event.target.value as typeof form.tier })}>
            {["Free", "Gold", "Platinum", "Owner"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Peran">
          <SelectInput value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value as typeof form.role })}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </SelectInput>
        </Field>
        <Field label="Status">
          <SelectInput value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as typeof form.status })}>
            {["Aktif", "Ditangguhkan", "Diblokir"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Sandi">
          <Action tone="ghost" type="button">
            Kirim Reset
          </Action>
        </Field>
      </FormShell>
    </>
  );
}
