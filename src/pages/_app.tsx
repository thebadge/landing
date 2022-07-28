// src/pages/_app.tsx
import type { AppType } from "next/dist/shared/lib/utils";

import { ThemeProvider } from "styled-components";
import { LayaoutContainer } from "../components/Layout/LayoutContainer";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LayaoutContainer>
          <Component {...pageProps} />
        </LayaoutContainer>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
