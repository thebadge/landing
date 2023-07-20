import { LogoTheBadgeWithText } from '@thebadge/ui-library';
import advisorDecoration from '/public/assets/advisor-background.png';
import coreTeamDecoration from '/public/assets/core-team-background.png';
import founderDecoration from '/public/assets/founder-background.png';

import { Divider, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';

const StyledTypography = styled(Typography)(() => ({
  textShadow: '0 0 6px #ffffff',
  fontSize: '40px',
  fontWeight: '900',
  lineHeight: '22px',
  color: '#3C3C3B',
}));

const Container = styled(Stack)(() => ({
  position: 'absolute',
  textAlign: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  gap: '12px',
}));

export default function TeamMemberCardDivider({ type }: { type?: string }) {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        width: 'fit-content',
      }}
    >
      {type === 'advisor' && (
        <>
          <Image
            src={advisorDecoration}
            alt="Decoration, Advisors team divider"
            style={{ width: '200px', height: '320px' }}
          />
          <Container>
            <LogoTheBadgeWithText fill="#3C3C3B" size={75} />
            <Divider color="black" />
            <StyledTypography>Advisors</StyledTypography>
          </Container>
        </>
      )}
      {type === 'core-team' && (
        <>
          <Image
            src={coreTeamDecoration}
            alt="Decoration, Core team divider"
            style={{ width: '200px', height: '320px' }}
          />
          <Container>
            <LogoTheBadgeWithText fill="#3C3C3B" size={75} />
            <Divider color="black" />
            <StyledTypography>Team</StyledTypography>
          </Container>
        </>
      )}
      {type === 'founder' && (
        <>
          <Image
            src={founderDecoration}
            alt="Decoration, Founders team divider"
            style={{ width: '200px', height: '320px' }}
          />
          <Container>
            <LogoTheBadgeWithText fill="#3C3C3B" size={75} />
            <Divider color="black" />
            <StyledTypography>Founders</StyledTypography>
          </Container>
        </>
      )}
    </Stack>
  );
}
