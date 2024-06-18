import MainLanding from "@/components/Home";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import { LightModeWrapper } from "@/components/ui/themes/LightModeWrapper";

const SplitPage = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale || "en");

  return (
    <LightModeWrapper>
      <MainLanding />
    </LightModeWrapper>
  );
};

SplitPage.theme = "light";
export default SplitPage;

export const dynamicParams = false;

export async function generateStaticParams() {
  return ["en", "de", "es"].map((locale) => ({
    locale,
  }));
}
