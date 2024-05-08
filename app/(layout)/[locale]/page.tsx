import MainLanding from "@/components/Home";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export default function SplitPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale || "en");

  return <MainLanding />;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return ["en", "de", "es"].map((locale) => ({
    locale,
  }));
}
