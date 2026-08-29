import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aksara Cinta — Pengalihan" },
      { name: "description", content: "Pengalihan otomatis menuju panel Aksara Cinta." },
      { property: "og:title", content: "Aksara Cinta — Pengalihan" },
      { property: "og:description", content: "Pengalihan otomatis menuju panel Aksara Cinta." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RootRedirect,
});

function RootRedirect() {
  const navigate = useNavigate();
  const { session, hydrated } = useStore();

  useEffect(() => {
    if (!hydrated) return;
    if (session?.role === "admin") navigate({ to: "/admin" });
    else if (session?.role === "user") navigate({ to: "/dasbor" });
    else navigate({ to: "/login" });
  }, [session, hydrated, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="font-display text-sm tracking-[0.4em] text-primary uppercase">Aksara</p>
    </div>
  );
}
