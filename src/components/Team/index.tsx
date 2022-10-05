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
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eb950806-4d0f-4d05-b222-a67c0c3cbb87/agu.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T113320Z&X-Amz-Expires=86400&X-Amz-Signature=83754b2372c223f2e4d7c7fda7822fb44e5aac44070cfa725c552b67d61e54a5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22agu.jpeg%22&x-id=GetObject',
    name: 'Agustín Pane',
    description: 'Co-founder \n Project Manager, Full-stack & Web3 Developer',
    contact: 'agupane',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81275c9d-6b5b-4479-b775-1d881be0bb9c/nico.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T113503Z&X-Amz-Expires=86400&X-Amz-Signature=e712279cff5b593ff849cdfde417aaaf2a4d9dba5042b6301410ff0fafb6c7db&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22nico.png%22&x-id=GetObject',
    name: 'Nicolás Domínguez',
    description: 'Co-founder \n Sofware Architect, Web3 & Solidity Developer',
    contact: 'nicosampler',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c7653521-fe0c-4ccf-8382-82ed2b6ccf9d/fede.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T113352Z&X-Amz-Expires=86400&X-Amz-Signature=c439c9291d5195054a08c1a28a546a45a1a879769f79e2e9fe14368f0a2ccb6e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22fede.png%22&x-id=GetObject',
    name: 'Federico Madoery',
    description: 'Co-founder \n UIX Expert, Full-stack & Mobile Developer',
    contact: 'fedeMadoery',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/928c0a08-53f6-4ad0-b3ac-8f4c9b86374d/javi.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T113425Z&X-Amz-Expires=86400&X-Amz-Signature=af59108466a1a8533d36716c3522918447bffbccde5b9b6f10d5f64ecbf8284c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22javi.jpeg%22&x-id=GetObject',
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
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e712f8ce-09c5-4e0c-a316-a3599c91b74c/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T113334Z&X-Amz-Expires=86400&X-Amz-Signature=c75b85bbfa49d7f0d16214bcab5f38f3ba371aecbe97394591879c5173b10aec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22&x-id=GetObject',
    name: 'Agustín Longoni',
    description: 'UX/UI Designer',
    contact: 'alongoni',
  },
  {
    avatar:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/46a88af7-8aef-45fa-bbac-e8a428e6b369/lombardi_%281%29.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T130205Z&X-Amz-Expires=86400&X-Amz-Signature=0d4a523ca74634382d21b439e84350c8c54ca1559ac03ce3161a51a575d9d439&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22lombardi%2520%281%29.jpeg%22&x-id=GetObject',
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
