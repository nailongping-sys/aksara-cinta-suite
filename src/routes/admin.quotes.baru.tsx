import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Action, Field, FormShell, PageHead, SelectInput, TextArea, TextInput } from "@/components/kit";
import { createId, useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/quotes/baru")({
  head: () => ({
    meta: [
      { title: "Tambah Quotes — Aksara Cinta" },
      { name: "description", content: "Tambahkan kutipan cinta baru ke pustaka undangan." },
      { property: "og:title", content: "Tambah Quotes — Aksara Cinta" },
      { property: "og:description", content: "Tambahkan kutipan cinta baru ke pustaka undangan." },
    ],
  }),
  component: NewQuotePage,
});

function NewQuotePage() {
  const navigate = useNavigate();
  const { setState } = useStore();
  const [form, setForm] = useState({ text: "", author: "", mood: "Puitis" });

  const submit = () => {
    setState((state) => ({
      ...state,
      quotes: [{ id: createId("q"), text: form.text || "Kutipan baru", author: form.author || "Anonim", mood: form.mood }, ...state.quotes],
    }));
    navigate({ to: "/admin/quotes" });
  };

  return (
    <>
      <PageHead title="Tambah Quotes" back="/admin/quotes" />
      <FormShell
        actions={
          <>
            <Action tone="ghost" onClick={() => navigate({ to: "/admin/quotes" })}>
              Batal
            </Action>
            <Action tone="gold" onClick={submit}>
              Simpan
            </Action>
          </>
        }
      >
        <Field label="Kutipan">
          <TextArea placeholder="Teks" value={form.text} onChange={(event) => setForm({ ...form, text: event.target.value })} />
        </Field>
        <Field label="Penulis">
          <TextInput placeholder="Penulis" value={form.author} onChange={(event) => setForm({ ...form, author: event.target.value })} />
        </Field>
        <Field label="Mood">
          <SelectInput value={form.mood} onChange={(event) => setForm({ ...form, mood: event.target.value })}>
            {["Puitis", "Romantis Klasik", "Minimalis", "Filosofis", "Humor"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </SelectInput>
        </Field>
      </FormShell>
    </>
  );
}
