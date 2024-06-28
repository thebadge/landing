import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import AgroRootLayout from "@/components/Layout/AgroRootLayout";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale || "en");

  return <AgroRootLayout>{children}</AgroRootLayout>;
}
