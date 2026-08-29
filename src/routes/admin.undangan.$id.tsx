import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Action, Field, FormShell, GlassCard, PageHead, SelectInput, TextInput } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/undangan/$id")({
  head: () => ({
    meta: [
      { title: "Edit Undangan — Aksara Cinta" },
      { name: "description", content: "Perbarui slug, template, dan status publikasi undangan." },
      { property: "og:title", content: "Edit Undangan — Aksara Cinta" },
      { property: "og:description", content: "Perbarui slug, template, dan status publikasi undangan." },
    ],
  }),
  component: EditInvitationPage,
});

function EditInvitationPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { invitations, templates, setState } = useStore();
  const invitation = invitations.find((item) => item.id === id);
  const [form, setForm] = useState({
    slug: invitation?.slug ?? "",
    title: invitation?.title ?? "",
    groom: invitation?.groom ?? "",
    bride: invitation?.bride ?? "",
    template: invitation?.template ?? "",
    status: invitation?.status ?? "Draf",
    date: invitation?.date ?? "",
  });

  if (!invitation) {
    return (
      <>
        <PageHead title="Edit Undangan" back="/admin/undangan" />
        <GlassCard className="p-6 text-sm text-helper">Data tidak ditemukan.</GlassCard>
      </>
    );
  }

  const submit = () => {
    setState((state) => ({
      ...state,
      invitations: state.invitations.map((item) =>
        item.id === id ? { ...item, ...form, status: form.status as typeof item.status } : item,
      ),
    }));
    navigate({ to: "/admin/undangan" });
  };

  return (
    <>
      <PageHead title="Edit Undangan" subtitle={`/u/${invitation.slug}`} back="/admin/undangan" />
      <FormShell
        actions={
          <>
            <Action tone="ghost" onClick={() => navigate({ to: "/admin/undangan" })}>
              Batal
            </Action>
            <Action tone="gold" onClick={submit}>
              Simpan
            </Action>
          </>
        }
      >
        <Field label="Slug">
          <TextInput placeholder="Slug" value={form.slug} onChange={(event) => setForm({ ...form, slug: event.target.value })} />
        </Field>
        <Field label="Judul">
          <TextInput placeholder="Judul" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} />
        </Field>
        <Field label="Pria">
          <TextInput placeholder="Nama" value={form.groom} onChange={(event) => setForm({ ...form, groom: event.target.value })} />
        </Field>
        <Field label="Wanita">
          <TextInput placeholder="Nama" value={form.bride} onChange={(event) => setForm({ ...form, bride: event.target.value })} />
        </Field>
        <Field label="Template">
          <SelectInput value={form.template} onChange={(event) => setForm({ ...form, template: event.target.value })}>
            {templates.map((item) => (
              <option key={item.id}>{item.name}</option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Status">
          <SelectInput value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as typeof form.status })}>
            <option>Aktif</option>
            <option>Draf</option>
          </SelectInput>
        </Field>
        <Field label="Tanggal">
          <TextInput type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} />
        </Field>
      </FormShell>
    </>
  );
}
