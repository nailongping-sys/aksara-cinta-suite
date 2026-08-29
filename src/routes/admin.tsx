import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import {
  BookHeart,
  CreditCard,
  Database,
  Image,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  MessageSquareHeart,
  Music,
  Quote,
  ScrollText,
  ServerCog,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/kit";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const navItems = [
  { to: "/admin", label: "Ikhtisar", icon: LayoutDashboard, exact: true },
  { to: "/admin/pengguna", label: "Pengguna", icon: Users },
  { to: "/admin/undangan", label: "Undangan", icon: Mail },
  { to: "/admin/template", label: "Template", icon: Sparkles },
  { to: "/admin/doa", label: "Doa", icon: BookHeart },
  { to: "/admin/quotes", label: "Quotes", icon: Quote },
  { to: "/admin/surat", label: "Surat", icon: ScrollText },
  { to: "/admin/musik", label: "Musik", icon: Music },
  { to: "/admin/galeri-aset", label: "Aset", icon: Image },
  { to: "/admin/rsvp", label: "RSVP", icon: MessageSquareHeart },
  { to: "/admin/transaksi", label: "Transaksi", icon: CreditCard },
  { to: "/admin/sistem", label: "Sistem", icon: ServerCog },
];

function AdminLayout() {
  const navigate = useNavigate();
  const { signOut } = useStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen lg:flex">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-60 border-r border-border bg-surface/85 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-14 items-center gap-2 border-b border-border px-5">
          <span className="font-display text-lg font-bold text-gradient-gold">✦ Aksara</span>
        </div>
        <nav className="flex h-[calc(100vh-3.5rem)] flex-col gap-1 overflow-y-auto p-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact ?? false }}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary/60 hover:text-foreground data-[status=active]:border data-[status=active]:border-primary/30 data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
          <Link
            to="/admin/profil"
            className="mt-auto flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium text-muted-foreground hover:text-gold"
          >
            <Database className="size-4" />
            Profil
          </Link>
        </nav>
      </aside>

      {open ? <div className="fixed inset-0 z-30 bg-background/70 lg:hidden" onClick={() => setOpen(false)} /> : null}

      <div className="flex min-w-0 flex-1 flex-col lg:ml-60">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl">
          <button className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Menu">
            <Menu className="size-5" />
          </button>
          <span className="font-display text-sm tracking-[0.3em] text-helper uppercase">Control Center</span>
          <div className="flex items-center gap-2">
            <Link to="/admin/profil">
              <Avatar text="EK" tone="gold" size="sm" />
            </Link>
            <button
              onClick={() => {
                signOut();
                navigate({ to: "/login" });
              }}
              className="flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-danger"
              aria-label="Keluar"
            >
              <LogOut className="size-4" />
            </button>
          </div>
        </header>
        <main className="min-w-0 flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
