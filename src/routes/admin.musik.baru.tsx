import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Action, Field, FormShell, PageHead, SelectInput, TextInput } from "@/components/kit";
import { createId, useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/musik/baru")({
  head: () => ({
    meta: [
      { title: "Tambah Lagu — Aksara Cinta" },
      { name: "description", content: "Tambahkan lagu latar baru ke pustaka musik undangan." },
      { property: "og:title", content: "Tambah Lagu — Aksara Cinta" },
      { property: "og:description", content: "Tambahkan lagu latar baru ke pustaka musik undangan." },
    ],
  }),
  component: NewTrackPage,
});

function NewTrackPage() {
  const navigate = useNavigate();
  const { setState } = useStore();
  const [form, setForm] = useState({ title: "", artist: "", genre: "Akustik", duration: "", url: "" });

  const submit = () => {
    setState((state) => ({
      ...state,
      music: [
        {
          id: createId("m"),
          title: form.title || "Lagu Baru",
          artist: form.artist || "Anonim",
          genre: form.genre,
          duration: form.duration || "03:30",
          url: form.url,
        },
        ...state.music,
      ],
    }));
    navigate({ to: "/admin/musik" });
  };

  return (
    <>
      <PageHead title="Tambah Lagu" back="/admin/musik" />
      <FormShell
        actions={
          <>
            <Action tone="ghost" onClick={() => navigate({ to: "/admin/musik" })}>
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
        <Field label="Artis">
          <TextInput placeholder="Artis" value={form.artist} onChange={(event) => setForm({ ...form, artist: event.target.value })} />
        </Field>
        <Field label="Genre">
          <SelectInput value={form.genre} onChange={(event) => setForm({ ...form, genre: event.target.value })}>
            {["Akustik", "Piano", "Romantis", "Islami", "Tradisional", "Orkestra"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Durasi">
          <TextInput placeholder="Durasi" value={form.duration} onChange={(event) => setForm({ ...form, duration: event.target.value })} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="URL Audio">
            <div className="flex gap-2">
              <TextInput placeholder="URL" value={form.url} onChange={(event) => setForm({ ...form, url: event.target.value })} />
              <Action tone="ghost" type="button" onClick={() => form.url && new Audio(form.url).play()}>
                Uji
              </Action>
            </div>
          </Field>
        </div>
      </FormShell>
    </>
  );
}
