import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { Scene } from 'react-scrollmagic';
import cn from 'classnames';

import { WHITEPAPER_URL } from '@/data/urls';
import { Container, Subtitle, Text, LinkButton } from '@/components';

import styles from './styles.module.css';

export type PlayToEarnProps = HTMLAttributes<HTMLElement>;

const features = [
  `WhizArt is an easy to play game made for everyone!`,
  `With few clicks you can manage artists, workshops and paints.`,
  `Earn $WHIZ and participate in the world of NFT Art.`,
];

export default function PlayToEarn({ className, ...rest }: PlayToEarnProps) {
  return (
    <Scene duration="100%" triggerHook="onEnter" indicators={false}>
      {(progress: number) => (
        <section
          className={cn(styles.section, className)}
          style={{ backgroundPositionY: `${100 - progress * 100}%` }}
          {...rest}
        >
          <Container className={styles.container}>
            <div className={styles.frame}>
              <div className={styles.headline}>
                <Image
                  src="/icons/controller.svg"
                  alt="Controller Icon"
                  width="48"
                  height="48"
                />
                <Subtitle className={styles.subtitle}>Play To Earn</Subtitle>
              </div>
              <div className={styles.content}>
                <ul className={styles.features}>
                  {features.map((feature) => (
                    <li className={styles.feature} key={feature}>
                      <Image
                        src="/icons/check-blue.svg"
                        alt="Check"
                        width="24"
                        height="24"
                      />
                      <Text className={styles.featText}>{feature}</Text>
                    </li>
                  ))}
                </ul>
                <LinkButton
                  className={styles.cta}
                  href={WHITEPAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Whitepaper
                </LinkButton>
              </div>
            </div>
          </Container>
        </section>
      )}
    </Scene>
  );
}
