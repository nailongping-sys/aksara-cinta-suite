import { createFileRoute, Link } from "@tanstack/react-router";
import { BookHeart, CreditCard, Eye, Mail, MessageSquareHeart, Music, Quote, ServerCog, Sparkles, Users } from "lucide-react";
import { Avatar, GlassCard, initialsOf, LinkAction, Metric, PageHead, Pill } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Ikhtisar Admin — Aksara Cinta" },
      { name: "description", content: "Ringkasan performa platform undangan digital Aksara Cinta." },
      { property: "og:title", content: "Ikhtisar Admin — Aksara Cinta" },
      { property: "og:description", content: "Ringkasan performa platform undangan digital Aksara Cinta." },
    ],
  }),
  component: AdminOverview,
});

const shortcuts = [
  { to: "/admin/template", label: "Template", icon: Sparkles },
  { to: "/admin/doa", label: "Doa", icon: BookHeart },
  { to: "/admin/quotes", label: "Quotes", icon: Quote },
  { to: "/admin/musik", label: "Musik", icon: Music },
  { to: "/admin/sistem", label: "Sistem", icon: ServerCog },
];

function AdminOverview() {
  const { invitations, users } = useStore();

  return (
    <>
      <PageHead title="Ikhtisar" subtitle="Ringkasan performa sistem">
        <LinkAction to="/admin/pengguna/baru" tone="ghost" size="sm">
          + Pengguna
        </LinkAction>
        <LinkAction to="/admin/undangan/baru" tone="gold" size="sm">
          + Undangan
        </LinkAction>
      </PageHead>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Metric label="Pengguna" value="128" sub="Akun terdaftar" icon={<Users className="size-4" />} tone="matcha" />
        <Metric label="Undangan" value="342" sub="298 Aktif · 44 Draf" icon={<Mail className="size-4" />} tone="gold" />
        <Metric label="RSVP" value="1.420" sub="Konfirmasi masuk" icon={<MessageSquareHeart className="size-4" />} tone="info" />
        <Metric label="DompetX" value="Rp 18.450.000" sub="Bulan ini" icon={<CreditCard className="size-4" />} tone="success" />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <GlassCard className="p-4">
          <h2 className="text-base font-bold">Undangan Terbaru</h2>
          <div className="mt-3 space-y-2">
            {invitations.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate font-mono text-xs text-primary">/u/{item.slug}</p>
                  <p className="truncate text-xs text-helper">{item.template}</p>
                </div>
                <Pill tone="info">
                  <Eye className="size-3" /> {item.views}
                </Pill>
                <LinkAction to="/admin/undangan/$id" params={{ id: item.id }} tone="ghost" size="sm">
                  Edit
                </LinkAction>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <h2 className="text-base font-bold">Pengguna Terbaru</h2>
          <div className="mt-3 space-y-2">
            {users.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-3">
                <Avatar text={initialsOf(item.name)} tone={item.role === "admin" ? "gold" : "matcha"} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{item.name}</p>
                  <p className="truncate text-[11px] text-helper">{item.email}</p>
                </div>
                <Pill tone={item.tier === "Owner" ? "gold" : item.tier === "Free" ? "neutral" : "matcha"}>{item.tier}</Pill>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {shortcuts.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="glass flex flex-col items-center gap-2 rounded-2xl p-4 text-center transition-all hover:border-primary/35"
          >
            <item.icon className="size-5 text-primary" />
            <span className="text-xs font-semibold">{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
