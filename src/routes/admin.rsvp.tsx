import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Action, ConfirmDelete, GlassCard, PageHead, Pill, SelectInput } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/rsvp")({
  head: () => ({
    meta: [
      { title: "RSVP Global — Aksara Cinta" },
      { name: "description", content: "Seluruh konfirmasi kehadiran dan ucapan tamu undangan." },
      { property: "og:title", content: "RSVP Global — Aksara Cinta" },
      { property: "og:description", content: "Seluruh konfirmasi kehadiran dan ucapan tamu undangan." },
    ],
  }),
  component: AdminRsvpPage,
});

function AdminRsvpPage() {
  const { rsvps, invitations, setState } = useStore();
  const [slug, setSlug] = useState("Semua");
  const [attendance, setAttendance] = useState("Semua");
  const [pending, setPending] = useState<string | null>(null);

  const rows = rsvps.filter(
    (item) => (slug === "Semua" || item.slug === slug) && (attendance === "Semua" || item.attendance === attendance),
  );

  return (
    <>
      <PageHead title="RSVP & Ucapan" subtitle="Konfirmasi kehadiran tamu">
        <SelectInput value={slug} onChange={(event) => setSlug(event.target.value)} className="w-40">
          <option>Semua</option>
          {invitations.map((item) => (
            <option key={item.id}>{item.slug}</option>
          ))}
        </SelectInput>
        <SelectInput value={attendance} onChange={(event) => setAttendance(event.target.value)} className="w-36">
          {["Semua", "Hadir", "Ragu", "Tidak Hadir"].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </SelectInput>
        <Action tone="gold" size="sm">
          Export
        </Action>
      </PageHead>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {rows.map((item) => (
          <GlassCard key={item.id} className="space-y-2 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold">{item.guest}</p>
              <Pill tone={item.attendance === "Hadir" ? "success" : item.attendance === "Ragu" ? "info" : "neutral"}>
                {item.attendance}
              </Pill>
            </div>
            <p className="font-mono text-[11px] text-primary">/u/{item.slug}</p>
            <p className="text-sm text-foreground/85">{item.message}</p>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-helper">
                {item.pax} pax · {item.time}
              </span>
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
          setState((state) => ({ ...state, rsvps: state.rsvps.filter((item) => item.id !== pending) }));
          setPending(null);
        }}
      />
    </>
  );
}
