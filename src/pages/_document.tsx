/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/no-danger */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from 'next/document';

export default class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Kanit:wght@400;500;600&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />

          <noscript>
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  [data-aos] {
                    opacity: 1 !important;
                    transform: translate(0) scale(1) !important;
                  }
                `,
              }}
            />
          </noscript>
        </Head>

        <body>
          <noscript>
            You need to enable JavaScript in your browser for this application
            to work.
          </noscript>

          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
