import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Action, Field, FormShell, PageHead, SelectInput, TextArea, TextInput } from "@/components/kit";
import { createId, useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/doa/baru")({
  head: () => ({
    meta: [
      { title: "Tambah Doa — Aksara Cinta" },
      { name: "description", content: "Tambahkan doa atau ayat suci pernikahan ke pustaka platform." },
      { property: "og:title", content: "Tambah Doa — Aksara Cinta" },
      { property: "og:description", content: "Tambahkan doa atau ayat suci pernikahan ke pustaka platform." },
    ],
  }),
  component: NewPrayerPage,
});

function NewPrayerPage() {
  const navigate = useNavigate();
  const { setState } = useStore();
  const [form, setForm] = useState({ title: "", category: "Islam", original: "", latin: "", translation: "" });

  const submit = () => {
    setState((state) => ({ ...state, prayers: [{ id: createId("d"), ...form, title: form.title || "Doa Baru" }, ...state.prayers] }));
    navigate({ to: "/admin/doa" });
  };

  return (
    <>
      <PageHead title="Tambah Doa" back="/admin/doa" />
      <FormShell
        actions={
          <>
            <Action tone="ghost" onClick={() => navigate({ to: "/admin/doa" })}>
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
            {["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Nasional"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Teks Asli">
          <TextArea placeholder="Teks" value={form.original} onChange={(event) => setForm({ ...form, original: event.target.value })} />
        </Field>
        <Field label="Latin">
          <TextArea placeholder="Latin" value={form.latin} onChange={(event) => setForm({ ...form, latin: event.target.value })} />
        </Field>
        <Field label="Terjemahan">
          <TextArea
            placeholder="Arti"
            value={form.translation}
            onChange={(event) => setForm({ ...form, translation: event.target.value })}
          />
        </Field>
      </FormShell>
    </>
  );
}
