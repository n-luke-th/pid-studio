import { PageHeading } from "@/components/page-heading";
import { Archive, Plus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Cards",
  description: "View your personal cards",
};

export default function CardsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Your little collection"
        title="My Cards"
        description="Your personal card library is getting ready. Local saving and card management arrive in M3."
      />
      <div className="panel grid min-h-80 place-items-center rounded-[1.6rem] p-8 text-center">
        <div className="max-w-sm">
          <div className="icon-bubble mx-auto size-14">
            <Archive size={23} />
          </div>
          <h2 className="mt-5 text-lg font-semibold text-main">
            Your collection is waiting
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Create a card in the Studio first. We’ll add save, edit, duplicate,
            and delete in M3.
          </p>
          <Link href="/studio" className="primary-button mt-5">
            <Plus size={14} /> Create a card
          </Link>
        </div>
      </div>
    </>
  );
}
