import BadgesSection from "@/components/About/BadgesSection";
import CreatorsSection from "@/components/About/CreatorsSection";
import CuratorsSection from "@/components/About/CuratorsSection";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <CuratorsSection />
      <Video />
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
