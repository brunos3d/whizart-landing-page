import Head from 'next/head';
import urljoin from 'url-join';
import isAbsoluteUrl from 'is-absolute-url';

export type SEOProps = {
  shouldIndexPage?: boolean;
  title?: string;
  description?: string;
  mainColor?: string;
  image?: string;
  imageAlt?: string;
  path?: string;
  twitter?: {
    username?: string;
    creator?: string;
  };
};

const fallbackConfig: Partial<SEOProps> = {
  title: `WhizArt Game`,
  description: `Manage artists, workshops and paints to earn $WHIZ and contribute to the world of NFT Art...`,
  mainColor: `#FFEED8`,
};

export default function SEO({
  shouldIndexPage,
  title = fallbackConfig.title,
  description = fallbackConfig.description,
  mainColor,
  image,
  imageAlt = fallbackConfig.title,
  path,
  twitter,
}: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

  const url = urljoin(siteUrl, path || ``);

  // The Vercel environment check must be done to prevent the page
  // from being duplicated in preview builds with custom domains
  // https://vercel.com/support/articles/are-vercel-preview-deployment-indexed-by-search-engines
  // const useNoRobots =
  //   !shouldIndexPage || process.env.VERCEL_ENV !== `production`;

  const thumb =
    image && isAbsoluteUrl(image)
      ? image
      : urljoin(siteUrl, image || `/images/og/default-v2.png`);

  return (
    <Head>
      {/* Base */}
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={thumb} />
      {!shouldIndexPage && <meta name="robots" content="noindex" />}

      {/* General */}
      <link rel="icon" href="/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content=" " />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="msapplication-TileColor" content={mainColor} />
      <meta name="google" content="notranslate" />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={thumb} />
      <meta property="og:image:secure_url" content={thumb} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content={twitter?.username} />
      <meta name="twitter:creator" content={twitter?.creator} />
      <meta name="twitter:image" content={thumb} />
      <meta name="twitter:image:src" content={thumb} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />

      {/* Apple Touch Icons */}
      <link
        rel="apple-touch-icon"
        sizes="48x48"
        href="/images/icons/icon-48x48.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images/icons/icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="96x96"
        href="/images/icons/icon-96x96.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/icons/icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/images/icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/images/icons/icon-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href="/images/icons/icon-384x384.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/images/icons/icon-512x512.png"
      />
    </Head>
  );
}
