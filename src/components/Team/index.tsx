import { CustomDivider } from '@/src/components/Commons/Divider';
import TwitterMUIIcon from '@mui/icons-material/Twitter';
import { Avatar, Box, styled, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { SectionTitle } from '../Commons/SectionTitle';
import { GithubCatIcon } from '../Commons/SVGs/GithubCat';

const MemberBox = styled(Box)(({ theme }) => ({
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(2),
  flex: '1 1 20%',
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
  fontWeight: '600',
  fontSize: '16px',
  textAlign: 'center',
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
  },
  {
    avatar: '/avatars/nico.webp',
    name: 'Nicolás Domínguez',
    description: 'Co-founder \n Sofware Architect, Web3 & Solidity Developer',
    contact: 'nicosampler',
  },
  {
    avatar: '/avatars/fede.webp',
    name: 'Federico Madoery',
    description: 'Co-founder \n UIX Expert, Full-stack & Mobile Developer',
    contact: 'fedeMadoery',
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
  },
  {
    avatar: '/avatars/agulon.webp',
    name: 'Agustín Longoni',
    description: 'UX/UI Designer',
    contact: 'alongoni',
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
];

const Team = () => {
  const theme = useTheme();
  return (
    <BoxTeam>
      <CustomDivider />
      <SectionTitle>Team</SectionTitle>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          columnGap: 3,
          rowGap: 8,
          marginBottom: 4,
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
                <Image src={member.avatar} alt={member.name} layout="fill" />
              </Avatar>
              <MemberName>{member.name}</MemberName>
              <MemberDescription>{member.description}</MemberDescription>
              {member.contact && (
                <StyledLink
                  target="_blank"
                  href={
                    member.contactType === 'Twitter'
                      ? `https://twitter.com/${member.contact}`
                      : `https://github.com/${member.contact}`
                  }
                >
                  {member.contactType === 'Twitter' ? (
                    <TwitterMUIIcon
                      sx={{
                        width: theme.customSizes.icon,
                        height: theme.customSizes.icon,
                        fill: '#FFFF',
                      }}
                    />
                  ) : (
                    <GithubCatIcon />
                  )}
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
