import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileBadge,
  Layers3,
  ScanLine,
  Sparkles,
} from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { StatCard } from "@/components/stat-card";

const steps = [
  {
    number: "01",
    title: "Choose a starting point",
    description:
      "Pick a look that feels like you. More ready-made presets are on the way.",
    tag: "Choose",
  },
  {
    number: "02",
    title: "Add your little details",
    description:
      "Personalize your identity, colors, picture, and extra information.",
    tag: "Create",
  },
  {
    number: "03",
    title: "Take it with you",
    description:
      "Download a crisp PNG now. Scannable sharing is coming in a later milestone.",
    tag: "Share",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="mb-8 mx-1 flex flex-wrap items-end justify-between gap-5">
        <PageHeading
          eyebrow="Your happy little workspace"
          title="Make an ID that feels like you."
          description="A friendly place to create digital ID cards with personality. Start with a few details, choose your favorite look, and make it yours."
        />
        <Link href="/studio" className="primary-button mb-8">
          Create an ID <ArrowUpRight size={16} />
        </Link>
      </div>

      <section className="relative mb-8 overflow-hidden rounded-4xl border border-(--border) bg-(--panel) p-6 shadow-(--shadow) sm:p-9">
        <div className="absolute -right-16 -top-24 size-80 rounded-full bg-(--accent) opacity-[.09] blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--soft) px-3 py-1.5 text-[10px] font-semibold text-accent">
              <Sparkles size={12} /> A little creativity goes a long way
            </div>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-main sm:text-4xl">
              A tiny bit of magic.
              <br />
              <span className="text-accent">A whole lot of you.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-muted">
              Create a digital ID that looks lovely, feels personal, and is
              ready to take wherever you go.
            </p>
            <Link
              href="/studio"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-75"
            >
              Let&apos;s make something <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-105 rotate-2">
            <div className="absolute -inset-4 rounded-4xl bg-(--accent) opacity-10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/50 bg-linear-to-br from-[#d9f8eb] via-[#b7ead9] to-[#9bd7ca] p-5 text-[#29443e] shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[.2em] opacity-70">
                  Digital identity card
                </span>
                <ScanLine size={19} />
              </div>
              <div className="mt-7 flex items-center gap-4">
                <div className="grid size-16 place-items-center rounded-[1.3rem] border-2 border-white/60 bg-white/35 text-2xl font-semibold">
                  JD
                </div>
                <div>
                  <p className="text-xl font-semibold">Jordan Davis</p>
                  <p className="mt-1 text-xs opacity-70">Creative Explorer</p>
                </div>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-[#47786c]/20 pt-4">
                <div>
                  <p className="text-[9px] uppercase tracking-widest opacity-60">
                    Organization
                  </p>
                  <p className="mt-1 text-xs font-semibold">NOVA CLUB</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest opacity-60">
                    Badge ID
                  </p>
                  <p className="mt-1 text-xs font-semibold">PID-2048</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-white/40 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider">
                  Sample identity
                </span>
                <span className="text-[9px] tracking-widest opacity-50">
                  A LITTLE ID MAGIC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Cards in your library"
          value="Soon"
          hint="Local card saving arrives in M3"
          icon={FileBadge}
        />
        <StatCard
          label="Card looks"
          value="04"
          hint="Four starter styles in the Studio"
          icon={Layers3}
        />
        <StatCard
          label="QR sharing"
          value="Soon"
          hint="Scan-to-view arrives in M4"
          icon={ScanLine}
        />
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-main">
            Your creative flow
          </h3>
          <span className="text-xs text-muted">Easy as 1, 2, 3</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="panel rounded-[1.4rem] p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-accent">
                  {step.number}
                </span>
                <span className="rounded-full border border-(--border) bg-(--soft) px-2.5 py-1 text-[10px] text-muted">
                  {step.tag}
                </span>
              </div>
              <h4 className="mt-5 text-sm font-semibold text-main">
                {step.title}
              </h4>
              <p className="mt-2 text-xs leading-5 text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
