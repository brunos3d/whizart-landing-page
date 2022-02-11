import { HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import { Container, Subtitle, Text } from '@/components';

import styles from './styles.module.css';

export type GameplayProps = HTMLAttributes<HTMLElement>;

export default function Gameplay({ className, ...rest }: GameplayProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <div className={styles.headline}>
        <Subtitle className={styles.subtitle}>Gameplay</Subtitle>

        <div className={styles.nav}>
          <Link href="/#">
            <a className={styles.navLink}>Order Commissions</a>
          </Link>
          <Link href="/#">
            <a className={styles.navLink}>Artwork</a>
          </Link>
          <Link href="/#">
            <a className={styles.navLink}>Manage Artists</a>
          </Link>
        </div>
        <hr className={styles.hr} />
      </div>
      <Container className={styles.container}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featContent}>
              <Image
                src="/icons/hand-coins.svg"
                alt="Hand and coins icon"
                width="48"
                height="48"
              />
              <Subtitle className={styles.featSubtitle} as="h4">
                Order Commissions
              </Subtitle>
              <Text className={styles.featDescription}>
                The only game where you can produce art while you play.
                WhizArt&rsquo;s unique system combines through API a variety of
                image banks and a vast range of art style to produce Art with
                you own NFT characters.
              </Text>
            </div>
            <div className={styles.featMedia}>
              <Image
                src="/images/coins.png"
                alt="WhizArt Coins"
                width="426"
                height="283"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
