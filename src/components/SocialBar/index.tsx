import Image from 'next/image';
import { HTMLAttributes } from 'react';
import cn from 'classnames';

import {
  DISCORD_INVITE_URL,
  TELEGRAM_COMMUNITY_URL,
  TWITTER_COMMUNITY_URL,
} from '@/data/urls';

import styles from './styles.module.css';

export type SocialBarProps = HTMLAttributes<HTMLElement> & {
  direction?: 'vertical' | 'horizontal';
};

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
    url: TELEGRAM_COMMUNITY_URL,
    iconUrl: `/logos/telegram.svg`,
  },
];

export default function SocialBar({
  className,
  direction = `horizontal`,
  ...rest
}: SocialBarProps) {
  return (
    <div className={cn(styles.bar, styles[direction], className)} {...rest}>
      {social.map(({ network, url, iconUrl }) => (
        <a
          className={styles.socialLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={network}
        >
          <Image src={iconUrl} alt={`${network} logo`} width="48" height="48" />
        </a>
      ))}
    </div>
  );
}
