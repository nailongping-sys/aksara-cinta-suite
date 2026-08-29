import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Action, Field, FormShell, PageHead, SelectInput, TextInput } from "@/components/kit";
import { createId, useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/pengguna/baru")({
  head: () => ({
    meta: [
      { title: "Tambah Pengguna — Aksara Cinta" },
      { name: "description", content: "Formulir pembuatan akun pengantin atau admin baru." },
      { property: "og:title", content: "Tambah Pengguna — Aksara Cinta" },
      { property: "og:description", content: "Formulir pembuatan akun pengantin atau admin baru." },
    ],
  }),
  component: NewUserPage,
});

function NewUserPage() {
  const navigate = useNavigate();
  const { setState } = useStore();
  const [form, setForm] = useState({ name: "", email: "", password: "", tier: "Free", role: "user", quota: 5 });

  const submit = () => {
    setState((state) => ({
      ...state,
      users: [
        {
          id: createId("u"),
          name: form.name || "Pengguna Baru",
          email: form.email || "baru@aksaracinta.com",
          role: form.role === "user" ? "user" : "admin",
          tier: form.tier as "Free" | "Gold" | "Platinum",
          invitations: 0,
          quota: Number(form.quota),
          status: "Aktif",
          joined: new Date().toISOString().slice(0, 10),
        },
        ...state.users,
      ],
    }));
    navigate({ to: "/admin/pengguna" });
  };

  return (
    <>
      <PageHead title="Tambah Pengguna" back="/admin/pengguna" />
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
        <Field label="Email">
          <TextInput
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </Field>
        <Field label="Kata Sandi">
          <TextInput
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
          />
        </Field>
        <Field label="Paket">
          <SelectInput value={form.tier} onChange={(event) => setForm({ ...form, tier: event.target.value })}>
            {["Free", "Gold", "Platinum"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Peran">
          <SelectInput value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })}>
            <option value="user">User Pengantin</option>
            <option value="ops">Admin Operasional</option>
            <option value="admin">Super Admin</option>
          </SelectInput>
        </Field>
        <Field label="Kuota">
          <TextInput
            type="number"
            value={form.quota}
            onChange={(event) => setForm({ ...form, quota: Number(event.target.value) })}
          />
        </Field>
      </FormShell>
    </>
  );
}
