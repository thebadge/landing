import { Providers } from "@/app/providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata, ResolvingMetadata } from "next";
import { getTranslations } from "next-intl/server";
import { Mulish, Roboto_Mono } from "next/font/google";

const mulishFont = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--display-font",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const dynamicParams = false;
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "es" }];
}

type Props = {
  params: { locale: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const t = await getTranslations({
    locale: params.locale,
    namespace: "metadata",
  });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: t("title"),
    description: t("description"),
    applicationName: "TheBadge",
    keywords: ["Crypto", "RWA", "Real word assets", "certificates"],
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      siteName: "TheBadge",
      locale: params.locale,
      images: [
        {
          url: "https://thebadge.xyz/the_badge_banner.webp",
          width: 1404,
          height: 459,
        },
        ...previousImages,
      ],
      videos: [
        {
          url: "https://thebadge.xyz/video/TheBadge.mp4",
          width: 720,
          height: 1280,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: t("xHandler"),
      site: t("xHandler"),
      images: ["https://thebadge.xyz/the_badge_banner.webp"], // Must be an absolute URL
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      suppressHydrationWarning
      lang={locale || "en"}
      className={`${mulishFont.variable} ${roboto_mono.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <div className="fixed w-full h-full -z-10 dark:bg-radial-gradient-dark bg-radial-gradient-light"></div>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
