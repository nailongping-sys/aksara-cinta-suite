import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Action, GlassCard, LinkAction, PageHead, Pill } from "@/components/kit";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/template/")({
  head: () => ({
    meta: [
      { title: "Katalog Template — Aksara Cinta" },
      { name: "description", content: "Pustaka desain undangan pernikahan aktif Aksara Cinta." },
      { property: "og:title", content: "Katalog Template — Aksara Cinta" },
      { property: "og:description", content: "Pustaka desain undangan pernikahan aktif Aksara Cinta." },
    ],
  }),
  component: TemplatesPage,
});

const tabs = ["Semua", "Tradisional", "Modern", "Signature", "Religius", "Artistik"];

function TemplatesPage() {
  const { templates } = useStore();
  const [tab, setTab] = useState("Semua");
  const rows = templates.filter((item) => tab === "Semua" || item.category === tab);

  return (
    <>
      <PageHead title="Katalog Template" subtitle="Pustaka desain aktif">
        <LinkAction to="/admin/template/upload" tone="gold" size="sm">
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
            {item} ({item === "Semua" ? templates.length : templates.filter((row) => row.category === item).length})
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {rows.map((item) => (
          <GlassCard key={item.id} className="overflow-hidden">
            <img src={item.thumb} alt={item.name} loading="lazy" className="h-36 w-full object-cover" />
            <div className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold">{item.name}</p>
                <Pill tone="gold">{item.tag}</Pill>
              </div>
              <p className="text-xs text-helper">{item.theme}</p>
              <p className="font-mono text-[11px] text-primary">{item.slug}</p>
              <Action tone="ghost" size="sm" className="w-full">
                Kelola
              </Action>
            </div>
          </GlassCard>
        ))}
      </div>
    </>
  );
}
