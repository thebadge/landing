import BadgesSection from "@/components/About/BadgesSection";
import CreatorsSection from "@/components/About/CreatorsSection";
import CuratorsSection from "@/components/About/CuratorsSection";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features/Oracle";
import Hero from "@/components/Hero/Oracle";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <CuratorsSection />
      <Video title={t("video.title")} paragraph={t("video.paragraph")} />
      <Brands />
      <BadgesSection />
      <CreatorsSection />
      <Testimonials />
      <Roadmap />
      <Team />
      <Blog />
    </>
  );
}
export const dynamicParams = false;

export async function generateStaticParams() {
  return ["en", "de", "es"].map((locale) => ({
    locale,
  }));
}
