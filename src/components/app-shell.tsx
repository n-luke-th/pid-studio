"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CircleHelp, Command, Plus, Sparkles } from "lucide-react";
import { navigationItems } from "@/data/navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#080d18] text-slate-100">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-white/[0.07] bg-[#0b1220] px-5 py-6 lg:flex">
        <Link href="/" className="mb-10 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-cyan-300 text-slate-950 shadow-[0_0_28px_rgba(103,232,249,.22)]"><Command size={21} /></span>
          <span>
            <span className="block text-base font-semibold tracking-wide text-white">pID Studio</span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-slate-500">Digital identity lab</span>
          </span>
        </Link>

        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Workspace</p>
        <nav className="space-y-1">
          {navigationItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
            return (
              <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${active ? "border border-cyan-300/15 bg-cyan-300/10 font-medium text-cyan-200" : "text-slate-400 hover:bg-white/[0.04] hover:text-white"}`}>
                <Icon size={17} /> {label}
                {active ? <span className="ml-auto size-1.5 rounded-full bg-cyan-300" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.10] to-blue-500/[0.04] p-4">
          <div className="mb-3 flex items-center gap-2 text-cyan-200"><Sparkles size={16} /><span className="text-xs font-semibold">Build something distinct</span></div>
          <p className="text-xs leading-5 text-slate-400">Create a digital ID that is ready to share, scan, and show.</p>
          <Link href="/studio" className="mt-4 flex items-center justify-between rounded-lg bg-cyan-300 px-3 py-2.5 text-xs font-semibold text-slate-950 hover:bg-cyan-200">Open Studio <ArrowUpRight size={14} /></Link>
        </div>
        <div className="mt-5 flex items-center gap-2 px-2 text-xs text-slate-600"><CircleHelp size={14} /> M1 Foundation</div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-white/[0.07] bg-[#080d18]/85 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-2 lg:hidden">
            <span className="grid size-8 place-items-center rounded-lg bg-cyan-300 text-slate-950"><Command size={17} /></span>
            <span className="font-semibold text-white">pID Studio</span>
          </div>
          <div className="hidden text-xs text-slate-500 lg:block">Workspace <span className="px-2 text-slate-700">/</span> <span className="text-slate-300">{pathname === "/" ? "Overview" : pathname.slice(1).replace("/", " ")}</span></div>
          <Link href="/studio" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-200"><Plus size={15} /> Create ID</Link>
        </header>

        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10">{children}</main>
      </div>
    </div>
  );
}
