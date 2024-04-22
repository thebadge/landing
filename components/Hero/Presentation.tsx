import DiscordIcon from "@/components/ui/icons/discord";
import { DISCORD_URL, PAPER_URL } from "@/lib/contants";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Presentation() {
  const t = useTranslations("presentation");

  return (
    <div className="-mx-4 flex flex-1 flex-wrap shrink-0">
      <div className="w-full px-4">
        <div
          className="wow fadeInUp mx-auto max-w-[800px] text-center"
          data-wow-delay=".2s"
        >
          <h1 className="mb-5 text-3xl text-left font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            {t("title")}
          </h1>
          <p className="mb-12 text-base text-left font-medium !leading-relaxed text-gray-600 dark:text-white dark:opacity-80 sm:text-lg md:text-xl">
            {t("description")}
          </p>
          <div className="flex flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              id="white-paper-link"
              target="_blank"
              href={PAPER_URL}
              className="cursor-pointer rounded-md bg-primary-500 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary-500/80"
            >
              {t("buttons.whitepaper")}
            </Link>
            <Link
              id="discord-link"
              href={DISCORD_URL}
              target="_blank"
              className="cursor-pointer group rounded-md flex flex-row gap-2 bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
            >
              <DiscordIcon
                width={25}
                height={25}
                className="fill-dark dark:fill-white group-hover:animate-shake"
              />
              {t("buttons.community")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
