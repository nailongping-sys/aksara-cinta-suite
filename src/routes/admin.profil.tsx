import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Action, Avatar, Field, FormShell, GlassCard, initialsOf, PageHead, Pill, TextInput } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/profil")({
  head: () => ({
    meta: [
      { title: "Profil Admin — Aksara Cinta" },
      { name: "description", content: "Kelola identitas, kata sandi, dan preferensi akun administrator." },
      { property: "og:title", content: "Profil Admin — Aksara Cinta" },
      { property: "og:description", content: "Kelola identitas, kata sandi, dan preferensi akun administrator." },
    ],
  }),
  component: AdminProfilePage,
});

function AdminProfilePage() {
  const { session, signIn } = useStore();
  const [form, setForm] = useState({ name: session?.name ?? "", email: session?.email ?? "", password: "" });
  const [saved, setSaved] = useState(false);

  return (
    <>
      <PageHead title="Profil" subtitle="Akun administrator">
        {saved ? <Pill tone="success">Tersimpan</Pill> : null}
      </PageHead>

      <GlassCard className="mb-4 flex items-center gap-4 p-5">
        <Avatar text={initialsOf(form.name || "AC")} tone="gold" size="lg" />
        <div>
          <p className="font-display text-xl font-bold">{form.name}</p>
          <p className="text-sm text-helper">{form.email}</p>
          <div className="mt-2 flex gap-2">
            <Pill tone="gold">Super Admin</Pill>
            <Pill tone="matcha">{session?.tier ?? "Owner"}</Pill>
          </div>
        </div>
      </GlassCard>

      <FormShell
        actions={
          <Action
            tone="gold"
            onClick={() => {
              if (session) signIn({ ...session, name: form.name, email: form.email });
              setSaved(true);
            }}
          >
            Simpan
          </Action>
        }
      >
        <Field label="Nama">
          <TextInput placeholder="Nama" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        </Field>
        <Field label="Email">
          <TextInput placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        </Field>
        <Field label="Kata Sandi" hint="Kosongkan bila tetap">
          <TextInput type="password" placeholder="Sandi" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} />
        </Field>
      </FormShell>
    </>
  );
}
