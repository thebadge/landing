// src/pages/_app.tsx
import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';

import { LayoutContainer } from '../components/Layout/LayoutContainer';
import { useGoogleAnalytics } from '@/src/hooks/useGoogleAnalytics';
import { useCustomTheme } from '@/src/hooks/useTheme';

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
  const theme = useCustomTheme();
  useGoogleAnalytics();
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
