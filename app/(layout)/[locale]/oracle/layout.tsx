import RootLayout from "@/components/Layout/RootLayout";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale || "en");

  return <RootLayout>{children}</RootLayout>;
}
