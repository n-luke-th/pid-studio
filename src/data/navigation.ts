import { LayoutDashboard, PanelsTopLeft, IdCard, type LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navigationItems: NavigationItem[] = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Card Studio", href: "/studio", icon: PanelsTopLeft },
  { label: "My Cards", href: "/cards", icon: IdCard },
];
