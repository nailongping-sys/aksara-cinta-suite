import { createFileRoute } from "@tanstack/react-router";
import { Eye, Heart, MessageSquareHeart, Users2 } from "lucide-react";
import { useEffect, useState } from "react";
import { GlassCard, LinkAction, Metric, PageHead, Pill } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/dasbor/")({
  head: () => ({
    meta: [
      { title: "Beranda Dasbor — Aksara Cinta" },
      { name: "description", content: "Hitung mundur hari bahagia, statistik tamu, dan ucapan terbaru." },
      { property: "og:title", content: "Beranda Dasbor — Aksara Cinta" },
      { property: "og:description", content: "Hitung mundur hari bahagia, statistik tamu, dan ucapan terbaru." },
    ],
  }),
  component: UserHomePage,
});

const target = new Date("2026-12-12T09:00:00+07:00").getTime();

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const diff = Math.max(target - now, 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function UserHomePage() {
  const { session, rsvps, guests, invitations } = useStore();
  const countdown = useCountdown();
  const invitation = invitations[0];
  const attending = rsvps.filter((item) => item.attendance === "Hadir").length;

  return (
    <>
      <PageHead title={`Halo, ${session?.name?.split(" ")[0] ?? "Mempelai"}`} subtitle="Hari bahagia menanti">
        <LinkAction to="/dasbor/tamu" tone="gold" size="sm">
          Undang
        </LinkAction>
      </PageHead>

      <GlassCard className="mb-4 overflow-hidden p-6 text-center">
        <Pill tone="gold">{invitation?.status ?? "Draf"}</Pill>
        <h2 className="mt-3 font-display text-3xl font-bold text-gradient-gold">
          {invitation?.groom ?? "Mempelai"} & {invitation?.bride ?? "Pasangan"}
        </h2>
        <p className="mt-1 text-sm text-helper">12 Desember 2026</p>
        <div className="mt-5 grid grid-cols-4 gap-2">
          {[
            { label: "Hari", value: countdown.days },
            { label: "Jam", value: countdown.hours },
            { label: "Menit", value: countdown.minutes },
            { label: "Detik", value: countdown.seconds },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-primary/25 bg-primary/8 py-3">
              <p className="font-display text-2xl font-bold text-primary">{String(item.value).padStart(2, "0")}</p>
              <p className="text-[10px] tracking-wide text-helper uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Metric label="Dilihat" value={String(invitation?.views ?? 0)} sub="total kunjungan" icon={<Eye className="size-4" />} />
        <Metric label="Hadir" value={String(attending)} sub="konfirmasi" icon={<Heart className="size-4" />} tone="gold" />
        <Metric label="Tamu" value={String(guests.length)} sub="terdaftar" icon={<Users2 className="size-4" />} tone="info" />
        <Metric label="Ucapan" value={String(rsvps.length)} sub="pesan masuk" icon={<MessageSquareHeart className="size-4" />} tone="success" />
      </div>

      <GlassCard className="mt-4 p-5">
        <h2 className="mb-3 text-sm font-bold tracking-wide uppercase">Ucapan</h2>
        <ul className="space-y-3">
          {rsvps.slice(0, 5).map((item) => (
            <li key={item.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold">{item.guest}</p>
                <Pill tone={item.attendance === "Hadir" ? "success" : "neutral"}>{item.attendance}</Pill>
              </div>
              <p className="text-sm text-muted-foreground">{item.message}</p>
            </li>
          ))}
        </ul>
      </GlassCard>
    </>
  );
}
