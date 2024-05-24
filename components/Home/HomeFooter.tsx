import DiscordIcon from "@/components/ui/icons/discord";
import GithubIcon from "@/components/ui/icons/github";
import TwitterIcon from "@/components/ui/icons/twitter";
import {
  DISCORD_URL,
  EMAIL_URL,
  GITHUB_URL,
  TWITTER_URL,
} from "@/lib/contants";
import { MailIcon } from "lucide-react";

export default function HomeFooter() {
  return (
    <div className="flex justify-center h-[50px] py-4 shadow-two shadow-glow">
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
  );
}
