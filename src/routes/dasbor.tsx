import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { CalendarHeart, Gift, Home, Images, LogOut, ScrollText, Users2, UserRound } from "lucide-react";
import { Avatar, initialsOf } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/dasbor")({
  component: UserLayout,
});

const navItems = [
  { to: "/dasbor", label: "Beranda", icon: Home, exact: true },
  { to: "/dasbor/mempelai", label: "Mempelai", icon: UserRound },
  { to: "/dasbor/acara", label: "Acara", icon: CalendarHeart },
  { to: "/dasbor/galeri", label: "Galeri", icon: Images },
  { to: "/dasbor/cerita", label: "Cerita", icon: ScrollText },
  { to: "/dasbor/hadiah", label: "Hadiah", icon: Gift },
  { to: "/dasbor/tamu", label: "Tamu", icon: Users2 },
];

function UserLayout() {
  const navigate = useNavigate();
  const { session, signOut } = useStore();

  return (
    <div className="min-h-screen pb-24 lg:pb-0">
      <header className="sticky top-0 z-30 border-b border-border bg-surface/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
          <span className="font-display text-lg font-bold text-gradient-gold">✦ Aksara</span>
          <div className="flex items-center gap-2">
            <Avatar text={initialsOf(session?.name ?? "Tamu")} size="sm" />
            <button
              onClick={() => {
                signOut();
                navigate({ to: "/login" });
              }}
              className="flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-destructive"
              aria-label="Keluar"
            >
              <LogOut className="size-4" />
            </button>
          </div>
        </div>
        <nav className="mx-auto hidden max-w-5xl gap-1 px-4 pb-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact ?? false }}
              className="flex min-h-9 items-center gap-2 rounded-xl px-3 text-sm font-medium text-muted-foreground transition-all hover:text-foreground data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur-xl lg:hidden">
        <div className="flex overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact ?? false }}
              className="flex min-h-16 flex-1 shrink-0 basis-16 flex-col items-center justify-center gap-1 text-[10px] font-semibold text-muted-foreground transition-colors data-[status=active]:text-primary"
            >
              <item.icon className="size-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
