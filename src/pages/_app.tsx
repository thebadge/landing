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
import { ReactElement, ReactNode, useMemo } from 'react';

import { useGoogleAnalytics } from '@/src/hooks/useGoogleAnalytics';
import { LayoutContainer } from '../components/Layout/LayoutContainer';
import SectionReferencesProvider from '../contexts/referencesContext';
import { getTheme, getTypographyVariants } from '../styles/theme';
import { NextPage } from 'next';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({
  key: 'css',
  prepend: true,
}) as EmotionCache;

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) => {
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

  const getLayout =
    Component.getLayout ??
    ((page) => <LayoutContainer>{page}</LayoutContainer>);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SectionReferencesProvider>
          {getLayout(<Component {...pageProps} />)}
        </SectionReferencesProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
