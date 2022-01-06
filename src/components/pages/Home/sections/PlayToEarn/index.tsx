import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { Button } from 'reakit/Button';
import cn from 'classnames';

import { WHITEPAPER_URL } from '@/data/urls';
import { Container, Subtitle, Paragraph } from '@/components';

import styles from './styles.module.css';

export type PlayToEarnProps = HTMLAttributes<HTMLElement>;

export default function PlayToEarn({ className, ...rest }: PlayToEarnProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Subtitle className={styles.subtitle}>Play to Earn</Subtitle>
          <Paragraph className={styles.paragraph}>
            Manage artists, workshops and paints to earn $WHIZ and contribute to
            the world of NFT Art..
          </Paragraph>
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
          src="/images/coins-and-tools.png"
          blurDataURL="/images/coins-and-tools.png"
          alt="Painting showing brushes, gold coins, ink drops and flying papers"
          width={709}
          height={506}
          placeholder="blur"
        />
      </div>
    </section>
  );
}
