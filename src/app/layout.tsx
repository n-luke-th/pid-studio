import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { Noto_Serif_Thai, Noto_Serif_SC, Mali } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "pID Studio — A Little ID Magic",
    template: "%s | pID Studio",
  },
  description: "Create, customize, and share digital ID cards.",
};

const notoSerifThai = Noto_Serif_Thai({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-noto-serif-thai",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-sc",
});

// const mali = Mali({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
//   // display: "swap",
//   variable: "--font-mali",
// });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSerifThai.variable} ${notoSerifSC.variable}`}
        // className={`${mali.variable}`}
      >
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
