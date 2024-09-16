export enum ContactType {
  Github = "Github",
  Twitter = "Twitter",
  Behance = "Behance",
  Linkedin = "Linkedin",
  Email = "Email",
}

export type TeamMemberData = {
  avatar?: string;
  name?: string;
  role?: string;
  team?: TeamGroup;
  isDivider?: boolean;
  socials?: { type: ContactType; name: string; color: string }[];
};

export enum TeamGroup {
  FOUNDER = "Founder",
  FELLOW = "Fellow",
  ADVISOR = "Advisor",
}

export const TEAM_MEMBERS: TeamMemberData[] = [
  // { isDivider: true, team: TeamGroup.FOUNDER },
  {
    avatar: "/avatars/agu.webp",
    name: "Agustín Pane",
    role: "Co-founder, CEO",
    team: TeamGroup.FOUNDER,
    socials: [
      {
        color: "#333333",
        type: ContactType.Twitter,
        name: "Agupane",
      },
      {
        color: "#333333",
        type: ContactType.Email,
        name: "agustin@thebadge.xyz",
      },
      {
        color: "#333333",
        type: ContactType.Linkedin,
        name: "agustin-pane",
      },
    ],
  },
  {
    avatar: "/avatars/fede.webp",
    name: "Federico Madoery",
    team: TeamGroup.FOUNDER,
    role: "Co-founder, Product Lead",
    socials: [
      {
        color: "#333333",
        type: ContactType.Github,
        name: "FedeMadoery",
      },
      {
        color: "#333333",
        type: ContactType.Email,
        name: "federico@thebadge.xyz",
      },
      {
        color: "#333333",
        type: ContactType.Linkedin,
        name: "federico-madoery",
      },
    ],
  },
  {
    avatar: "/avatars/fer.webp",
    name: "Fernando Ramirez",
    role: "Business & Web3 Developer",
    team: TeamGroup.FELLOW,
    socials: [
      {
        color: "#333333",
        type: ContactType.Github,
        name: "ramabit",
      },
      {
        color: "#333333",
        type: ContactType.Email,
        name: "fernando@thebadge.xyz",
      },
    ],
  },
  {
    avatar: "/avatars/agulom.webp",
    name: "Agustín Lombardi",
    role: "Business Developer",
    team: TeamGroup.FELLOW,
    socials: [
      {
        color: "#333333",
        type: ContactType.Linkedin,
        name: "agustin-lombardi-485627207",
      },
    ],
  },
  {
    avatar: "/avatars/luciaf.webp",
    name: "Lucía Fenoglio",
    role: "Graphics Designer",
    team: TeamGroup.FELLOW,
    socials: [
      {
        color: "#333333",
        type: ContactType.Behance,
        name: "luciafenoglio",
      },
    ],
  },
];
