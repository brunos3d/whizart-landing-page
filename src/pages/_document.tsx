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
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&family=Rowdies:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

          {/* eslint-disable-next-line @next/next/next-script-for-ga */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-74BBJVB6ZD"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-74BBJVB6ZD', { page_path: window.location.pathname });
            `,
            }}
          />

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
