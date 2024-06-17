import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="gap-16 m-auto flex flex-col container">
      <ChoicePresentation
        title={t("oracle.title")}
        imageSrc="/images/home/tb_oracle_2.png"
        description={t("oracle.description")}
        links={{
          getStarted: "/en/oracle",
          learnMore: "/blog",
        }}
      />

      <ChoicePresentation
        inverted
        imageSrc="/images/home/tb_agro.webp"
        title={t("agro.title")}
        description={t("agro.description")}
        links={{
          getStarted: "",
          learnMore: "/blog/thebadge-agro",
        }}
      />
    </div>
  );
}
const ChoicePresentation = ({
  title,
  description,
  inverted,
  imageSrc,
  links,
}: {
  title: string;
  description: string;
  imageSrc: string;
  inverted?: boolean;
  links: {
    getStarted?: string;
    learnMore?: string;
  };
}) => {
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
      <div
        className={`m-auto ${
          inverted ? "md:-order-1" : ""
        } py-2 p-4 lg:p-8 lg:py-8`}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-2xl lg:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-gray-600 dark:text-white sm:text-base lg:text-lg">
          {description}
        </p>

        <div className="flex flex-row gap-4 mt-4">
          <Button
            asChild
            className="py-4 px-8 shadow-2xl"
            disabled={!!links.getStarted}
            color={!inverted ? "primary" : "secondary"}
          >
            <Link href={links.getStarted}>Get started</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            disabled={!!links.learnMore}
            color={!inverted ? "primary" : "secondary"}
            className="py-4 px-8"
          >
            <Link href={links.learnMore}>Learn more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
