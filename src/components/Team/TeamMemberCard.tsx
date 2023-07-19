import { BehanceIcon } from '@/src/components/Commons/SVGs/BehanceIcon';
import { GitHub, LinkedIn, Mail, Twitter } from '@mui/icons-material';
import { Box, Stack, styled, useTheme } from '@mui/material';
import { BadgePreview } from '@thebadge/ui-library';
import { ContactType, TeamMember } from '.';

const StyledLink = styled('a')(() => ({
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',
  cursor: 'pointer',
  textDecoration: 'none',
}));

export default function TeamMemberCard({ user }: { user: TeamMember }) {
  const theme = useTheme();
  const { name, role, socials, avatar } = user;

  function getContactIcon(contactType: ContactType, color?: string) {
    switch (contactType) {
      case ContactType.Twitter:
        return (
          <Twitter
            sx={{
              width: theme.customSizes.icon,
              height: theme.customSizes.icon,
              fill: color || '#FFFF',
            }}
          />
        );
      case ContactType.Github:
        return (
          <GitHub
            sx={{
              width: theme.customSizes.icon,
              height: theme.customSizes.icon,
              fill: color || '#FFFF',
            }}
          />
        );
      case ContactType.Behance:
        return <BehanceIcon color={color || '#FFFF'} sx={{ mr: 0.5 }} />;
      case ContactType.Linkedin:
        return (
          <LinkedIn
            sx={{
              width: theme.customSizes.icon,
              height: theme.customSizes.icon,
              fill: color || '#FFFF',
            }}
          />
        );
      case ContactType.Email:
        return (
          <Mail
            sx={{
              width: theme.customSizes.icon,
              height: theme.customSizes.icon,
              fill: color || '#FFFF',
            }}
          />
        );
    }
  }

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

  function getDescription() {
    return (
      <>
        {role}
        <Box display="flex" gap={1} mt={1.5}>
          {socials.map((contact) => (
            <StyledLink
              key={contact.name}
              target="_blank"
              href={getContactUrl(contact.type, contact.name)}
            >
              {getContactIcon(contact.type, contact.color)}
            </StyledLink>
          ))}
        </Box>
      </>
    );
  }

  function getBackground() {
    if(user.team === 'Advisor') {
      return "/assets/advisor-background.png"
    } else {
      return "/assets/team-background.png"
    }
  }

  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: 'fit-content' }}>
      <BadgePreview
        animationEffects={[]}
        badgeBackgroundUrl={getBackground()}
        badgeUrl={``}
        category={name}
        description={getDescription()}
        imageUrl={avatar}
        size="small"
        textContrast="light"
        title={user.team || ' '}
      />
    </Stack>
  );
}
