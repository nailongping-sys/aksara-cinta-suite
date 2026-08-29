import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Action, ConfirmDelete, GlassCard, LinkAction, PageHead, Pill } from "@/components/kit";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/galeri-aset/")({
  head: () => ({
    meta: [
      { title: "Galeri Aset — Aksara Cinta" },
      { name: "description", content: "Ornamen, bingkai, dan latar visual untuk template undangan." },
      { property: "og:title", content: "Galeri Aset — Aksara Cinta" },
      { property: "og:description", content: "Ornamen, bingkai, dan latar visual untuk template undangan." },
    ],
  }),
  component: AssetsPage,
});

const tabs = ["Semua", "Bingkai", "Ornamen", "Latar", "Pembatas", "Ikon"];

function AssetsPage() {
  const { assets, setState } = useStore();
  const [tab, setTab] = useState("Semua");
  const [pending, setPending] = useState<string | null>(null);
  const rows = assets.filter((item) => tab === "Semua" || item.category === tab);

  return (
    <>
      <PageHead title="Galeri Aset" subtitle="Ornamen dan latar visual">
        <LinkAction to="/admin/galeri-aset/upload" tone="gold" size="sm">
          + Upload
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

      <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-4">
        {rows.map((item) => (
          <GlassCard key={item.id} className="overflow-hidden">
            <img src={item.url} alt={item.name} loading="lazy" className="h-28 w-full object-cover" />
            <div className="space-y-2 p-3">
              <p className="truncate font-mono text-xs">{item.name}</p>
              <div className="flex items-center justify-between">
                <Pill tone="info">{item.category}</Pill>
                <span className="text-[11px] text-helper">{item.size}</span>
              </div>
              <div className="flex gap-2">
                <Action tone="ghost" size="sm" className="flex-1" onClick={() => navigator.clipboard?.writeText(item.url)}>
                  Salin
                </Action>
                <Action tone="danger" size="sm" onClick={() => setPending(item.id)}>
                  Hapus
                </Action>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <ConfirmDelete
        open={pending !== null}
        onCancel={() => setPending(null)}
        onConfirm={() => {
          setState((state) => ({ ...state, assets: state.assets.filter((item) => item.id !== pending) }));
          setPending(null);
        }}
      />
    </>
  );
}
