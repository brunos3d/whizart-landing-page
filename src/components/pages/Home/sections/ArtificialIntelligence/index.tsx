import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { Button } from 'reakit/Button';
import cn from 'classnames';

import { Container, Subtitle, Paragraph } from '@/components';

import { WHITEPAPER_URL } from '@/data/urls';

import pStyles from '@/components/Paragraph/styles.module.css';
import styles from './styles.module.css';

export type ArtificialIntelligenceProps = HTMLAttributes<HTMLElement>;

export default function ArtificialIntelligence({
  className,
  ...rest
}: ArtificialIntelligenceProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <div className={styles.backgroundContainer}>
        <Image
          src="/images/artificial-intelligence.png"
          blurDataURL="/images/artificial-intelligence.png"
          alt="Representation of the game's artificial intelligence"
          layout="fill"
          objectFit="scale-down"
          objectPosition="left"
          placeholder="blur"
        />
      </div>

      <Container className={styles.container}>
        <div className={styles.content}>
          <Subtitle className={styles.subtitle}>
            Artificial Intelligence
          </Subtitle>

          <Paragraph className={styles.paragraph}>
            Whizzy can produce unique NFT artworks based on three inputs:
          </Paragraph>

          <ol className={styles.iaInputs}>
            <li className={pStyles.paragraph}>1. Artist</li>
            <li className={pStyles.paragraph}>2. Workshop</li>
            <li className={pStyles.paragraph}>3. Paints</li>
          </ol>

          <Button
            className={styles.cta}
            as="a"
            href={WHITEPAPER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check the Whitepaper
          </Button>
        </div>
      </Container>
    </section>
  );
}
