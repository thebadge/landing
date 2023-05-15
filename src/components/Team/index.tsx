import { CustomDivider } from '@/src/components/Commons/Divider';
import { LinkedIn, Mail, Twitter, GitHub } from '@mui/icons-material';
import { Avatar, Box, styled, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { colors } from 'thebadge-ui-library';
import { BehanceIcon } from '../Commons/SVGs/BehanceIcon';
import { useTranslation } from 'next-export-i18n';

const MemberBox = styled(Box)(({ theme }) => ({
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(0),
  flex: '1 1 30%',
  ':nth-of-type(n+4)': {
    flex: '1 1 10%',
  },
  [theme.breakpoints.down('sm')]: {
    flex: '1 1 20%',
    ':nth-of-type(n+4)': {
      flex: '1 1 20%',
    },
  },
}));

const MemberName = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: '800',
  fontSize: '18px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '16px',
  },
}));

const StyledLink = styled('a')(() => ({
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',
  cursor: 'pointer',
  textDecoration: 'none',
}));

const MemberDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  whiteSpace: 'break-spaces',
  fontWeight: '500',
  fontSize: '16px',
  textAlign: 'center',
  maxWidth: '270px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '14px',
  },
}));

const MemberContact = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

const BoxTeam = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(10),
}));

enum ContactType {
  Github = 'Github',
  Twitter = 'Twitter',
  Behance = 'Behance',
  Linkedin = 'Linkedin',
  Email = 'Email',
}

type TeamMember = {
  avatar: string;
  name: string;
  description: string;
  contact: string;
  contactSecondary?: string;
  contactTypeMain: ContactType;
  contactTypeSecondary?: ContactType;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    avatar: '/avatars/agu.webp',
    name: 'Agustín Pane',
    description: 'Co-founder COO',
    contact: 'agustin@thebadge.xyz',
    contactSecondary: 'agustin-pane',
    contactTypeMain: ContactType.Email,
    contactTypeSecondary: ContactType.Linkedin,
  },
  {
    avatar: '/avatars/nico.webp',
    name: 'Nicolás Domínguez',
    description: 'Co-founder CTO',
    contact: 'nicosampler',
    contactSecondary: 'nicoo',
    contactTypeMain: ContactType.Github,
    contactTypeSecondary: ContactType.Linkedin,
  },
  {
    avatar: '/avatars/fede.webp',
    name: 'Federico Madoery',
    description: 'Co-founder \n Frontend Tech Lead',
    contact: 'FedeMadoery',
    contactSecondary: 'federico-madoery',
    contactTypeMain: ContactType.Github,
    contactTypeSecondary: ContactType.Linkedin,
  },
  {
    avatar: '/avatars/javi.webp',
    name: 'Javier Alba, CFA',
    description: 'Financial Advisor',
    contact: 'javier-alba-cfa',
    contactTypeMain: ContactType.Linkedin,
  },
  {
    avatar: '/avatars/nicom.webp',
    name: 'Nicolás Magri',
    description: 'Legal Advisor',
    contact: 'nicolas-magri-2aa0ba15a',
    contactTypeMain: ContactType.Linkedin,
  },
  {
    avatar: '/avatars/agulom.webp',
    name: 'Agustín Lombardi',
    description: 'Marketing Advisor',
    contact: 'agustin-lombardi-485627207',
    contactTypeMain: ContactType.Linkedin,
  },
  {
    avatar: '/avatars/agulon.webp',
    name: 'Agustín Longoni',
    description: 'UX Advisor',
    contact: 'alongoni',
    contactTypeMain: ContactType.Github,
  },
  {
    avatar: '/avatars/luciaf.webp',
    name: 'Lucía Fenoglio',
    description: 'Graphics Designer',
    contact: 'luciafenoglio',
    contactTypeMain: ContactType.Behance,
  },
  {
    avatar: '/avatars/fer.webp',
    name: 'Fernando Ramirez',
    description: 'Frontend Developer',
    contact: 'ramabit',
    contactTypeMain: ContactType.Github,
  },
  {
    avatar: '/avatars/lore.webp',
    name: 'Lorenzo Vignolo',
    description: 'Solidity Developer',
    contact: 'lolo-vignolo',
    contactTypeMain: ContactType.Github,
  },
];

const Team = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  function getContactUrl(contactType: ContactType, contact: string) {
    switch (contactType) {
      case ContactType.Twitter:
        return `https://twitter.com/${contact}`;
      case ContactType.Github:
        return `https://github.com/${contact}`;
      case ContactType.Behance:
        return `https://www.behance.net/${contact}`;
      case ContactType.Linkedin:
        return `https://www.linkedin.com/in/${contact}`;
      case ContactType.Email:
        return `mailto:${contact}`;
    }
  }

  function getContactIcon(contactType: ContactType) {
    switch (contactType) {
      case ContactType.Twitter:
        return (
          <Twitter
            sx={{
              width: theme.customSizes.icon,
              height: theme.customSizes.icon,
              fill: '#FFFF',
              mr: 0.5,
            }}
          />
        );
      case ContactType.Github:
        return (
          <GitHub
            sx={{
              width: theme.customSizes.icon,
              height: theme.customSizes.icon,
              fill: '#FFFF',
              mr: 0.5,
            }}
          />
        );
      case ContactType.Behance:
        return <BehanceIcon sx={{ mr: 0.5 }} />;
      case ContactType.Linkedin:
        return (
          <LinkedIn
            sx={{
              width: theme.customSizes.icon,
              height: theme.customSizes.icon,
              fill: '#FFFF',
              mr: 0.5,
            }}
          />
        );
      case ContactType.Email:
        return (
          <Mail
            sx={{
              width: theme.customSizes.icon,
              height: theme.customSizes.icon,
              fill: '#FFFF',
              mr: 0.5,
            }}
          />
        );
    }
  }

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
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          columnGap: 3,
          rowGap: 8,
          marginBottom: 4,
          marginTop: 4,
        }}
      >
        {TEAM_MEMBERS.map((member, i) => {
          return (
            <MemberBox key={i}>
              <Avatar
                sx={{
                  width: theme.customSizes.avatar,
                  height: theme.customSizes.avatar,
                }}
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  height={theme.customSizes.avatar}
                  width={theme.customSizes.avatar}
                />
              </Avatar>
              <MemberName>{member.name}</MemberName>
              <MemberDescription>{member.description}</MemberDescription>
              <MemberContact>
                {member.contact && (
                  <StyledLink
                    target="_blank"
                    href={getContactUrl(member.contactTypeMain, member.contact)}
                  >
                    {getContactIcon(member.contactTypeMain)}
                  </StyledLink>
                )}
                {member.contactTypeSecondary && member.contactSecondary && (
                  <StyledLink
                    target="_blank"
                    href={getContactUrl(
                      member.contactTypeSecondary,
                      member.contactSecondary,
                    )}
                  >
                    {getContactIcon(member.contactTypeSecondary)}
                  </StyledLink>
                )}
              </MemberContact>
            </MemberBox>
          );
        })}
      </Box>
    </BoxTeam>
  );
};

export default Team;
