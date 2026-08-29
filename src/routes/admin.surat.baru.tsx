import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Action, Field, FormShell, PageHead, SelectInput, TextArea, TextInput } from "@/components/kit";
import { createId, useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/surat/baru")({
  head: () => ({
    meta: [
      { title: "Tambah Teks — Aksara Cinta" },
      { name: "description", content: "Tambahkan salam pembuka atau doa penutup undangan." },
      { property: "og:title", content: "Tambah Teks — Aksara Cinta" },
      { property: "og:description", content: "Tambahkan salam pembuka atau doa penutup undangan." },
    ],
  }),
  component: NewSacredPage,
});

function NewSacredPage() {
  const navigate = useNavigate();
  const { setState } = useStore();
  const [form, setForm] = useState({ title: "", category: "Islam", body: "" });

  const submit = () => {
    setState((state) => ({
      ...state,
      sacredTexts: [{ id: createId("s"), title: form.title || "Teks Baru", category: form.category, body: form.body }, ...state.sacredTexts],
    }));
    navigate({ to: "/admin/surat" });
  };

  return (
    <>
      <PageHead title="Tambah Teks" back="/admin/surat" />
      <FormShell
        actions={
          <>
            <Action tone="ghost" onClick={() => navigate({ to: "/admin/surat" })}>
              Batal
            </Action>
            <Action tone="gold" onClick={submit}>
              Simpan
            </Action>
          </>
        }
      >
        <Field label="Judul">
          <TextInput placeholder="Judul" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} />
        </Field>
        <Field label="Kategori">
          <SelectInput value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>
            {["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Nasional", "Universal"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </SelectInput>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Teks">
            <TextArea placeholder="Teks" value={form.body} onChange={(event) => setForm({ ...form, body: event.target.value })} />
          </Field>
        </div>
      </FormShell>
    </>
  );
}
