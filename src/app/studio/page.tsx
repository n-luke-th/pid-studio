import { PageHeading } from "@/components/page-heading";
import { StudioWorkspace } from "@/components/studio-workspace";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Card Studio",
  description:
    "Create and customize your own digital ID cards in pID Studio. A few details, a favorite color, and a little sparkle. Your card comes together as you create.",
};

export default function StudioPage() {
  return (
    <>
      <PageHeading
        eyebrow="Your creative corner"
        title="Card Studio"
        description="A few details, a favorite color, and a little sparkle. Your card comes together as you create."
      />
      <StudioWorkspace />
    </>
  );
}
