import { AppProps } from 'next/app';
import '@/styles/global.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
