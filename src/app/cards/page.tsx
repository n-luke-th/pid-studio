import { PageHeading } from "@/components/page-heading";
import { Archive, Plus } from "lucide-react";
import Link from "next/link";

export default function CardsPage() {
  return (
    <>
      <PageHeading eyebrow="Your library" title="My Cards" description="Your locally saved ID cards will be organized here. Card storage arrives in M3." />
      <div className="panel grid min-h-[320px] place-items-center rounded-3xl p-8 text-center">
        <div className="max-w-sm">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300"><Archive size={23} /></div>
          <h2 className="mt-5 text-lg font-semibold text-white">Your card library starts here</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">Create a card in the Studio first. We’ll add local save, edit, duplicate, and delete in M3.</p>
          <Link href="/studio" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-4 py-2.5 text-xs font-bold text-slate-950"><Plus size={14} /> Create a card</Link>
        </div>
      </div>
    </>
  );
}
