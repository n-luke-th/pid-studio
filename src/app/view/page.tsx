import { PageHeading } from "@/components/page-heading";
import { ScanLine } from "lucide-react";

export default function PublicViewPage() {
  return (
    <>
      <PageHeading eyebrow="Public card" title="ID Card Viewer" description="This route will display a shared card in read-only mode when QR sharing is added." />
      <div className="panel grid min-h-[300px] place-items-center rounded-3xl p-8 text-center">
        <div><ScanLine className="mx-auto text-cyan-200" size={30} /><h2 className="mt-4 text-lg font-semibold text-white">Waiting for a shared card</h2><p className="mt-2 text-sm text-slate-400">QR payload decoding and public card rendering are scheduled for M4.</p></div>
      </div>
    </>
  );
}
