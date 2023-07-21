import { CustomDivider } from '@/src/components/Commons/Divider';
import TBSwiper from '@/src/components/Commons/TBSwiper';
import TeamMemberCard from '@/src/components/Team/TeamMemberCard';
import TeamMemberCardDivider from '@/src/components/Team/TeamMemberCardDivider';
import { Box, Typography, styled } from '@mui/material';
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
  team?: string;
  isDivider?: boolean;
  socials?: { type: ContactType; name: string; color: string }[];
};

const TEAM_MEMBERS: TeamMember[] = [
  { isDivider: true, team: 'founder' },
  {
    avatar: '/avatars/agu.webp',
    name: 'Agustín Pane',
    role: 'Co-founder, COO',
    team: 'Founders',
    socials: [
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
    team: 'Founders',
    role: 'Co-founder, Product Lead',
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'FedeMadoery',
      },
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'federico-madoery',
      },
    ],
  },
  { isDivider: true, team: 'team' },
  {
    avatar: '/avatars/luciaf.webp',
    name: 'Lucía Fenoglio',
    role: 'Graphics Designer',
    team: 'Team',
    socials: [
      {
        color: '#333333',
        type: ContactType.Behance,
        name: 'luciafenoglio',
      },
    ],
  },
  {
    avatar: '/avatars/fer.webp',
    name: 'Fernando Ramirez',
    role: 'Frontend Developer',
    team: 'Team',
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'ramabit',
      },
    ],
  },
  {
    avatar: '/avatars/lore.webp',
    name: 'Lorenzo Vignolo',
    role: 'Solidity Developer',
    team: 'Team',
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'lolo-vignolo',
      },
    ],
  },
  {
    avatar: '/avatars/agulom.webp',
    name: 'Agustín Lombardi',
    role: 'Business Developer',
    team: 'Team',
    socials: [
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'agustin-lombardi-485627207',
      },
    ],
  },
  { isDivider: true, team: 'advisor' },
  {
    avatar: '/avatars/javi.webp',
    name: 'Javier Alba, CFA',
    team: 'Advisor',
    role: 'Financial Advisor',
    socials: [
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'javier-alba-cfa',
      },
    ],
  },
  {
    avatar: '/avatars/nicom.webp',
    name: 'Nicolás Magri',
    role: 'Legal Advisor',
    team: 'Advisor',
    socials: [
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'nicolas-magri-2aa0ba15a',
      },
    ],
  },
  {
    avatar: '/avatars/agulon.webp',
    name: 'Agustín Longoni',
    role: 'UX Advisor',
    team: 'Advisor',
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'alongoni',
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
          maxSlidesPerView={6}
          loop={false}
          items={TEAM_MEMBERS.map((member) => {
            if (member.isDivider)
              return (
                <TeamMemberCardDivider key={member.team} type={member?.team} />
              );
            return <TeamMemberCard key={member.name} user={member} />;
          })}
        />
      </Box>
    </BoxTeam>
  );
};

export default Team;
