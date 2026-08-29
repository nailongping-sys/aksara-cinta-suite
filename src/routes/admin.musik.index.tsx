import { createFileRoute } from "@tanstack/react-router";
import { Pause, Play, Volume2 } from "lucide-react";
import { useState } from "react";
import { Action, ConfirmDelete, DataTable, GlassCard, LinkAction, PageHead, Pill } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/musik/")({
  head: () => ({
    meta: [
      { title: "Koleksi Musik — Aksara Cinta" },
      { name: "description", content: "Daftar lagu latar resmi untuk undangan pernikahan digital." },
      { property: "og:title", content: "Koleksi Musik — Aksara Cinta" },
      { property: "og:description", content: "Daftar lagu latar resmi untuk undangan pernikahan digital." },
    ],
  }),
  component: MusicPage,
});

function MusicPage() {
  const { music, setState } = useStore();
  const [activeId, setActiveId] = useState(music[0]?.id ?? "");
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [pending, setPending] = useState<string | null>(null);
  const active = music.find((item) => item.id === activeId) ?? music[0];

  return (
    <>
      <PageHead title="Koleksi Musik" subtitle="Lagu latar undangan">
        <LinkAction to="/admin/musik/baru" tone="gold" size="sm">
          + Tambah
        </LinkAction>
      </PageHead>

      {active ? (
        <GlassCard className="mb-4 flex flex-wrap items-center gap-4 p-4">
          <button
            onClick={() => setPlaying((value) => !value)}
            className="flex size-12 items-center justify-center rounded-full bg-[image:var(--gradient-matcha)] text-primary-foreground"
            aria-label="Putar"
          >
            {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
          </button>
          <div className="min-w-40 flex-1">
            <p className="text-sm font-bold">{active.title}</p>
            <p className="text-xs text-helper">{active.artist}</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-1/3 rounded-full bg-[image:var(--gradient-matcha)]" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="size-4 text-muted-foreground" />
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
              className="accent-primary"
            />
          </div>
        </GlassCard>
      ) : null}

      <DataTable head={["Putar", "Judul", "Artis", "Genre", "Durasi", "Sumber", "Aksi"]}>
        {music.map((item) => (
          <tr key={item.id} className="transition-colors hover:bg-surface/40">
            <td className="px-4 py-3">
              <button
                onClick={() => {
                  setActiveId(item.id);
                  setPlaying(true);
                }}
                className="flex size-9 items-center justify-center rounded-xl border border-primary/30 text-primary"
                aria-label="Putar"
              >
                <Play className="size-4" />
              </button>
            </td>
            <td className="px-4 py-3 font-semibold">{item.title}</td>
            <td className="px-4 py-3 text-muted-foreground">{item.artist}</td>
            <td className="px-4 py-3">
              <Pill tone="matcha">{item.genre}</Pill>
            </td>
            <td className="px-4 py-3 font-mono text-xs">{item.duration}</td>
            <td className="max-w-40 truncate px-4 py-3 font-mono text-[11px] text-helper">{item.url}</td>
            <td className="px-4 py-3">
              <div className="flex gap-2">
                <LinkAction to="/admin/musik/baru" tone="ghost" size="sm">
                  Edit
                </LinkAction>
                <Action tone="danger" size="sm" onClick={() => setPending(item.id)}>
                  Hapus
                </Action>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>

      <ConfirmDelete
        open={pending !== null}
        onCancel={() => setPending(null)}
        onConfirm={() => {
          setState((state) => ({ ...state, music: state.music.filter((item) => item.id !== pending) }));
          setPending(null);
        }}
      />
    </>
  );
}
