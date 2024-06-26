import ScrollUp from "@/components/Common/ScrollUp";
import { unstable_setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero/Agro";
import Slideshow from "@/components/Slideshow/Agro";
import About from "@/components/About/Agro";
import Faq from "@/components/FAQ/Agro";
import Features from "@/components/Features/Agro";

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Slideshow />
      <About />
      <Features />
      <Faq />
      <ScrollUp />
    </>
  );
}
export const dynamicParams = false;

export async function generateStaticParams() {
  return ["en", "de", "es"].map((locale) => ({
    locale,
  }));
}
