import createCache from '@emotion/cache';
import { EmotionCache } from '@emotion/react';

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="The Badge" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;300;400;500;600;700;800&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const cache = createCache({
    key: 'css',
    prepend: true,
  }) as EmotionCache;
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const startTime = Date.now();
  try {
    /**
     * Render the page as normal, but now that ApolloClient is initialized and the cache is full, each query will actually work.
     */
    const initialProps = await Document.getInitialProps(ctx);

    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    console.info(`Render Time: ${Date.now() - startTime} milliseconds.`);

    return {
      ...initialProps,
      emotionStyleTags,
      styles: <>{initialProps.styles}</>,
    };
  } catch (error) {
    console.error(error);
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }
};

export default MyDocument;
