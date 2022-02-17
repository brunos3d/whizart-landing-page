import { HTMLAttributes } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import {
  DISCORD_INVITE_URL,
  TELEGRAM_COMMUNITY_BRAZIL_URL,
  TWITTER_COMMUNITY_URL,
} from '@/data/urls';

import { Container, Subtitle } from '@/components';

import styles from './styles.module.css';

export type CommunityProps = HTMLAttributes<HTMLElement>;

const social = [
  {
    network: `twitter`,
    url: TWITTER_COMMUNITY_URL,
    iconUrl: `/logos/twitter.svg`,
  },
  {
    network: `discord`,
    url: DISCORD_INVITE_URL,
    iconUrl: `/logos/discord.svg`,
  },
  {
    network: `telegram`,
    url: TELEGRAM_COMMUNITY_BRAZIL_URL,
    iconUrl: `/logos/telegram.svg`,
  },
];

export default function Community({ className, ...rest }: CommunityProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <Subtitle className={styles.subtitle}>Join community</Subtitle>
        <div className={styles.list}>
          {social.map(({ network, url, iconUrl }) => (
            <a
              className={styles.link}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={network}
            >
              <Image
                src={iconUrl}
                alt={`${network} logo`}
                width="48"
                height="48"
              />

              <span className={styles.network}>{network}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
