import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import 'swiper/swiper.min.css';
import '@/styles/global.css';

declare const window: any;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRouteChange = (url: any) => {
    window.gtag(`config`, process.env.GTAG_ID as string, {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on(`routeChangeComplete`, handleRouteChange);
    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}
