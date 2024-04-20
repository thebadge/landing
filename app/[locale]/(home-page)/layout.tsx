import GlowMouseTracing from "@/components/ui/glow";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

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
