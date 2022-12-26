import { styled, Typography, TypographyProps } from '@mui/material';

type StyledFirstLetterProps = TypographyProps & {
  firstLeterColor?: string;
};

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'firstLeterColor',
})<StyledFirstLetterProps>(({ theme, firstLeterColor }) => ({
  marginBottom: theme.spacing(1),
  '&::first-letter': {
    textShadow: '0 0 0 25px',
    color: firstLeterColor,
  },
}));

export default StyledTypography;
