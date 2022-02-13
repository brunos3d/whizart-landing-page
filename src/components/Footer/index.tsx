import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import type { SectionLink } from '@/types';

import {
  DISCORD_INVITE_URL,
  TELEGRAM_COMMUNITY_BRAZIL_URL,
  TELEGRAM_COMMUNITY_GLOBAL_URL,
  TELEGRAM_COMMUNITY_VIETNAM_URL,
  TIKTOK_COMMUNITY_URL,
  TWITTER_COMMUNITY_URL,
  WHITEPAPER_URL,
  YOUTUBE_COMMUNITY_CHANNEL_URL,
  FACEBOOK_COMMUNITY_PAGE_URL,
} from '@/data/urls';
import { Container, Text, Badge } from '@/components';

import animated from '@/styles/animated/styles.module.css';
import styles from './styles.module.css';

export type FooterProps = HTMLAttributes<HTMLElement> & {
  sections?: SectionLink[];
};

export type FooterLink = SectionLink & { soon?: boolean };

const community: FooterLink[] = [
  {
    title: `Twitter`,
    url: TWITTER_COMMUNITY_URL,
  },
  {
    title: `Discord`,
    url: DISCORD_INVITE_URL,
  },
  {
    title: `Telegram Global`,
    url: TELEGRAM_COMMUNITY_GLOBAL_URL,
  },
  {
    title: `Telegram Brazil`,
    url: TELEGRAM_COMMUNITY_BRAZIL_URL,
  },
  {
    title: `Telegram Vietnam`,
    url: TELEGRAM_COMMUNITY_VIETNAM_URL,
  },
  {
    title: `YouTube`,
    url: YOUTUBE_COMMUNITY_CHANNEL_URL,
  },
  {
    title: `TikTok`,
    url: TIKTOK_COMMUNITY_URL,
  },
  {
    title: `Facebook`,
    url: FACEBOOK_COMMUNITY_PAGE_URL,
  },
];

const about: FooterLink[] = [
  {
    title: `Whitepaper`,
    url: WHITEPAPER_URL,
  },
  {
    title: `Terms of Use`,
    url: `/`,
    soon: true,
  },
  {
    title: `Privacy Policy`,
    url: `/`,
    soon: true,
  },
  {
    title: `Code of Conduct`,
    url: `/`,
    soon: true,
  },
  {
    title: `FAQ`,
    url: WHITEPAPER_URL,
    soon: true,
  },
  {
    title: `Manifest`,
    url: WHITEPAPER_URL,
    soon: true,
  },
];

export default function Footer({ className, sections, ...rest }: FooterProps) {
  return (
    <footer className={cn(styles.footer, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.logoArea}>
          <Image
            src="/logos/whizart.png"
            alt="WhizArt"
            width="314"
            height="90"
            quality={100}
          />
          <span>Play2earn. Mint NFT Art.</span>
        </div>
        {sections && (
          <div className={styles.category}>
            <Text className={styles.text}>Sections</Text>
            <ul className={styles.links}>
              {sections.map(({ title, url }) => (
                <li className={styles.link} key={title}>
                  <Link href={url}>
                    <a className={cn(styles.anchor, animated.underline)}>
                      <Text as="span" variant="small">
                        {title}
                      </Text>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.category}>
          <Text className={styles.text}>Community</Text>
          <ul className={styles.links}>
            {community.map(({ title, url, soon }) => (
              <li className={styles.link} key={title}>
                <Link href={url}>
                  <a
                    className={cn(styles.anchor, animated.underline, {
                      [styles.disabled]: soon,
                    })}
                  >
                    <Text as="span" variant="small">
                      {title}
                    </Text>
                    {soon && <Badge size="small">Soon</Badge>}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.category}>
          <Text className={styles.text}>About</Text>
          <ul className={styles.links}>
            {about.map(({ title, url, soon }) => (
              <li className={styles.link} key={title}>
                <Link href={url}>
                  <a
                    className={cn(styles.anchor, animated.underline, {
                      [styles.disabled]: soon,
                    })}
                  >
                    <Text as="span" variant="small">
                      {title}
                    </Text>
                    {soon && (
                      <Badge className={styles.badge} size="small">
                        Soon
                      </Badge>
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className={styles.rightsArea}>
        <Container className={styles.rightsContainer}>
          <Text as="span" variant="small">
            WhizArt® 2022. All rights reserved.
          </Text>
        </Container>
      </div>
    </footer>
  );
}
