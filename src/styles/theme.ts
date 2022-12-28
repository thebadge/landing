import { PaletteMode } from '@mui/material';
import { Mulish } from '@next/font/google';
import { defaultTheme } from 'thebadge-ui-library';

const mulishFont = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const getTheme = (mode?: PaletteMode) => ({
  ...defaultTheme,
  typography: {
    ...defaultTheme.typography,
    fontFamily: mulishFont.style.fontFamily,
  },
  customSizes: {
    avatar: 92,
    icon: 21,
  },
  components: {
    // We force to use always the same font family, if not we have our custom variants whitout the property
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: mulishFont.style.fontFamily,
        },
      },
    },
  },
});
