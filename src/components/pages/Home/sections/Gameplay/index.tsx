import { HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import { WHITEPAPER_URL } from '@/data/urls';
import { Container, Subtitle, Text, LinkButton } from '@/components';

import styles from './styles.module.css';

export type GameplayProps = HTMLAttributes<HTMLElement>;

const cards = [
  {
    name: `1`,
    url: `/images/cards/artists/1.png`,
    width: `280`,
    height: `384`,
  },
  {
    name: `2`,
    url: `/images/cards/artists/2.png`,
    width: `280`,
    height: `384`,
  },
  {
    name: `3`,
    url: `/images/cards/artists/3.png`,
    width: `280`,
    height: `384`,
  },
];

export default function Gameplay({ className, ...rest }: GameplayProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <div className={styles.headline}>
        <Subtitle className={styles.subtitle}>Gameplay</Subtitle>

        <div className={styles.nav}>
          <Link href="/#order-commissions">
            <a className={styles.navLink}>Order Commissions</a>
          </Link>
          <Link href="/#artwork">
            <a className={styles.navLink}>Artwork</a>
          </Link>
          <Link href="/#manage-artists">
            <a className={styles.navLink}>Manage Artists</a>
          </Link>
        </div>
        <hr className={styles.hr} />
      </div>

      <Container className={styles.container}>
        <div className={styles.features}>
          <div className={styles.feature} id="order-commissions">
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
                WhizArt&apos;s unique system combines through API a variety of
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

          <div className={styles.connections}>
            <Image
              src="/vectors/dotted-line-ltr.svg"
              alt="Left to Right line"
              layout="fill"
            />
          </div>

          <div className={cn(styles.feature, styles.inverse)} id="artwork">
            <div className={styles.featContent}>
              <Image
                src="/icons/palette.svg"
                alt="Palette icon"
                width="48"
                height="48"
              />

              <Subtitle className={styles.featSubtitle} as="h4">
                Artwork
              </Subtitle>

              <Text className={styles.featDescription}>
                Apart from earning $WHIZ, each Commission will also grant a
                chance of activating Whizzy (our AI). When activated, Whizzy
                will give you extra $WHIZ tokens and generate a unique NFT
                artwork. The probability of activating Whizzy varies according
                to the Artist&apos;s Rarity and Creativity Level.
              </Text>
            </div>
            <div className={styles.featMedia}>
              <Image
                src="/images/doge-ai-output.png"
                alt="Doge AI Output"
                width="528"
                height="309"
              />
            </div>
          </div>

          <div className={cn(styles.connections, styles.flip)}>
            <Image
              src="/vectors/dotted-line-ltr.svg"
              alt="Right to Left line"
              layout="fill"
            />
          </div>

          <div className={styles.feature} id="manage-artists">
            <div className={styles.featContent}>
              <Image
                src="/icons/person-cards.svg"
                alt="Person cards icon"
                width="48"
                height="48"
              />

              <Subtitle className={styles.featSubtitle} as="h4">
                Manage Artists
              </Subtitle>

              <Text className={styles.featDescription}>
                Collect, upgrade and trade Artists to create the perfect
                combination of inspiration for your original NFT Artwork.
              </Text>

              <LinkButton
                className={styles.cta}
                href={WHITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Whitepaper
              </LinkButton>
            </div>
            <div className={styles.featMedia}>
              <Swiper
                effect="cards"
                grabCursor
                modules={[EffectCards]}
                className={styles.swiper}
              >
                {cards.map(({ name, url, width, height }) => (
                  <SwiperSlide className={styles.slide} key={name}>
                    <Image
                      src={url}
                      alt={name}
                      width={width}
                      height={height}
                      className={styles.cardImage}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
