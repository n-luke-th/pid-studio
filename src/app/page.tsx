import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileBadge, Layers3, ScanLine, Sparkles } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { StatCard } from "@/components/stat-card";

const steps = [
  { number: "01", title: "Choose a starting point", description: "Start from a preset and make it your own.", tag: "Presets" },
  { number: "02", title: "Make it yours", description: "Add identity details, fields, colors, and effects.", tag: "Card Studio" },
  { number: "03", title: "Share it anywhere", description: "Export a card image or create a scannable QR link.", tag: "Sharing" },
];

export default function HomePage() {
  return (
    <>
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <PageHeading eyebrow="Your creative workspace" title="Make identity stand out." description="Design digital ID cards that look sharp, carry the details that matter, and are easy to share." />
        <Link href="/studio" className="mb-8 inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_8px_30px_rgba(34,211,238,.12)] transition hover:-translate-y-0.5 hover:bg-cyan-200">Create your first ID <ArrowUpRight size={16} /></Link>
      </div>

      <section className="relative mb-8 overflow-hidden rounded-3xl border border-cyan-300/15 bg-[#0d1a2b] p-6 sm:p-9">
        <div className="grid-glow absolute inset-0 opacity-50" />
        <div className="absolute -right-16 -top-28 size-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200"><Sparkles size={12} /> Welcome to pID Studio</div>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Your ID. Your style.<br /><span className="text-cyan-300">Ready to scan.</span></h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">A simple studio for creating polished digital identity cards. No account setup or backend required to get started.</p>
            <Link href="/studio" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white">Launch Card Studio <ArrowRight size={16} /></Link>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] rotate-[2deg]">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-gradient-to-br from-[#183a4b] via-[#102637] to-[#11182b] p-5 shadow-2xl">
              <div className="flex items-center justify-between"><span className="text-[9px] font-bold uppercase tracking-[.24em] text-cyan-200">Digital access identity</span><ScanLine className="text-cyan-200" size={19} /></div>
              <div className="mt-7 flex items-center gap-4">
                <div className="grid size-16 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-2xl font-semibold text-cyan-100">JD</div>
                <div><p className="text-xl font-semibold text-white">Jordan Davis</p><p className="mt-1 text-xs text-cyan-100/65">Product Designer</p></div>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                <div><p className="text-[9px] uppercase tracking-widest text-slate-500">Organization</p><p className="mt-1 text-xs font-medium text-slate-200">NOVA LABS</p></div>
                <div><p className="text-[9px] uppercase tracking-widest text-slate-500">Badge ID</p><p className="mt-1 text-xs font-medium text-slate-200">PID-2048</p></div>
              </div>
              <div className="mt-5 flex items-center justify-between"><span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-emerald-200">Active identity</span><span className="text-[9px] tracking-widest text-slate-500">SAMPLE PREVIEW</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <StatCard label="Cards created" value="—" hint="Your saved cards will appear here" icon={FileBadge} />
        <StatCard label="Available presets" value="04" hint="Starter designs planned for M3" icon={Layers3} />
        <StatCard label="QR sharing" value="Next up" hint="Public card viewer arrives in M4" icon={ScanLine} />
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between"><h3 className="text-base font-semibold text-white">How it works</h3><span className="text-xs text-slate-500">Three simple steps</span></div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => <div key={step.number} className="panel rounded-2xl p-5"><div className="flex items-center justify-between"><span className="text-xs font-semibold tracking-widest text-cyan-300">{step.number}</span><span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-500">{step.tag}</span></div><h4 className="mt-5 text-sm font-semibold text-white">{step.title}</h4><p className="mt-2 text-xs leading-5 text-slate-400">{step.description}</p></div>)}
        </div>
      </section>
    </>
  );
}
