import Image from 'next/image';
import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { WHITEPAPER_URL } from '@/data/urls';

import { Container, LinkButton } from '@/components';

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

            <LinkButton className={styles.cta} href={WHITEPAPER_URL}>
              <span className={styles.ctaFullText}>Read the</span> Whitepaper
            </LinkButton>
          </div>
        </div>
      </Container>

      <div className={styles.backgroundContainer}>
        <Image
          src="/images/main-art.png"
          alt="Painting showing game artists in their respective environments"
          layout="responsive"
          width={1440}
          height={808}
          className={styles.backgroundImage}
        />
      </div>
    </section>
  );
}
