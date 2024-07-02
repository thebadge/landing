import OracleRootLayout from "@/components/Layout/OracleRootLayout";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";

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
    title: t("oracle.title"),
    description: t("oracle.description"),
    applicationName: "TheBadge",
    keywords: ["Crypto", "RWA", "Real word assets", "certificates"],
    metadataBase: new URL("https://thebadge.xyz/"),
    openGraph: {
      title: t("oracle.title"),
      description: t("oracle.description"),
      type: "website",
      siteName: "TheBadge",
      locale: params.locale,
      images: [
        {
          url: "/the_badge_banner.jpg",
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
      title: t("oracle.title"),
      description: t("oracle.description"),
      creator: t("oracle.xHandler"),
      site: t("oracle.xHandler"),
      images: ["https://thebadge.xyz/the_badge_banner.jpg"], // Must be an absolute URL
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
  unstable_setRequestLocale(locale || "en");

  return <OracleRootLayout>{children}</OracleRootLayout>;
}
