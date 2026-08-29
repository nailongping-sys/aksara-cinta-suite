import { createFileRoute } from "@tanstack/react-router";
import { Activity, Database, HardDrive, ShieldCheck } from "lucide-react";
import { Action, GlassCard, Metric, PageHead, Pill } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/sistem")({
  head: () => ({
    meta: [
      { title: "Status Sistem — Aksara Cinta" },
      { name: "description", content: "Pantau kesehatan layanan, penyimpanan, dan log aktivitas platform." },
      { property: "og:title", content: "Status Sistem — Aksara Cinta" },
      { property: "og:description", content: "Pantau kesehatan layanan, penyimpanan, dan log aktivitas platform." },
    ],
  }),
  component: SystemPage,
});

const services = [
  { name: "Render Undangan", status: "Normal", latency: "82 ms" },
  { name: "Media CDN", status: "Normal", latency: "44 ms" },
  { name: "DompetX Gateway", status: "Normal", latency: "196 ms" },
  { name: "Pengiriman WA", status: "Terbatas", latency: "512 ms" },
];

const logs = [
  { time: "09:41", text: "Template Sakral Emas dipublikasikan" },
  { time: "09:12", text: "Pengguna baru terdaftar" },
  { time: "08:57", text: "Cadangan harian selesai" },
  { time: "08:20", text: "Pembayaran DompetX diterima" },
  { time: "07:45", text: "Cache aset dibersihkan" },
];

function SystemPage() {
  const { resetMock } = useStore();

  return (
    <>
      <PageHead title="Sistem" subtitle="Kesehatan platform">
        <Action tone="danger" size="sm" onClick={resetMock}>
          Reset
        </Action>
      </PageHead>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Metric label="Uptime" value="99.98%" sub="30 hari" icon={<Activity className="size-4" />} />
        <Metric label="Penyimpanan" value="64 GB" sub="dari 200 GB" icon={<HardDrive className="size-4" />} tone="gold" />
        <Metric label="Basis Data" value="12.4k" sub="baris aktif" icon={<Database className="size-4" />} tone="info" />
        <Metric label="Keamanan" value="Aman" sub="0 insiden" icon={<ShieldCheck className="size-4" />} tone="success" />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <GlassCard className="p-5">
          <h2 className="mb-3 text-sm font-bold tracking-wide uppercase">Layanan</h2>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item.name} className="flex items-center justify-between gap-2 text-sm">
                <span>{item.name}</span>
                <span className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-helper">{item.latency}</span>
                  <Pill tone={item.status === "Normal" ? "success" : "gold"}>{item.status}</Pill>
                </span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="p-5">
          <h2 className="mb-3 text-sm font-bold tracking-wide uppercase">Log</h2>
          <ul className="space-y-3">
            {logs.map((item) => (
              <li key={item.time} className="flex gap-3 text-sm">
                <span className="font-mono text-[11px] text-primary">{item.time}</span>
                <span className="text-muted-foreground">{item.text}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </>
  );
}
