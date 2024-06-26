import ParticlesDeco from "@/components/Features/ParticlesDeco";
import { useTranslations } from "next-intl";
import SectionTitle from "../../Common/SectionTitle";

const Features = () => {
  const t = useTranslations("whatIsTheBadge");

  return (
    <>
      <section
        id="why"
        className="relative bg-primary-500/[.03] py-16 md:py-20 lg:py-24 shadow-whyShadowLight dark:shadow-whyShadowDark bg-why-gradient-light dark:bg-why-gradient-dark"
      >
        <div className="container">
          <SectionTitle
            title={t("why.title")}
            paragraph={t("why.description")}
            center
          />
        </div>
        <div className="container">
          <ParticlesDeco />
        </div>
      </section>
    </>
  );
};

export default Features;
