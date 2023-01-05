// TheBadge UI Library
import 'node_modules/thebadge-ui-library/dist/index.css';

import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { AppProps } from 'next/app';
import { useMemo } from 'react';

import { useGoogleAnalytics } from '@/src/hooks/useGoogleAnalytics';
import { LayoutContainer } from '../components/Layout/LayoutContainer';
import SectionReferencesProvider from '../contexts/referencesContex';
import { getTheme, getTypographyVariants } from '../styles/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({
  key: 'css',
  prepend: true,
}) as EmotionCache;

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  const theme = useMemo(() => {
    const theme = getTheme();
    const variants = getTypographyVariants(theme);
    return responsiveFontSizes(createTheme(theme), {
      disableAlign: true,
      factor: 1.4,
      variants,
    });
  }, []);

  useGoogleAnalytics();
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SectionReferencesProvider>
          <LayoutContainer>
            <Component {...pageProps} />
          </LayoutContainer>
        </SectionReferencesProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
