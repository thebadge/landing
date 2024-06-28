import DiscordIcon from "@/components/ui/icons/discord";
import GithubIcon from "@/components/ui/icons/github";
import TwitterIcon from "@/components/ui/icons/twitter";
import {
  DISCORD_URL,
  EMAIL_URL,
  GITHUB_URL,
  LITE_PAPER_URL,
  PRESENTATION_VIDEO_URL,
  TWITTER_URL,
} from "@/lib/contants";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { MouseTracingCapture, MouseTracingOverlay } from "@/components/ui/glow";

const Footer = () => {
  const t = useTranslations("");

  return (
    <>
      <MouseTracingCapture>
        <footer
          id="#footer"
          className="container bg-primary-800 wow fadeInUp relative z-10 pt-16 md:pt-20 lg:pt-24"
          data-wow-delay=".1s"
        >
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full mb-8 lg:mb-16 md:w-1/2 lg:w-4/12 xl:w-5/12">
                <div className="mb-2 max-w-[360px]">
                  <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                    Contact
                  </h2>
                  <ul>
                    <li>
                      <a
                        href={EMAIL_URL}
                        target="_blank"
                        className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                        rel="noreferrer"
                      >
                        hello@thebadge.xyz
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center">
                  <a
                    href={TWITTER_URL}
                    target="_blank"
                    aria-label="social-link"
                    className="mr-6 hover:text-primary-500"
                    rel="noreferrer"
                  >
                    <TwitterIcon
                      width="18"
                      height="14"
                      className="fill-[#6b7280] dark:fill-[#CED3F6] hover:fill-primary-500"
                    />
                  </a>
                  <a
                    href={EMAIL_URL}
                    aria-label="social-link"
                    className="mr-6 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MailIcon
                      width="20"
                      height="16"
                      className="text-[#6b7280] dark:text-[#CED3F6] hover:text-primary-500"
                    />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    aria-label="social-link"
                    className="mr-6"
                    rel="noreferrer"
                  >
                    <GithubIcon
                      width="20"
                      height="16"
                      className="text-[#6b7280] dark:text-[#CED3F6] hover:text-primary-500"
                    />
                  </a>
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    aria-label="social-link"
                    className="mr-6"
                    rel="noreferrer"
                  >
                    <DiscordIcon
                      width="20"
                      height="19"
                      className="fill-[#6b7280] dark:fill-[#CED3F6] hover:fill-primary-500"
                    />
                  </a>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                <div className="mb-8 lg:mb-16">
                  <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                    Useful Links
                  </h2>
                  <ul>
                    <li>
                      <a
                        href={LITE_PAPER_URL}
                        target="_blank"
                        className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                        rel="noreferrer"
                      >
                        Litepaper
                      </a>
                    </li>
                    <li>
                      <a
                        href={PRESENTATION_VIDEO_URL}
                        target="_blank"
                        className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                        rel="noreferrer"
                      >
                        Pitch presentation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                <div className="mb-8 lg:mb-16">
                  <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                    Terms
                  </h2>
                  <ul>
                    <li>
                      <a
                        href="/privacy-policy"
                        className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                      >
                        {" "}
                        Privacy Policy{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex w-full bottom-0 pt-4 border-t-2 border-t-secondary-500">
              <p className="mb-10 text-base text-black dark:text-white">
                ©{new Date().getFullYear()} {t("footer.copyright")}
              </p>
            </div>
          </div>
          <MouseTracingOverlay glowColor="#9EE35B" />
        </footer>
      </MouseTracingCapture>
    </>
  );
};

export default Footer;
