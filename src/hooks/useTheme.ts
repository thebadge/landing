import { useMemo } from 'react';
import { createTheme } from '@mui/material';
import { CustomTheme, getTheme } from '@/src/styles/theme';

export const useCustomTheme = (): CustomTheme => {
  const theme = useMemo(() => createTheme(getTheme()), []);
  return theme as unknown as CustomTheme;
};
