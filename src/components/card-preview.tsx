"use client";

import { useState } from "react";
import {
  BadgeCheck,
  CalendarDays,
  FlipHorizontal,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { PidCard } from "@/types/card";

const themeClass: Record<PidCard["design"]["themeId"], string> = {
  mint: "id-card-mint",
  lavender: "id-card-lavender",
  midnight: "id-card-midnight",
  peach: "id-card-peach",
};

export function CardPreview({
  card,
  cardRef,
  onFaceChange,
}: {
  card: PidCard;
  cardRef: React.RefObject<HTMLDivElement | null>;
  onFaceChange?: (isBack: boolean) => void;
}) {
  const [showBack, setShowBack] = useState(false);

  const { identity, design, fields } = card;

  const initials =
    identity.fullName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "ID";

  const cardTheme = `${themeClass[design.themeId]} ${
    design.holographic ? "id-card-holo" : ""
  }`;

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-main">Live preview</span>

        <button
          type="button"
          onClick={() => {
            setShowBack((value) => {
              const next = !value;
              onFaceChange?.(next);
              return next;
            });
          }}
          className="mini-button"
          aria-label="Flip ID card"
          aria-pressed={showBack}
        >
          <FlipHorizontal size={14} />
          Flip card
        </button>
      </div>

      <div className="id-card-scene">
        <div
          ref={cardRef}
          className={`id-card-flipper ${showBack ? "is-flipped" : ""}`}
        >
          {/* FRONT */}
          <div className={`id-card-face id-card-front ${cardTheme}`}>
            <div className="id-card-orb id-card-orb-one" />
            <div className="id-card-orb id-card-orb-two" />

            <div className="relative z-10 flex items-start justify-between gap-3">
              <div>
                <p className="id-kicker">DIGITAL IDENTITY</p>

                <p className="mt-1 max-w-57.5 truncate text-sm font-semibold tracking-wide">
                  {identity.organization || "YOUR ORGANIZATION"}
                </p>
              </div>

              <div className="rounded-xl border border-current/15 bg-white/10 p-2">
                <ShieldCheck size={20} />
              </div>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-4">
              <div className="id-avatar">
                {identity.avatarUrl ? (
                  <img src={identity.avatarUrl} alt="Card portrait" />
                ) : (
                  <span>{initials}</span>
                )}
              </div>

              <div className="min-w-0">
                <p className="id-name">{identity.fullName || "Your Name"}</p>

                <p className="mt-1 truncate text-xs opacity-75">
                  {identity.jobRole || "Your role"}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold tracking-wide">
                  <BadgeCheck size={11} />
                  VERIFIED PROFILE
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-auto flex items-end justify-between border-t border-current/15 pt-4">
              <div>
                <p className="id-label">BADGE NUMBER</p>
                <p className="mt-1 text-xs font-semibold tracking-[.12em]">
                  {identity.badgeNumber || "PID-0001"}
                </p>
              </div>

              <div className="text-right">
                <p className="id-label">VALID UNTIL</p>
                <p className="mt-1 text-xs font-semibold">
                  {identity.expiryDate || "—"}
                </p>
              </div>
            </div>

            <Sparkles
              className="absolute bottom-5 right-5 opacity-30"
              size={18}
            />
          </div>

          {/* BACK */}
          <div className={`id-card-face id-card-back ${cardTheme}`}>
            <div className="id-card-orb id-card-orb-one" />

            <div className="relative z-10 flex items-center justify-between">
              <p className="id-kicker">ADDITIONAL INFORMATION</p>
              <Heart size={17} />
            </div>

            <div className="relative z-10 mt-7 space-y-4">
              <div>
                <p className="id-label">ORGANIZATION</p>
                <p className="mt-1 text-sm font-semibold">
                  {identity.organization || "—"}
                </p>
              </div>

              <div>
                <p className="id-label">EMERGENCY CONTACT</p>
                <p className="mt-1 text-sm font-semibold">
                  {identity.emergencyContact || "Not provided"}
                </p>
              </div>

              {fields
                .filter((field) => field.label || field.value)
                .slice(0, 4)
                .map((field) => (
                  <div key={field.id}>
                    <p className="id-label">{field.label || "CUSTOM FIELD"}</p>

                    <p className="mt-1 wrap-break-word text-sm font-semibold">
                      {field.value || "—"}
                    </p>
                  </div>
                ))}
            </div>

            <div className="relative z-10 mt-auto flex items-center justify-between border-t border-current/15 pt-4 text-[10px] opacity-70">
              <span className="flex items-center gap-1">
                <CalendarDays size={12} />
                Keep this card up to date
              </span>

              <span>pID STUDIO</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[11px] text-muted">
        Preview only · Public QR sharing will be added in M4
      </p>
    </div>
  );
}
