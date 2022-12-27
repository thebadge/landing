import { styled, Typography, TypographyProps } from '@mui/material';

type StyledFirstLetterProps = TypographyProps & {
  firstLetterColor?: string;
};

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'firstLetterColor',
})<StyledFirstLetterProps>(({ theme, firstLetterColor }) => ({
  marginBottom: theme.spacing(1),
  '&::first-letter': {
    textShadow: '0 0 0 25px',
    color: firstLetterColor,
  },
}));

export default StyledTypography;
