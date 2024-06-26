import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { LITE_PATER_URL, PRESENTATION_VIDEO_URL } from "@/lib/contants";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="gap-16 m-auto flex flex-col container">
      <ChoicePresentation
        inverted
        isNew
        imageSrc="/images/home/tb_agro.webp"
        title={t("agro.title")}
        description={t("agro.description")}
        links={{
          primary: {
            label: "Watch Presentation",
            href: PRESENTATION_VIDEO_URL,
          },
          secondary: {
            label: "Learn more",
            href: LITE_PATER_URL,
          },
        }}
      />
      <ChoicePresentation
        title={t("oracle.title")}
        imageSrc="/images/home/tb_oracle_2.png"
        description={t("oracle.description")}
        links={{
          primary: {
            label: "Go website",
            href: "/en/oracle",
          },
          secondary: {
            label: "Blog",
            href: "/blog",
          },
        }}
      />
    </div>
  );
}

const ChoicePresentation = ({
  title,
  description,
  imageSrc,
  links,
  inverted = false,
  isNew = false,
}: {
  title: string;
  description: string;
  imageSrc: string;
  inverted?: boolean;
  isNew?: boolean;
  links: {
    primary: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
}) => {
  const hasPrimaryLink = !!links.primary.href;
  const hasSecondaryLink = !!links.secondary?.href;
  const invertedClass = inverted ? "md:-order-1" : "";

  const primaryLinkTarget = links.primary.href.includes("http")
    ? "_blank"
    : undefined;
  const secondaryLinkTarget = links.secondary?.href.includes("http")
    ? "_blank"
    : undefined;

  return (
    <div className="grid gap-x-6 grid-cols-1 md:grid-cols-2 ">
      <div className="flex py-2 p-4 lg:py-8 lg:p-8">
        <div className="m-auto overflow-hidden max-w-full rounded-xl">
          <Image
            src={imageSrc}
            width={522}
            height={522}
            className="relative object-cover rounded-xl hover:scale-125 transition-transform ease-in-out duration-500"
            alt="Original"
          />
        </div>
      </div>
      <div className={`m-auto ${invertedClass} py-2 p-4 lg:p-8 lg:py-8`}>
        <h2 className="flex relative mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-2xl lg:text-[45px]">
          {title}
          {isNew && (
            <Badge
              variant="new"
              className="ml-5 self-center md:ml-0 md:absolute md:left-0 md:-top-8"
            >
              New
            </Badge>
          )}
        </h2>
        <p className="text-base !leading-relaxed text-gray-600 dark:text-white sm:text-base lg:text-lg">
          {description}
        </p>

        <div className="flex flex-row gap-4 mt-4">
          <Button
            asChild
            className={`py-4 px-8 shadow-2xl ${
              !hasPrimaryLink ? "cursor-not-allowed" : ""
            }`}
            disabled={!hasPrimaryLink}
            color={!inverted ? "primary" : "secondary"}
          >
            <Link target={primaryLinkTarget} href={links.primary.href}>
              {links.primary.label}
            </Link>
          </Button>
          {links.secondary && (
            <Button
              asChild
              variant="secondary"
              disabled={!hasSecondaryLink}
              color={!inverted ? "primary" : "secondary"}
              className={`py-4 px-8 ${
                !hasSecondaryLink ? "cursor-not-allowed" : ""
              }`}
            >
              <Link target={secondaryLinkTarget} href={links.secondary.href}>
                {links.secondary.label}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
