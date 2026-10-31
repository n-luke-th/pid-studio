"use client";

import { Languages, Monitor, Moon, Sun, SunMoon } from "lucide-react";
import {
  useThemePreference,
  type ThemePreference,
} from "@/components/theme-provider";

const themeOptions: {
  value: ThemePreference;
  label: string;
  icon: typeof Sun;
}[] = [
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

export function HeaderControls() {
  const { preference, setPreference } = useThemePreference();

  return (
    <div className="flex items-center gap-2">
      <label className="relative">
        <span className="sr-only">Language</span>
        <Languages
          size={14}
          className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted"
        />
        <select
          id="language-selector"
          aria-label="Language (English only in this version)"
          defaultValue="en"
          className="control-select pl-8 pr-2"
        >
          <option value="en">English</option>
          <option value="th" disabled>
            ไทย · Soon
          </option>
          <option value="zh" disabled>
            简体中文 · Soon
          </option>
        </select>
      </label>
      <label className="relative">
        <span className="sr-only">Appearance</span>
        <SunMoon
          size={14}
          className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted"
        />
        <select
          id="appearance-selector"
          aria-label="Appearance"
          value={preference}
          onChange={(event) =>
            setPreference(event.target.value as ThemePreference)
          }
          className="control-select pl-8 pr-3"
        >
          {themeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
