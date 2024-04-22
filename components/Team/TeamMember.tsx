import { MailIcon, TangentIcon } from "lucide-react";
import Image from "next/image";
import { ContactType, TeamMemberData } from "@/components/Team/teamMemberData";
import GithubIcon from "@/components/ui/icons/github";
import LinkedinIcon from "@/components/ui/icons/linkedin";
import TwitterIcon from "@/components/ui/icons/twitter";

export default function TeamMember({ member }: { member: TeamMemberData }) {
  return (
    <div className="grid gap-x-6 grid-cols-1">
      <div className="mb-6 lg:mb-0">
        <div className="block rounded-lg bg-white dark:bg-dark shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <Image
              alt="team member avatar"
              width={250}
              height={250}
              src={member.avatar}
              className="w-full rounded-t-lg opacity-90"
            />
            <svg
              className="absolute text-white dark:text-dark dark:text-neutral-700 left-0 bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="currentColor"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">{member.name}</h5>
            <p className="mb-4 text-neutral-500 dark:text-neutral-300">
              {member.role}
            </p>
            <ul className="mx-auto flex list-inside justify-center">
              {member.socials.map((social, i) => (
                <Social key={i} data={social} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Social({
  data,
}: {
  data: { color: string; type: ContactType; name: string };
}) {
  switch (data.type) {
    case ContactType.Behance:
      return (
        <a
          href={`https://www.behance.net/${data.name}`}
          target="_blank"
          className="px-2"
          rel="noreferrer"
          aria-label="Behance Link"
        >
          <TangentIcon
            size={24}
            className="h-4 w-4 text-primary dark:text-primary-400"
          />
        </a>
      );
    case ContactType.Email:
      return (
        <a
          href={`mailto:${data.name}`}
          target="_blank"
          className="px-2"
          aria-label="Email Link"
          rel="noreferrer"
        >
          <MailIcon
            size={24}
            className="h-4 w-4 text-primary dark:text-primary-400"
          />
        </a>
      );
    case ContactType.Github:
      return (
        <a
          href={`https://twitter.com/${data.name}`}
          target="_blank"
          className="px-2"
          aria-label="Github Link"
          rel="noreferrer"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      );
    case ContactType.Linkedin:
      return (
        <a
          href={`https://www.linkedin.com/in/${data.name}`}
          target="_blank"
          className="px-2"
          aria-label="Linkedin Link"
          rel="noreferrer"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
      );
    case ContactType.Twitter:
      return (
        <a
          href={`https://github.com/${data.name}`}
          target="_blank"
          className="px-2"
          aria-label="Twitter Link"
          rel="noreferrer"
        >
          <TwitterIcon className="h-4 w-4" />
        </a>
      );
  }
}
