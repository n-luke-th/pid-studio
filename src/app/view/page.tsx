import { PageHeading } from "@/components/page-heading";
import { ScanLine } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shared Card Viewer",
  description:
    "View a shared card in a clean, read-only format on pID Studio. QR sharing is coming in M4.",
};

export default function PublicViewPage() {
  return (
    <>
      <PageHeading
        eyebrow="Shared card"
        title="ID Card Viewer"
        description="A shared card will appear here in a clean, read-only view when QR sharing is added."
      />
      <div className="panel grid min-h-75 place-items-center rounded-[1.6rem] p-8 text-center">
        <div>
          <ScanLine className="mx-auto text-accent" size={30} />
          <h2 className="mt-4 text-lg font-semibold text-main">
            Waiting for a shared card
          </h2>
          <p className="mt-2 text-sm text-muted">
            QR payload decoding and public card rendering are scheduled for M4.
          </p>
        </div>
      </div>
    </>
  );
}
