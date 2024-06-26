import SectionTitle from "@/components/Common/SectionTitle";
import featuresData from "./featuresData";
import SingleFeature from "@/components/Common/SingleFeature";
import { useTranslations } from "next-intl";

export default function WhatIsTheBadge() {
  const t = useTranslations("whatIsTheBadge");

  return (
    <>
      <SectionTitle title={t("title")} center mb="48px" />

      <div className="grid lg:mt-8 grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
        {featuresData.map((feature) => (
          <SingleFeature
            key={feature.id}
            feature={feature}
            namespace={"whatIsTheBadge"}
          />
        ))}
      </div>
    </>
  );
}
