import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { Button } from 'reakit/Button';
import cn from 'classnames';

import { WHITEPAPER_URL } from '@/data/urls';

import { Container } from '@/components';

import styles from './styles.module.css';

export type HeroProps = HTMLAttributes<HTMLElement>;

export default function Hero({ className, ...rest }: HeroProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.frameContent}>
            <h1 className={styles.title}>Play to Earn</h1>
            <p className={styles.description}>Mint NFT Art</p>
          </div>

          <Button
            className={styles.cta}
            as="a"
            href={WHITEPAPER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Whitepaper
          </Button>
        </div>
      </Container>

      <div className={styles.backgroundContainer}>
        <Image
          src="/images/main-art.png"
          blurDataURL="/images/main-art.png"
          alt="Painting showing game artists in their respective environments"
          layout="responsive"
          width={1511}
          height={1075}
          className={styles.backgroundImage}
          placeholder="blur"
        />
      </div>
    </section>
  );
}
