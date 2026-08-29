import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { Action, Field, FormShell, GlassCard, PageHead, Pill, TextInput } from "@/components/kit";

export const Route = createFileRoute("/dasbor/acara")({
  head: () => ({
    meta: [
      { title: "Detail Acara — Aksara Cinta" },
      { name: "description", content: "Atur jadwal akad, resepsi, dan lokasi peta undangan digital." },
      { property: "og:title", content: "Detail Acara — Aksara Cinta" },
      { property: "og:description", content: "Atur jadwal akad, resepsi, dan lokasi peta undangan digital." },
    ],
  }),
  component: EventPage,
});

function EventPage() {
  const [saved, setSaved] = useState(false);
  const [akad, setAkad] = useState({ date: "2026-12-12", time: "09:00", venue: "Masjid Agung Al-Azhar" });
  const [resepsi, setResepsi] = useState({ date: "2026-12-12", time: "18:00", venue: "Balai Kartini, Jakarta" });
  const [maps, setMaps] = useState("https://maps.google.com/?q=Balai+Kartini");

  return (
    <>
      <PageHead title="Acara" subtitle="Jadwal dan lokasi">
        {saved ? <Pill tone="success">Tersimpan</Pill> : null}
      </PageHead>

      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        {[
          { label: "Akad", data: akad, tone: "matcha" as const },
          { label: "Resepsi", data: resepsi, tone: "gold" as const },
        ].map((item) => (
          <GlassCard key={item.label} className="p-5">
            <Pill tone={item.tone}>{item.label}</Pill>
            <p className="mt-3 font-display text-xl font-bold">{item.data.venue}</p>
            <p className="text-sm text-helper">
              {item.data.date} · {item.data.time} WIB
            </p>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="mb-4 flex items-center gap-3 p-4">
        <MapPin className="size-5 text-primary" />
        <p className="truncate font-mono text-xs text-muted-foreground">{maps}</p>
        <Action tone="ghost" size="sm" className="ml-auto" onClick={() => window.open(maps, "_blank")}>
          Buka
        </Action>
      </GlassCard>

      <FormShell actions={<Action tone="gold" onClick={() => setSaved(true)}>Simpan</Action>}>
        <Field label="Tanggal Akad">
          <TextInput type="date" value={akad.date} onChange={(event) => setAkad({ ...akad, date: event.target.value })} />
        </Field>
        <Field label="Jam Akad">
          <TextInput type="time" value={akad.time} onChange={(event) => setAkad({ ...akad, time: event.target.value })} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Lokasi Akad">
            <TextInput placeholder="Lokasi" value={akad.venue} onChange={(event) => setAkad({ ...akad, venue: event.target.value })} />
          </Field>
        </div>
        <Field label="Tanggal Resepsi">
          <TextInput type="date" value={resepsi.date} onChange={(event) => setResepsi({ ...resepsi, date: event.target.value })} />
        </Field>
        <Field label="Jam Resepsi">
          <TextInput type="time" value={resepsi.time} onChange={(event) => setResepsi({ ...resepsi, time: event.target.value })} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Lokasi Resepsi">
            <TextInput placeholder="Lokasi" value={resepsi.venue} onChange={(event) => setResepsi({ ...resepsi, venue: event.target.value })} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Tautan Peta">
            <TextInput placeholder="Peta" value={maps} onChange={(event) => setMaps(event.target.value)} />
          </Field>
        </div>
      </FormShell>
    </>
  );
}
