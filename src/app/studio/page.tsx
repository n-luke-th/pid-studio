import { PageHeading } from "@/components/page-heading";
import { WandSparkles } from "lucide-react";

export default function StudioPage() {
  return (
    <>
      <PageHeading eyebrow="Create" title="Card Studio" description="Your editor workspace is being prepared. The next milestone brings in the live card editor and preview." />
      <div className="panel grid min-h-[360px] place-items-center rounded-3xl p-8 text-center">
        <div className="max-w-md">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"><WandSparkles size={24} /></div>
          <h2 className="mt-5 text-xl font-semibold text-white">The creative tools land in M2</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">This route and the shared card data model are ready. Next we’ll build the editor, live preview, theme controls, and export workflow.</p>
          <span className="mt-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-cyan-200">Milestone 2 · Card Studio</span>
        </div>
      </div>
    </>
  );
}
