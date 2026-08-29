import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Action, ConfirmDelete, GlassCard, LinkAction, PageHead, Pill, TextInput } from "@/components/kit";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/doa/")({
  head: () => ({
    meta: [
      { title: "Database Doa — Aksara Cinta" },
      { name: "description", content: "Koleksi doa dan ayat suci pernikahan lintas agama." },
      { property: "og:title", content: "Database Doa — Aksara Cinta" },
      { property: "og:description", content: "Koleksi doa dan ayat suci pernikahan lintas agama." },
    ],
  }),
  component: PrayersPage,
});

const tabs = ["Semua", "Islam", "Kristen", "Katolik", "Hindu", "Budha", "Nasional"];

function PrayersPage() {
  const { prayers, setState } = useStore();
  const [tab, setTab] = useState("Semua");
  const [query, setQuery] = useState("");
  const [pending, setPending] = useState<string | null>(null);

  const rows = prayers.filter(
    (item) =>
      (tab === "Semua" || item.category === tab) &&
      `${item.title} ${item.translation}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <PageHead title="Database Doa" subtitle="Ayat suci pernikahan">
        <TextInput placeholder="Cari" value={query} onChange={(event) => setQuery(event.target.value)} className="w-40 sm:w-56" />
        <LinkAction to="/admin/doa/baru" tone="gold" size="sm">
          + Tambah
        </LinkAction>
      </PageHead>

      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={cn(
              "min-h-9 rounded-xl border px-3 text-xs font-semibold transition-all",
              tab === item ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {rows.map((item) => (
          <GlassCard key={item.id} className="space-y-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-display text-base font-bold">{item.title}</h2>
              <Pill tone="gold">{item.category}</Pill>
            </div>
            <p className="font-display text-lg leading-relaxed text-primary">{item.original}</p>
            <p className="text-xs text-muted-foreground italic">{item.latin}</p>
            <p className="text-sm text-foreground/85">{item.translation}</p>
            <div className="flex gap-2">
              <Action tone="ghost" size="sm" onClick={() => navigator.clipboard?.writeText(item.translation)}>
                Salin
              </Action>
              <LinkAction to="/admin/doa/$id" params={{ id: item.id }} tone="ghost" size="sm">
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
          setState((state) => ({ ...state, prayers: state.prayers.filter((item) => item.id !== pending) }));
          setPending(null);
        }}
      />
    </>
  );
}
