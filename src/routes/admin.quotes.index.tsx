import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Action, ConfirmDelete, GlassCard, LinkAction, PageHead, Pill } from "@/components/kit";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/quotes/")({
  head: () => ({
    meta: [
      { title: "Quotes Cinta — Aksara Cinta" },
      { name: "description", content: "Kumpulan kutipan romantis dan puitis untuk undangan pernikahan." },
      { property: "og:title", content: "Quotes Cinta — Aksara Cinta" },
      { property: "og:description", content: "Kumpulan kutipan romantis dan puitis untuk undangan pernikahan." },
    ],
  }),
  component: QuotesPage,
});

const moods = ["Semua", "Puitis", "Romantis Klasik", "Minimalis", "Filosofis", "Humor"];

function QuotesPage() {
  const { quotes, setState } = useStore();
  const [mood, setMood] = useState("Semua");
  const [pending, setPending] = useState<string | null>(null);
  const rows = quotes.filter((item) => mood === "Semua" || item.mood === mood);

  return (
    <>
      <PageHead title="Quotes Cinta" subtitle="Kutipan romantis">
        <LinkAction to="/admin/quotes/baru" tone="gold" size="sm">
          + Tambah
        </LinkAction>
      </PageHead>

      <div className="mb-4 flex flex-wrap gap-2">
        {moods.map((item) => (
          <button
            key={item}
            onClick={() => setMood(item)}
            className={cn(
              "min-h-9 rounded-xl border px-3 text-xs font-semibold transition-all",
              mood === item ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {rows.map((item) => (
          <GlassCard key={item.id} className="space-y-3 p-5">
            <p className="font-display text-lg leading-relaxed">“{item.text}”</p>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-helper">{item.author}</span>
              <Pill tone="matcha">{item.mood}</Pill>
            </div>
            <div className="flex gap-2">
              <Action tone="ghost" size="sm" onClick={() => navigator.clipboard?.writeText(item.text)}>
                Salin
              </Action>
              <LinkAction to="/admin/quotes/baru" tone="ghost" size="sm">
                Edit
              </LinkAction>
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
          setState((state) => ({ ...state, quotes: state.quotes.filter((item) => item.id !== pending) }));
          setPending(null);
        }}
      />
    </>
  );
}
