import TwitterMUIIcon from '@mui/icons-material/Twitter';
import { Avatar, Box, Divider, styled, Typography } from '@mui/material';
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

type TeamMember = {
  avatar: string;
  name: string;
  description: string;
  contact?: string;
  contactType?: string; // TODO Enum
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b65c22d2-a77a-49b2-a58a-1ce41ed2d41a/agu.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T133408Z&X-Amz-Expires=86400&X-Amz-Signature=b368dd3352edec43323152f9b115739291b3c190d1958966cad24c89ccf375c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22agu.jpeg%22&x-id=GetObject',
    name: 'Agustín Pane',
    description: 'Co-founder \n Project Manager, Full-stack & Web3 Developer',
    contact: 'agupane',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5272a2e9-872f-43be-8e2a-83e8e8ba4854/nico.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T133656Z&X-Amz-Expires=86400&X-Amz-Signature=946b1a2844a2ab5dbffa7999616444730bb689ba5e6668c3f0170c9181f936b2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22nico.png%22&x-id=GetObject',
    name: 'Nicolás Domínguez',
    description: 'Co-founder \n Sofware Architect, Web3 & Solidity Developer',
    contact: 'nicosampler',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/819460d3-e352-4796-959a-ebdcaf22b75c/fede.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T133439Z&X-Amz-Expires=86400&X-Amz-Signature=eadfa1a275dc34e1e02001327c0bd91b70c559c5599819a1ec0187e5e32a8763&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22fede.png%22&x-id=GetObject',
    name: 'Federico Madoery',
    description: 'Co-founder \n UIX Expert, Full-stack & Mobile Developer',
    contact: 'fedeMadoery',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b89948e5-404a-43fd-bc9d-0f802f817118/javi.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T132400Z&X-Amz-Expires=86400&X-Amz-Signature=44337b5974e579f69fb1be186635ae6a53837e5202b6de92dea73c4bcff14e47&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22javi.jpeg%22&x-id=GetObject',
    name: 'Javier Alba, CFA',
    description: 'Co-founder \n Chief Financial Officer',
    contact: 'JaviAlba00',
    contactType: 'Twitter',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d457a3e2-fc41-494f-9c70-453ea5b918f6/fer.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T113407Z&X-Amz-Expires=86400&X-Amz-Signature=7843b4c69b96b1ec2c6b7298e06c43d4851c849a2e4f5a74ad7d366df5f710d4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22fer.jpeg%22&x-id=GetObject',
    name: 'Fernando Ramirez',
    description: 'Frontend Developer',
    contact: 'ramabit',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c5ff4230-7ab9-415c-8fc1-8cfd021c8377/agul.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T133424Z&X-Amz-Expires=86400&X-Amz-Signature=9ede7cff13b98838f73b0782a1cd53f5fa3489524868b3f09e8234fda275ef61&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22agul.jpg%22&x-id=GetObject',
    name: 'Agustín Longoni',
    description: 'UX/UI Designer',
    contact: 'alongoni',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f086473e-cc5d-47da-9249-3ead6f1999df/lombardi.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T131755Z&X-Amz-Expires=86400&X-Amz-Signature=8e9c34aba110e12c7863f3cefeec1a80900a89a6ea6af0f3a746850465f7eedf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22lombardi.jpeg%22&x-id=GetObject',
    name: 'Agustín Lombardi',
    description: 'Community Manager',
    contact: 'lombarcrypto',
    contactType: 'Twitter',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/50d8246a-23e1-4ba6-817e-e5c2d6e701e8/nicom.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T131353Z&X-Amz-Expires=86400&X-Amz-Signature=e5bdcdb8374169c63f55fe97f7f859f20c3cf8477196106dc24c47dbd65cc522&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22nicom.jpg%22&x-id=GetObject',
    name: 'Nicolás Magri',
    description: 'Chief Compliance Officer',
    contact: 'monito313',
    contactType: 'Twitter',
  },
];

export const Team = () => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Divider sx={{ borderColor: '#66F5DF' }} />

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
                alt={member.name}
                src={member.avatar}
                sx={{
                  width: 92,
                  height: 92,
                }}
              />
              <MemberName>{member.name}</MemberName>
              <MemberDescription>{member.description}</MemberDescription>
              {member.contact && (
                <Box
                  sx={{
                    flexDirection: 'row',
                    display: 'flex',
                    marginTop: 'auto',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    window.open(
                      member.contactType === 'Twitter'
                        ? `https://twitter.com/${member.contact}`
                        : `https://github.com/${member.contact}`,
                      '_blank',
                    );
                  }}
                >
                  {member.contactType === 'Twitter' ? (
                    <TwitterMUIIcon
                      sx={{ width: 21, height: 21, fill: '#FFFF' }}
                    />
                  ) : (
                    <GithubCatIcon />
                  )}
                  <MemberDescription>@{member.contact}</MemberDescription>
                </Box>
              )}
            </MemberBox>
          );
        })}
      </Box>
    </Box>
  );
};
