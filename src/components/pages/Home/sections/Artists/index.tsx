import Image from 'next/image';
import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Container, Subtitle, Paragraph } from '@/components';

import styles from './styles.module.css';

export type ArtistsProps = HTMLAttributes<HTMLElement>;

export default function Artists({ className, ...rest }: ArtistsProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Subtitle className={styles.subtitle}>Artists</Subtitle>
          <Paragraph className={styles.paragraph}>
            Wide variety of NFTs, they will all lead in generating tokens and
            creating your art.
          </Paragraph>
        </div>
        <ul className={styles.cards}>
          <li className={styles.cardItem}>
            <Image
              src="/images/card-1.png"
              alt="image of card 1 containing the artist Badzilla"
              width={413}
              height={574}
            />
          </li>
          <li>
            <Image
              src="/images/card-2.png"
              alt="image of card 2 containing the artist Tarsila"
              width={413}
              height={567}
            />
          </li>
          <li>
            <Image
              src="/images/card-3.png"
              alt="image of card 3 containing the artist Salvador Daqui"
              width={413}
              height={574}
            />
          </li>
        </ul>
      </Container>
    </section>
  );
}
