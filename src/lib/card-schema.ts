import { z } from "zod";
import { type CardThemeId } from "@/types/card";

export const cardFieldSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1).max(40),
  value: z.string().max(500),
  type: z.enum(["text", "email", "phone", "date", "url"]),
});

export const pidCardSchema = z.object({
  id: z.string().min(1),
  schemaVersion: z.literal(1),
  name: z.string().min(1).max(80),
  presetId: z.string().optional(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  identity: z.object({
    organization: z.string().max(100),
    badgeNumber: z.string().max(40),
    fullName: z.string().min(1).max(100),
    jobRole: z.string().max(100),
    avatarUrl: z.url().optional().or(z.literal("")),
    expiryDate: z.iso.datetime().optional(),
    emergencyContact: z.string().max(100).optional(),
  }),
  fields: z.array(cardFieldSchema).max(20),
  design: z.object({
    // themeId: z.enum(["emerald", "cyber", "dark", "gold"]),
    themeId: z.enum(["mint", "lavender", "midnight", "peach"]),
    accentColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    holographic: z.boolean(),
  }),
  visibility: z.object({
    isPublic: z.boolean(),
    visibleFieldIds: z.array(z.string()),
  }),
});

export type ValidatedPidCard = z.infer<typeof pidCardSchema>;
