import { Partytown } from '@builder.io/partytown/react';
import {
  Head, Html, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta name="description" content="Portfolio Andrzej Dromert" />
        <meta name="author" content="Developard" />
        <meta charSet="Latin-1" />

        <meta
          name="keywords"
          content="portfolio, andrzej, dromert, artysta, rzeźba, rysunek"
        />
        <meta name="googlebot" content="index,follow" />
        <meta name="robots" content="index,follow" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
        <Partytown debug={true} forward={['dataLayer.push']} />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6GZZBNTRWQ');
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6GZZBNTRWQ"
          type="text/partytown"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
