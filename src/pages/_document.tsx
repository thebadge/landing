import createCache from '@emotion/cache';
import { EmotionCache } from '@emotion/react';

import { GA_MEASUREMENT_ID } from '@/src/constants';
import createEmotionServer from '@emotion/server/create-instance';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  title = 'The Badge: decentralized certifications tokenized as NFTs';
  description =
    'The Badge is a decentralized certification platform powered by Ethereum. It provides users with the opportunity to tokenize any piece of information from the real world in the form of badges. These badges are verified and validated by the community, which decides what should be accepted and what should not be.';
  twitterHandle = '@thebadgexyz';

  render() {
    return (
      <Html>
        <Head>
          <title>{this.title}</title>
          <meta content="website" property="og:type" />
          <meta name="description" content={this.description} />
          <meta content={this.title} property="og:title" />
          <meta property="og:url" content="https://thebadge.xyz" />

          <meta
            content={`https://thebadge.xyz/the_badge_banner.webp`}
            property="og:image"
          />
          <meta property="og:image:type" content="image/webp" />
          <meta property="og:image:width" content="1404" />
          <meta property="og:image:height" content="459" />

          <meta property="og:video" content={`https://thebadge.xyz/video/TheBadge.mp4`} />
          <meta property="og:video:type" content="video/mp4" />
          <meta property="og:video:width" content="720" />
          <meta property="og:video:height" content="1280" />

          <meta content={this.description} property="og:description" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content={this.title} name="twitter:site" />
          <meta content={this.twitterHandle} name="twitter:creator" />

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content={this.twitterHandle}/>
          <meta name="twitter:image" content={`https://thebadge.xyz/the_badge_banner.webp`}/>

          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.thebadge.xyz/" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
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
