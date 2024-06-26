import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import GlowMouseTracing from "@/components/ui/glow";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <GlowMouseTracing />

      {children}
    </>
  );
}
