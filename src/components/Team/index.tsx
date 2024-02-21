import { CustomDivider } from '@/src/components/Commons/Divider';
import TBSwiper from '@/src/components/Commons/TBSwiper';
import TeamMemberCard from '@/src/components/Team/TeamMemberCard';
import TeamMemberCardDivider from '@/src/components/Team/TeamMemberCardDivider';
import {Box, Typography, styled } from '@mui/material';
import { colors } from '@thebadge/ui-library';
import { useTranslation } from 'next-export-i18n';

const BoxTeam = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(10),
}));

export enum ContactType {
  Github = 'Github',
  Twitter = 'Twitter',
  Behance = 'Behance',
  Linkedin = 'Linkedin',
  Email = 'Email',
}

export type TeamMember = {
  avatar?: string;
  name?: string;
  role?: string;
  team?: TeamGroup;
  isDivider?: boolean;
  socials?: { type: ContactType; name: string; color: string }[];
};

export enum TeamGroup {
  FOUNDER = 'Founder',
  FELLOW = 'Fellow',
  ADVISOR = 'Advisor'
}

const TEAM_MEMBERS: TeamMember[] = [
  // { isDivider: true, team: TeamGroup.FOUNDER },
  {
    avatar: '/avatars/agu.webp',
    name: 'Agustín Pane',
    role: 'Co-founder, CEO',
    team: TeamGroup.FOUNDER,
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'Agupane',
      },
      {
        color: '#333333',
        type: ContactType.Email,
        name: 'agustin@thebadge.xyz',
      },
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'agustin-pane',
      },
    ],
  },
  {
    avatar: '/avatars/fede.webp',
    name: 'Federico Madoery',
    team: TeamGroup.FOUNDER,
    role: 'Co-founder, Product Lead',
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'FedeMadoery',
      },
      {
        color: '#333333',
        type: ContactType.Email,
        name: 'federico@thebadge.xyz',
      },
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'federico-madoery',
      },
    ],
  },
  {
    avatar: '/avatars/fer.webp',
    name: 'Fernando Ramirez',
    role: 'Business & Web3 Developer',
    team: TeamGroup.FELLOW,
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'ramabit',
      },
      {
        color: '#333333',
        type: ContactType.Email,
        name: 'fernando@thebadge.xyz',
      },
    ],
  },
  {
    avatar: '/avatars/agulom.webp',
    name: 'Agustín Lombardi',
    role: 'Business Developer',
    team: TeamGroup.FELLOW,
    socials: [
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'agustin-lombardi-485627207',
      },
    ],
  },
  {
    avatar: '/avatars/luciaf.webp',
    name: 'Lucía Fenoglio',
    role: 'Graphics Designer',
    team: TeamGroup.FELLOW,
    socials: [
      {
        color: '#333333',
        type: ContactType.Behance,
        name: 'luciafenoglio',
      },
    ],
  },
];

const Team = () => {
  const { t } = useTranslation();
  return (
    <BoxTeam>
      <CustomDivider />
      <Typography
        variant="h2"
        component="h3"
        textAlign="center"
        color={colors.white}
      >
        {t('team.title')}
      </Typography>

      <Box mt={5}>
        <TBSwiper
          maxSlidesPerView={5}
          spaceBetween={8}
          loop={false}
          items={TEAM_MEMBERS.map((member) => {
            if (member.isDivider)
              return (
                <TeamMemberCardDivider key={member.team} type={member?.team} />
              );
            return <TeamMemberCard key={member.name} user={member} team={member?.team} />;
          })}
        />
      </Box>
    </BoxTeam>
  );
};

export default Team;
