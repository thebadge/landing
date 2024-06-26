import OracleRootLayout from "@/components/Layout/OracleRootLayout";
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

  return <OracleRootLayout>{children}</OracleRootLayout>;
}
