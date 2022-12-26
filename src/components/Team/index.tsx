import { CustomDivider } from '@/src/components/Commons/Divider';
import TwitterMUIIcon from '@mui/icons-material/Twitter';
import { Avatar, Box, styled, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { colors } from 'thebadge-web-ui-library';
import { BehanceIcon } from '../Commons/SVGs/BehanceIcon';
import { GithubCatIcon } from '../Commons/SVGs/GithubCat';

const MemberBox = styled(Box)(({ theme }) => ({
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(2),
  flex: '1 1 20%',
  ':nth-of-type(n+4)': {
    flex: '1 1 18%',
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

const BoxTeam = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

type TeamMember = {
  avatar: string;
  name: string;
  description: string;
  contact?: string;
  contactType?: string; // TODO Enum
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    avatar: '/avatars/agu.webp',
    name: 'Agustín Pane',
    description: 'Co-founder \n Project Manager, Full-stack & Web3 Developer',
    contact: 'agupane',
    contactType: 'Github',
  },
  {
    avatar: '/avatars/nico.webp',
    name: 'Nicolás Domínguez',
    description: 'Co-founder \n Sofware Architect, Web3 & Solidity Developer',
    contact: 'nicosampler',
    contactType: 'Github',
  },
  {
    avatar: '/avatars/fede.webp',
    name: 'Federico Madoery',
    description: 'Co-founder \n UIX Expert, Full-stack & Mobile Developer',
    contact: 'fedeMadoery',
    contactType: 'Github',
  },
  {
    avatar: '/avatars/javi.webp',
    name: 'Javier Alba, CFA',
    description: 'Co-founder \n Chief Financial Officer',
    contact: 'JaviAlba00',
    contactType: 'Twitter',
  },
  {
    avatar: '/avatars/fer.webp',
    name: 'Fernando Ramirez',
    description: 'Frontend Developer',
    contact: 'ramabit',
    contactType: 'Github',
  },
  {
    avatar: '/avatars/agulon.webp',
    name: 'Agustín Longoni',
    description: 'Web Developer',
    contact: 'alongoni',
    contactType: 'Github',
  },
  {
    avatar: '/avatars/agulom.webp',
    name: 'Agustín Lombardi',
    description: 'Community Manager',
    contact: 'lombarcrypto',
    contactType: 'Twitter',
  },
  {
    avatar: '/avatars/nicom.webp',
    name: 'Nicolás Magri',
    description: 'Chief Compliance Officer',
    contact: 'monito313',
    contactType: 'Twitter',
  },
  {
    avatar: '/avatars/luciaf.webp',
    name: 'Lucia Fenoglio',
    description: 'UX/UI & Graphic Designer',
    contact: 'luciafenoglio',
    contactType: 'Behance',
  },
];

const Team = () => {
  const theme = useTheme();

  function getContactUrl(member: TeamMember) {
    switch (member.contactType) {
      case 'Twitter':
        return `https://twitter.com/${member.contact}`;
      case 'Github':
        return `https://github.com/${member.contact}`;
      case 'Behance':
        return `https://www.behance.net/${member.contact}`;
    }
  }

  function getContactIcon(member: TeamMember) {
    switch (member.contactType) {
      case 'Twitter':
        return (
          <TwitterMUIIcon
            sx={{
              width: theme.customSizes.icon,
              height: theme.customSizes.icon,
              fill: '#FFFF',
            }}
          />
        );
      case 'Github':
        return <GithubCatIcon />;
      case 'Behance':
        return <BehanceIcon sx={{ mr: 1 }} />;
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
        TEAM
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
              {member.contact && (
                <StyledLink target="_blank" href={getContactUrl(member)}>
                  {getContactIcon(member)}
                  <MemberDescription>@{member.contact}</MemberDescription>
                </StyledLink>
              )}
            </MemberBox>
          );
        })}
      </Box>
    </BoxTeam>
  );
};

export default Team;
