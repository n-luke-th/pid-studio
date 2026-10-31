"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Heart, Sparkles, WandSparkles } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { HeaderControls } from "@/components/header-controls";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-frame min-h-screen">
      <aside className="sidebar fixed inset-y-0 left-0 z-30 hidden w-64 flex-col px-5 py-6 lg:flex">
        <Link href="/" className="mb-10 flex items-center gap-3">
          <span className="brand-mark">
            <WandSparkles size={21} />
          </span>
          <span>
            <span className="block text-base font-semibold tracking-tight text-main">
              pID Studio
            </span>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-muted">
              A little ID magic
            </span>
          </span>
        </Link>

        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          Your workspace
        </p>
        <nav className="space-y-1">
          {navigationItems.map(({ label, href, icon: Icon }) => {
            const active =
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`));
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                <Icon size={17} /> {label}
                {active ? (
                  <span className="ml-auto size-1.5 rounded-full bg-(--accent)" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-note mt-auto rounded-[1.4rem] p-4">
          <div className="mb-3 flex items-center gap-2 text-accent">
            <Sparkles size={16} />
            <span className="text-xs font-semibold">A tiny creative boost</span>
          </div>
          <p className="text-xs leading-5 text-muted">
            Make an ID card that feels like you. Pick a look, add your details,
            and let it shine.
          </p>
          <Link
            href="/studio"
            className="soft-button mt-4 flex items-center justify-between"
          >
            Open Studio <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="mt-5 flex items-center gap-2 px-2 text-xs text-muted">
          <Heart size={13} className="text-accent" /> Made for good ideas
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="topbar sticky top-0 z-20 flex min-h-18 items-center justify-between gap-3 px-5 sm:px-8">
          <div className="flex items-center gap-2 lg:hidden">
            <span className="brand-mark brand-mark-small">
              <WandSparkles size={17} />
            </span>
            <span className="font-semibold text-main">pID Studio</span>
          </div>
          <div className="hidden text-xs text-muted lg:block">
            Workspace <span className="px-2 opacity-40">/</span>{" "}
            <span className="capitalize text-main">
              {pathname === "/"
                ? "Overview"
                : pathname.slice(1).replace("/", " ")}
            </span>
          </div>
          <div className="ml-auto">
            <HeaderControls />
          </div>
        </header>

        <main className="mx-auto max-w-370 px-5 py-8 sm:px-8 sm:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
