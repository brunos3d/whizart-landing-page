import Image from 'next/image';
import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Container } from '@/components';

import styles from './styles.module.css';

export type HeroProps = HTMLAttributes<HTMLElement>;

export default function Hero({ className, ...rest }: HeroProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>Play to Earn</h1>
          <p>Mint NFT Art</p>
        </div>
        <div className={styles.backgroundContainer}>
          <Image
            src="/images/main-art.png"
            alt="Painting showing game artists in their respective environments"
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
      </Container>
    </section>
  );
}
