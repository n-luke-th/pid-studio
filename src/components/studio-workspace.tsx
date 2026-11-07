"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import {
  AlertCircle,
  Check,
  Download,
  ImagePlus,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";
import { CardPreview } from "@/components/card-preview";
import { useCardStore } from "@/stores/card-store";
import type { CardThemeId, PidCard } from "@/types/card";

const themes: {
  id: CardThemeId;
  label: string;
  description: string;
  swatch: string;
}[] = [
  {
    id: "mint",
    label: "Minty",
    description: "Fresh & cheerful",
    swatch: "bg-[#b6f0dc]",
  },
  {
    id: "lavender",
    label: "Lilac",
    description: "Soft & dreamy",
    swatch: "bg-[#d9c9ff]",
  },
  {
    id: "midnight",
    label: "Berry night",
    description: "Bold & cozy",
    swatch: "bg-[#252346]",
  },
  {
    id: "peach",
    label: "Peachy",
    description: "Warm & sunny",
    swatch: "bg-[#ffc9ae]",
  },
];

function createStarterCard(): PidCard {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    schemaVersion: 1,
    name: "My first ID",
    createdAt: now,
    updatedAt: now,
    identity: {
      organization: "NOVA CREATIVE CLUB",
      badgeNumber: "PID-2048",
      fullName: "Jordan Davis",
      jobRole: "Creative Explorer",
      avatarUrl: "",
      expiryDate: "2027-12-31",
      emergencyContact: "",
    },
    fields: [
      {
        id: crypto.randomUUID(),
        label: "Email",
        value: "jordan@example.com",
        type: "email",
      },
      {
        id: crypto.randomUUID(),
        label: "Member since",
        value: "2024",
        type: "text",
      },
    ],
    design: { themeId: "mint", accentColor: "#79d8bb", holographic: true },
    visibility: { isPublic: false, visibleFieldIds: [] },
  };
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input
        className="text-control"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export function StudioWorkspace() {
  const activeCard = useCardStore((state) => state.activeCard);
  const setActiveCard = useCardStore((state) => state.setActiveCard);
  const updateIdentity = useCardStore((state) => state.updateIdentity);
  const updateDesign = useCardStore((state) => state.updateDesign);
  const addField = useCardStore((state) => state.addField);
  const updateField = useCardStore((state) => state.updateField);
  const removeField = useCardStore((state) => state.removeField);
  const [exporting, setExporting] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [message, setMessage] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const card = useMemo(() => activeCard ?? createStarterCard(), [activeCard]);
  useEffect(() => {
    if (!activeCard) setActiveCard(card);
  }, [activeCard, card, setActiveCard]);

  const update = (key: keyof PidCard["identity"], value: string) =>
    updateIdentity({ [key]: value });
  const handleAvatar = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setMessage("Please choose an image file.");
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      setMessage("Please choose an image smaller than 3 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => update("avatarUrl", String(reader.result));
    reader.readAsDataURL(file);
    setMessage("");
  };

  const exportPng = async () => {
    if (!cardRef.current) return;

    setExporting(true);
    setMessage("");

    let exportWrapper: HTMLDivElement | null = null;

    try {
      const visibleFace = cardRef.current.querySelector<HTMLElement>(
        showBack ? ".id-card-back" : ".id-card-front",
      );

      if (!visibleFace) {
        throw new Error("Card face not found");
      }

      const rect = visibleFace.getBoundingClientRect();
      const exportClone = visibleFace.cloneNode(true) as HTMLElement;

      // Remove 3D positioning and rotation from the exported copy.
      Object.assign(exportClone.style, {
        position: "relative",
        inset: "auto",
        transform: "none",
        backfaceVisibility: "visible",
        WebkitBackfaceVisibility: "visible",
        width: `${rect.width}px`,
        minHeight: "340px",
      });

      // Place the clone outside the visible viewport.
      exportWrapper = document.createElement("div");

      Object.assign(exportWrapper.style, {
        position: "fixed",
        left: "-10000px",
        top: "0",
        width: `${rect.width}px`,
        pointerEvents: "none",
      });

      exportWrapper.appendChild(exportClone);
      document.body.appendChild(exportWrapper);

      const dataUrl = await toPng(exportClone, {
        pixelRatio: 2,
        cacheBust: true,
      });

      const link = document.createElement("a");

      link.download = `${(card.identity.fullName || "pid-card")
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase()}-${showBack ? "back" : "front"}-id.png`;

      link.href = dataUrl;
      link.click();

      setMessage("Your PNG is ready!");
    } catch (error) {
      console.error("PNG export failed:", error);

      setMessage(
        "Could not export the card. Try again or use a smaller avatar.",
      );
    } finally {
      exportWrapper?.remove();
      setExporting(false);
    }
  };

  return (
    <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,.9fr)]">
      <section className="panel rounded-[1.6rem] p-5 sm:p-6">
        <div className="mb-6 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-accent" />
              <h2 className="text-base font-semibold text-main">
                Make it yours
              </h2>
            </div>
            <p className="mt-1 text-xs text-muted">
              A few little details make your ID feel personal.
            </p>
          </div>
          <span className="rounded-full border border-(--border) px-3 py-1 text-[10px] font-semibold text-muted">
            UNSAVED DRAFT
          </span>
        </div>

        <div className="space-y-7">
          <div>
            <h3 className="section-title">Your identity</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                label="Full name"
                value={card.identity.fullName}
                placeholder="e.g. Jordan Davis"
                onChange={(v) => update("fullName", v)}
              />
              <TextField
                label="Role or title"
                value={card.identity.jobRole}
                placeholder="e.g. Creative Explorer"
                onChange={(v) => update("jobRole", v)}
              />
              <TextField
                label="Organization"
                value={card.identity.organization}
                placeholder="e.g. NOVA CLUB"
                onChange={(v) => update("organization", v)}
              />
              <TextField
                label="Badge number"
                value={card.identity.badgeNumber}
                placeholder="e.g. PID-2048"
                onChange={(v) => update("badgeNumber", v)}
              />
              <TextField
                label="Expiry date"
                type="date"
                value={card.identity.expiryDate || ""}
                onChange={(v) => update("expiryDate", v)}
              />
              <TextField
                label="Emergency contact"
                value={card.identity.emergencyContact || ""}
                placeholder="Name or phone number"
                onChange={(v) => update("emergencyContact", v)}
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-(--border) p-3">
              <div className="grid size-11 place-items-center overflow-hidden rounded-xl bg-(--soft) text-accent">
                {card.identity.avatarUrl ? (
                  <img
                    src={card.identity.avatarUrl}
                    alt="Avatar preview"
                    className="size-full object-cover"
                  />
                ) : (
                  <ImagePlus size={19} />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-main">
                  Profile picture
                </p>
                <p className="mt-1 text-[10px] text-muted">
                  PNG or JPG · up to 3 MB
                </p>
              </div>
              <label className="soft-button cursor-pointer">
                Choose image
                <input
                  className="sr-only"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleAvatar(e.target.files?.[0])}
                />
              </label>
              {card.identity.avatarUrl ? (
                <button
                  type="button"
                  onClick={() => update("avatarUrl", "")}
                  className="mini-button"
                >
                  Remove
                </button>
              ) : null}
            </div>
          </div>

          <div>
            <h3 className="section-title">Pick your vibe</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {themes.map((theme) => (
                <button
                  type="button"
                  key={theme.id}
                  onClick={() => updateDesign({ themeId: theme.id })}
                  className={`theme-choice ${card.design.themeId === theme.id ? "theme-choice-active" : ""}`}
                >
                  <span
                    className={`mb-3 block h-12 rounded-xl ${theme.swatch}`}
                  />
                  <span className="block text-xs font-semibold text-main">
                    {theme.label}
                  </span>
                  <span className="mt-1 block text-[10px] text-muted">
                    {theme.description}
                  </span>
                  {card.design.themeId === theme.id ? (
                    <Check
                      size={14}
                      className="absolute right-2 top-2 text-accent"
                    />
                  ) : null}
                </button>
              ))}
            </div>
            <label className="mt-4 flex cursor-pointer items-center justify-between rounded-xl border border-(--border) px-4 py-3">
              <span>
                <span className="block text-xs font-semibold text-main">
                  Shimmery finish
                </span>
                <span className="mt-1 block text-[10px] text-muted">
                  Add a soft holographic glow to your card.
                </span>
              </span>
              <input
                type="checkbox"
                checked={card.design.holographic}
                onChange={(e) =>
                  updateDesign({ holographic: e.target.checked })
                }
                className="size-4 accent-(--accent)"
              />
            </label>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="section-title mb-0">Extra details</h3>
              <span className="text-[10px] text-muted">
                {card.fields.length}/20 fields
              </span>
            </div>
            <div className="space-y-3">
              {card.fields.map((field) => (
                <div
                  key={field.id}
                  className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)_auto] items-end gap-2 rounded-xl border border-(--border) p-3"
                >
                  <label className="min-w-0">
                    <span className="field-label">Label</span>
                    <input
                      className="text-control"
                      value={field.label}
                      maxLength={40}
                      onChange={(e) =>
                        updateField(field.id, { label: e.target.value })
                      }
                    />
                  </label>
                  <label className="min-w-0">
                    <span className="field-label">Value</span>
                    <input
                      className="text-control"
                      value={field.value}
                      maxLength={500}
                      onChange={(e) =>
                        updateField(field.id, { value: e.target.value })
                      }
                    />
                  </label>
                  <button
                    type="button"
                    aria-label={`Remove ${field.label || "field"}`}
                    onClick={() => removeField(field.id)}
                    className="icon-button mb-0.5"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              disabled={card.fields.length >= 20}
              onClick={addField}
              className="mini-button mt-3 disabled:opacity-40"
            >
              <Plus size={14} /> Add custom field
            </button>
          </div>
          {message ? (
            <p
              role="status"
              className="flex items-center gap-2 text-xs text-accent"
            >
              <AlertCircle size={14} />
              {message}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-(--border) pt-5">
            <p className="max-w-xs text-[10px] leading-4 text-muted">
              Your draft currently lives in this browser session. Saving and
              managing cards arrives in M3.
            </p>
            <button
              type="button"
              onClick={exportPng}
              disabled={exporting}
              className="primary-button"
            >
              <Download size={15} /> {exporting ? "Preparing…" : "Download PNG"}
            </button>
          </div>
        </div>
      </section>

      <div className="xl:sticky xl:top-24">
        <div className="panel rounded-[1.6rem] p-5 sm:p-6">
          <CardPreview
            card={card}
            cardRef={cardRef}
            onFaceChange={setShowBack}
          />
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-(--border) bg-(--panel) p-4 justify-center">
          <span className="icon-bubble shrink-0">
            <AlertCircle size={16} />
          </span>
          <p className="text-[11px] leading-5 text-muted">
            This is a visual ID card, not a verified credential. Avoid putting
            sensitive personal information on a card you plan to share publicly.
          </p>
        </div>
      </div>
    </div>
  );
}
