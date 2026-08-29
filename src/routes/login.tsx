import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Crown, UserRound } from "lucide-react";
import { Action, GlassCard, Pill } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Masuk — Aksara Cinta Suite" },
      { name: "description", content: "Pemilih peran cepat untuk panel admin dan dasbor pengantin Aksara Cinta." },
      { property: "og:title", content: "Masuk — Aksara Cinta Suite" },
      { property: "og:description", content: "Pemilih peran cepat untuk panel admin dan dasbor pengantin Aksara Cinta." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { signIn } = useStore();

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <GlassCard className="w-full max-w-md p-6 sm:p-8">
        <div className="text-center">
          <p className="font-display text-2xl font-bold text-gradient-gold">✦ Aksara Cinta</p>
          <p className="mt-1 text-sm text-helper">Pilih peran</p>
        </div>

        <div className="mt-7 space-y-3">
          <button
            onClick={() => {
              signIn({ name: "Eka Syarif Maulana", email: "eka.ckp16799@gmail.com", role: "admin", tier: "Owner Super Admin" });
              navigate({ to: "/admin" });
            }}
            className="group flex w-full items-center gap-3 rounded-2xl border border-gold/25 bg-gold/8 p-4 text-left transition-all hover:glow-gold"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <Crown className="size-5" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-bold">Eka Syarif Maulana</span>
              <span className="block font-mono text-[11px] text-helper">eka.ckp16799@gmail.com</span>
            </span>
            <Pill tone="gold">Admin</Pill>
          </button>

          <button
            onClick={() => {
              signIn({ name: "Reza & Nadia", email: "reza@aksaracinta.com", role: "user", tier: "Platinum Unlimited" });
              navigate({ to: "/dasbor" });
            }}
            className="group flex w-full items-center gap-3 rounded-2xl border border-primary/25 bg-primary/8 p-4 text-left transition-all hover:glow-matcha"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <UserRound className="size-5" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-bold">Reza & Nadia</span>
              <span className="block font-mono text-[11px] text-helper">reza@aksaracinta.com</span>
            </span>
            <Pill tone="matcha">Pengantin</Pill>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <Action tone="ghost" size="sm" onClick={() => navigate({ to: "/admin" })}>
            Admin
          </Action>
          <Action tone="ghost" size="sm" onClick={() => navigate({ to: "/dasbor" })}>
            Dasbor
          </Action>
        </div>
      </GlassCard>
    </main>
  );
}
