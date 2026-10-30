export type CardFieldType = "text" | "email" | "phone" | "date" | "url";

export interface CardField {
  id: string;
  label: string;
  value: string;
  type: CardFieldType;
}

export interface CardIdentity {
  organization: string;
  badgeNumber: string;
  fullName: string;
  jobRole: string;
  avatarUrl?: string;
  expiryDate?: string;
  emergencyContact?: string;
}

export type CardThemeId = "emerald" | "cyber" | "dark" | "gold";

export interface CardDesign {
  themeId: CardThemeId;
  accentColor: string;
  holographic: boolean;
}

export interface CardVisibility {
  isPublic: boolean;
  visibleFieldIds: string[];
}

export interface PidCard {
  id: string;
  schemaVersion: 1;
  name: string;
  presetId?: string;
  createdAt: string;
  updatedAt: string;
  identity: CardIdentity;
  fields: CardField[];
  design: CardDesign;
  visibility: CardVisibility;
}
