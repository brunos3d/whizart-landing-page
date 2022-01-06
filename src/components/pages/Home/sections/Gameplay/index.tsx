import Image from 'next/image';
import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Container, BlurredCard } from '@/components';

import styles from './styles.module.css';

export type GameplayProps = HTMLAttributes<HTMLElement>;

export default function Gameplay({ className, ...rest }: GameplayProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.col}>
          <BlurredCard
            className={styles.card}
            title="Daily Commissions"
            description="Players can do 2 Commissions per day to earn $WHIZ. Each Commission is an attempt to create an artwork. You will always earn $WHIZ for each attempt, but the Artist may not always be inspired to create something original, or anything at all!"
          />

          <BlurredCard
            className={styles.card}
            title="Artwork"
            description="Apart from earning $WHIZ, each Commission will also grant a chance of activating Whizzy (our AI). When activated, Whizzy will give you extra $WHIZ tokens and generate a unique NFT artwork. The probability of activating Whizzy varies according to the Artist's rarity and creativity."
          />
        </div>
        <div className={styles.col}>
          <BlurredCard
            className={styles.card}
            title="Manage Artists"
            description="Collect, upgrade and trade Artists to create the perfect combination of inspiration for your original NFT Artwork."
          />
        </div>
      </Container>

      <div className={styles.backgroundContainer}>
        <Image
          src="/images/sistine-chapel-the-creation-of-adam.png"
          alt="Sistine Chapel ceiling photo with The Creation of Adam in the center"
          layout="fill"
          objectFit="cover"
          width={1511}
          height={1146}
          className={styles.backgroundImage}
        />
      </div>
    </section>
  );
}
