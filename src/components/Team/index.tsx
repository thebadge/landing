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
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/df577441-a70e-41c5-b277-a45ea1a7b524/Perfil_comprimida.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T191134Z&X-Amz-Expires=86400&X-Amz-Signature=0c744501f9db483b4fd30d1899106d742531cc1356fc36a8a9d5f7ac612a8414&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Perfil%2520comprimida.jpg%22&x-id=GetObject',
    name: 'Agustín Pane',
    description: 'Co-founder \n Project Manager, Full-stack & Web3 Developer',
    contact: '@agupane',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9a0a70a5-ea0e-4c87-92ba-a2a526e83a8a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T191146Z&X-Amz-Expires=86400&X-Amz-Signature=60530e389ffd45132aab76aa7b58bf9f934f8df466e984ab84ec80876846cd3e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject',
    name: 'Nicolás Domínguez',
    description: 'Co-founder \n Sofware Architect, Web3 & Solidity Developer',
    contact: '@nicosampler',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/79e831c5-5255-4fbc-942b-cdd52ef3f652/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T191200Z&X-Amz-Expires=86400&X-Amz-Signature=06a163e716f30f48e73238c669eadffc3230ccdffc6741613c78516658aa19ab&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject',
    name: 'Federico Madoery',
    description: 'Co-founder \n UIX Expert, Full-stack & Mobile Developer',
    contact: '@fedeMadoery',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/64db8028-ee5d-479f-b423-7045908344c5/Javier_A.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T191120Z&X-Amz-Expires=86400&X-Amz-Signature=e30d2b7ab0f222a4652f5048df77d51d2d022930a47896347eccd616f448d700&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Javier%2520A.jpg%22&x-id=GetObject',
    name: 'Javier Alba, CFA',
    description: 'Co-founder \n Chief Financial Officer',
    contact: '@JaviAlba00',
    contactType: 'Twitter',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ad3a23f1-e9ec-4047-bc19-dc659b142e1f/0.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T191108Z&X-Amz-Expires=86400&X-Amz-Signature=338e057688fab7845d3a0322617debf08ef335ff3eab5ecf7c6b611bd407c695&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%220.jpeg%22&x-id=GetObject',
    name: 'Fernando Ramirez',
    description: 'Frontend Developer',
    contact: '@ramabit',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8195605b-5b00-4b91-af15-4c7452241fd3/ALprofile.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T191231Z&X-Amz-Expires=86400&X-Amz-Signature=3c6433d892bcdc698a2d74c16dddc77e1fdd83102265724e2727ac33bf533328&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ALprofile.jpg%22&x-id=GetObject',
    name: 'Agustín Longoni',
    description: 'UX/UI Designer',
    contact: '@alongoni',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b5e7c29c-4240-4ff7-bd7f-f20dad63ff04/photo_2022-09-29_23-43-15.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T191036Z&X-Amz-Expires=86400&X-Amz-Signature=8843a4c2d3b204cf0b9d820421538687a7eecfd7eeda79f2f9bcb7dbc08bb898&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22photo_2022-09-29_23-43-15.jpg%22&x-id=GetObject',
    name: 'Agustín Lombardi',
    description: 'Community Manager, Funds Raising',
    contact: '@lombarcrypto',
    contactType: 'Twitter',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8e6fbe90-bb40-4c09-b06a-45041aca0dd5/EUG_7073_Original.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T191221Z&X-Amz-Expires=86400&X-Amz-Signature=29bef834f0b05661212840e221ee2414de9e023410504e3050cb2764e85648be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22EUG_7073_Original.JPG.jpg%22&x-id=GetObject',
    name: 'Nicolás Magri',
    description: 'Chief Compliance Officer',
    contact: '@monito313',
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
                imgProps={{
                  sx:
                    i === 6
                      ? {
                          height: '200%',
                          top: '-1px',
                          position: 'absolute',
                        } // Agu Lomboardi picture need be diff, hardcoded fix
                      : {},
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
                  }}
                >
                  {member.contactType === 'Twitter' ? (
                    <TwitterMUIIcon
                      sx={{ width: 21, height: 21, fill: '#FFFF' }}
                    />
                  ) : (
                    <GithubCatIcon />
                  )}
                  <MemberDescription>{member.contact}</MemberDescription>
                </Box>
              )}
            </MemberBox>
          );
        })}
      </Box>
    </Box>
  );
};
