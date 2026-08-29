import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Action, ConfirmDelete, GlassCard, LinkAction, PageHead, Pill } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/surat/")({
  head: () => ({
    meta: [
      { title: "Surat & Salam — Aksara Cinta" },
      { name: "description", content: "Teks pembuka, salam sakral, dan doa penutup undangan." },
      { property: "og:title", content: "Surat & Salam — Aksara Cinta" },
      { property: "og:description", content: "Teks pembuka, salam sakral, dan doa penutup undangan." },
    ],
  }),
  component: SacredPage,
});

function SacredPage() {
  const { sacredTexts, setState } = useStore();
  const [pending, setPending] = useState<string | null>(null);

  return (
    <>
      <PageHead title="Surat & Salam" subtitle="Teks pembuka sakral">
        <LinkAction to="/admin/surat/baru" tone="gold" size="sm">
          + Tambah
        </LinkAction>
      </PageHead>

      <div className="grid gap-3 lg:grid-cols-2">
        {sacredTexts.map((item) => (
          <GlassCard key={item.id} className="space-y-2 p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-semibold">{item.title}</h2>
              <Pill tone="gold">{item.category}</Pill>
            </div>
            <p className="font-display text-base leading-relaxed text-primary">{item.body}</p>
            <div className="flex gap-2 pt-1">
              <Action tone="ghost" size="sm" onClick={() => navigator.clipboard?.writeText(item.body)}>
                Salin
              </Action>
              <Action tone="danger" size="sm" onClick={() => setPending(item.id)}>
                Hapus
              </Action>
            </div>
          </GlassCard>
        ))}
      </div>

      <ConfirmDelete
        open={pending !== null}
        onCancel={() => setPending(null)}
        onConfirm={() => {
          setState((state) => ({ ...state, sacredTexts: state.sacredTexts.filter((item) => item.id !== pending) }));
          setPending(null);
        }}
      />
    </>
  );
}
