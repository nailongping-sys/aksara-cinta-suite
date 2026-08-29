import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "glass rounded-2xl transition-all duration-300 hover:border-primary/35 hover:shadow-[0_18px_50px_-25px_var(--primary)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

const toneMap = {
  matcha: "bg-primary/12 text-primary border-primary/30",
  gold: "bg-gold/12 text-gold border-gold/30",
  info: "bg-info/12 text-info border-info/30",
  success: "bg-success/12 text-success border-success/30",
  danger: "bg-danger/12 text-danger border-danger/30",
  neutral: "bg-muted text-muted-foreground border-border",
} as const;

export type Tone = keyof typeof toneMap;

export function Pill({ tone = "neutral", className, children }: { tone?: Tone; className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

const buttonTones = {
  primary: "bg-[image:var(--gradient-matcha)] text-primary-foreground hover:brightness-110",
  gold: "bg-[image:var(--gradient-gold)] text-primary-foreground hover:brightness-110",
  ghost: "bg-secondary/60 text-foreground border border-border hover:border-primary/40",
  danger: "bg-danger/12 text-danger border border-danger/30 hover:bg-danger/20",
} as const;

type ActionProps = {
  tone?: keyof typeof buttonTones;
  size?: "sm" | "md";
  className?: string;
  children: ReactNode;
};

export function Action({ tone = "primary", size = "md", className, children, ...props }: ActionProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-50",
        size === "sm" ? "min-h-9 px-3 text-xs" : "px-4 text-sm",
        buttonTones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkAction({
  to,
  params,
  tone = "primary",
  size = "md",
  className,
  children,
}: ActionProps & { to: string; params?: Record<string, string> }) {
  return (
    <Link
      to={to}
      params={params as never}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.97]",
        size === "sm" ? "min-h-9 px-3 text-xs" : "px-4 text-sm",
        buttonTones[tone],
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function PageHead({
  title,
  subtitle,
  back,
  children,
}: {
  title: string;
  subtitle?: string;
  back?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        {back ? (
          <Link
            to={back}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary/60 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Kembali"
          >
            <ArrowLeft className="size-4" />
          </Link>
        ) : null}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle ? <p className="text-sm text-helper">{subtitle}</p> : null}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</span>
      {children}
      {hint ? <span className="text-[11px] text-helper">{hint}</span> : null}
    </label>
  );
}

const controlClass =
  "min-h-11 w-full rounded-xl border border-input bg-surface/70 px-3 text-sm text-foreground outline-none transition-all placeholder:text-helper focus:border-primary/50 focus:ring-2 focus:ring-ring";

export function TextInput({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(controlClass, className)} {...props} />;
}

export function TextArea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea rows={3} className={cn(controlClass, "py-2.5 leading-relaxed", className)} {...props} />;
}

export function SelectInput({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <select className={cn(controlClass, "appearance-none", className)} {...props}>
      {children}
    </select>
  );
}

export function FormShell({ children, actions }: { children: ReactNode; actions: ReactNode }) {
  return (
    <GlassCard className="p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
      <div className="mt-6 flex flex-wrap justify-end gap-2 border-t border-border pt-4">{actions}</div>
    </GlassCard>
  );
}

export function Metric({
  label,
  value,
  sub,
  icon,
  tone = "matcha",
}: {
  label: string;
  value: string;
  sub: string;
  icon: ReactNode;
  tone?: Tone;
}) {
  return (
    <GlassCard className="p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</p>
        <span className={cn("flex size-9 items-center justify-center rounded-xl border", toneMap[tone])}>{icon}</span>
      </div>
      <p className="mt-3 text-2xl font-bold tracking-tight">{value}</p>
      <p className="text-xs text-helper">{sub}</p>
    </GlassCard>
  );
}

export function Avatar({ text, tone = "matcha", size = "md" }: { text: string; tone?: "matcha" | "gold"; size?: "sm" | "md" | "lg" }) {
  const dims = { sm: "size-8 text-[11px]", md: "size-10 text-xs", lg: "size-20 text-2xl" }[size];
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border font-bold",
        dims,
        tone === "gold" ? "border-gold/40 bg-gold/12 text-gold" : "border-primary/40 bg-primary/12 text-primary",
      )}
    >
      {text}
    </span>
  );
}

export function initialsOf(name: string) {
  return name
    .replace(/&/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function DataTable({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <GlassCard className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface/40">
              {head.map((item) => (
                <th key={item} className="px-4 py-3 text-[11px] font-semibold tracking-wider text-helper uppercase">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">{children}</tbody>
        </table>
      </div>
    </GlassCard>
  );
}

export function ConfirmDelete({
  open,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm">
      <GlassCard className="w-full max-w-sm p-5">
        <h2 className="text-lg font-bold">Hapus data?</h2>
        <p className="mt-1 text-sm text-helper">Tindakan permanen.</p>
        <div className="mt-5 flex justify-end gap-2">
          <Action tone="ghost" onClick={onCancel}>
            Batal
          </Action>
          <Action tone="danger" onClick={onConfirm}>
            Hapus
          </Action>
        </div>
      </GlassCard>
    </div>
  );
}

export function formatIdr(value: number) {
  return `Rp ${value.toLocaleString("id-ID")}`;
}
