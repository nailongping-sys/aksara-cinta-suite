import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FolderUp } from "lucide-react";
import { useState } from "react";
import { Action, Field, GlassCard, PageHead, Pill, SelectInput, TextArea, TextInput } from "@/components/kit";
import { createId, useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/template/upload")({
  head: () => ({
    meta: [
      { title: "Upload Template — Aksara Cinta" },
      { name: "description", content: "Unggah paket arsip template undangan mandiri berformat ZIP." },
      { property: "og:title", content: "Upload Template — Aksara Cinta" },
      { property: "og:description", content: "Unggah paket arsip template undangan mandiri berformat ZIP." },
    ],
  }),
  component: UploadTemplatePage,
});

function UploadTemplatePage() {
  const navigate = useNavigate();
  const { setState } = useStore();
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "Signature",
    primary: "#A3E635",
    secondary: "#D4AF37",
    entry: "index.html",
    description: "",
  });

  const simulateUpload = (label: string) => {
    setFileName(label);
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(timer);
          return 100;
        }
        return value + 5;
      });
    }, 60);
  };

  const submit = () => {
    setState((state) => ({
      ...state,
      templates: [
        {
          id: createId("t"),
          name: form.name || "Template Baru",
          slug: form.slug || createId("tpl"),
          tag: form.category,
          category: form.category as "Signature",
          theme: `${form.primary} / ${form.secondary}`,
          thumb: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=70",
        },
        ...state.templates,
      ],
    }));
    navigate({ to: "/admin/template" });
  };

  return (
    <>
      <PageHead title="Upload Template" subtitle="Paket arsip mandiri" back="/admin/template" />

      <GlassCard className="p-5 sm:p-6">
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-10 text-center transition-colors hover:border-primary/60">
          <FolderUp className="size-8 text-primary" />
          <span className="text-sm font-semibold">Tarik .zip ke sini</span>
          <span className="text-[11px] text-helper">Maks. 50 MB</span>
          <input
            type="file"
            accept=".zip"
            className="hidden"
            onChange={(event) => simulateUpload(event.target.files?.[0]?.name ?? "template.zip")}
          />
        </label>

        {fileName ? (
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-primary">{fileName}</span>
              <span className="text-helper">{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-[image:var(--gradient-matcha)] transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {["manifest.json", "assets/", "styles.css"].map((item) => (
                <Pill key={item} tone={progress === 100 ? "success" : "neutral"}>
                  {item}
                </Pill>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Nama">
            <TextInput placeholder="Nama" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          </Field>
          <Field label="Slug">
            <TextInput placeholder="Slug" value={form.slug} onChange={(event) => setForm({ ...form, slug: event.target.value })} />
          </Field>
          <Field label="Kategori">
            <SelectInput value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>
              {["Tradisional", "Modern", "Signature", "Religius", "Artistik"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </SelectInput>
          </Field>
          <Field label="Entrypoint">
            <TextInput value={form.entry} onChange={(event) => setForm({ ...form, entry: event.target.value })} />
          </Field>
          <Field label="Warna Primer">
            <input
              type="color"
              value={form.primary}
              onChange={(event) => setForm({ ...form, primary: event.target.value })}
              className="h-11 w-full rounded-xl border border-input bg-surface/70 px-2"
            />
          </Field>
          <Field label="Warna Sekunder">
            <input
              type="color"
              value={form.secondary}
              onChange={(event) => setForm({ ...form, secondary: event.target.value })}
              className="h-11 w-full rounded-xl border border-input bg-surface/70 px-2"
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Deskripsi">
              <TextArea
                placeholder="Fitur"
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
              />
            </Field>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2 border-t border-border pt-4">
          <Action tone="ghost" onClick={() => navigate({ to: "/admin/template" })}>
            Batal
          </Action>
          <Action tone="gold" onClick={submit}>
            Publikasikan
          </Action>
        </div>
      </GlassCard>
    </>
  );
}
