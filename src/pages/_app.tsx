import { useEffect } from 'react';
import Script from 'next/script';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider as ReakitProvider } from 'reakit';

import * as fbq from '@/lib/fpixel';

import 'swiper/css';
import '@/styles/global.css';

declare const window: any;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    fbq.pageview();

    function handleRouteChange(url: any) {
      fbq.pageview();
      window.gtag(`config`, process.env.GTAG_ID as string, {
        page_path: url,
      });
    }

    router.events.on(`routeChangeComplete`, handleRouteChange);
    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="facebook-jssdk"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />

      <ReakitProvider>
        <Component {...pageProps} />
      </ReakitProvider>
    </>
  );
}
