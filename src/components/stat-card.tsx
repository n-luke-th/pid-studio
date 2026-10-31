import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
}

export function StatCard({ label, value, hint, icon: Icon }: StatCardProps) {
  return (
    <section className="panel rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">{label}</p>
        <span className="icon-bubble">
          <Icon size={18} />
        </span>
      </div>
      <p className="mt-5 text-3xl font-semibold text-main">{value}</p>
      <p className="mt-1 text-xs text-muted">{hint}</p>
    </section>
  );
}
