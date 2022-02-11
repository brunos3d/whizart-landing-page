import { HTMLAttributes } from 'react';
import { Scene } from 'react-scrollmagic';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { WHITEPAPER_URL } from '@/data/urls';
import { Container, Text, Badge, Nav, LinkButton } from '@/components';

import styles from './styles.module.css';

export type HeroProps = HTMLAttributes<HTMLElement>;

export default function Hero({ className, ...rest }: HeroProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      {/* <Image
            className={styles.backgroundImage}
            src="/images/backgrounds/light-beige.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          /> */}

      <Container className={styles.container}>
        <Nav className={styles.nav} />

        <div className={styles.content}>
          <Badge className={styles.badge}>Coming Soon</Badge>

          <Scene duration={75} indicators={true} triggerHook={0}>
            {(progress: number) => (
              <h1
                className={styles.title}
                style={{
                  transform: `translateY(-${progress * 50}px)`,
                  opacity: 1 - progress,
                }}
              >
                <Image
                  src="/logos/whizart.png"
                  alt="WhizArt"
                  width="485"
                  height="140"
                />
              </h1>
            )}
          </Scene>

          <Text as="h2" className={styles.subtitle}>
            WhizArt is a{` `}
            <Link href="#gameplay">
              <a className={styles.anchor}>play-to-earn</a>
            </Link>
            {` `}
            game that lets you
            {` `}
            <Link href="#nft">
              <a className={styles.anchor}>create unique NFT artworks</a>
            </Link>
            {` `}
            tradable in OpenSea. Don&apos;t miss the second wave of Crypto
            Games.
          </Text>

          <div className={styles.ctas}>
            <LinkButton className={styles.cta} href={WHITEPAPER_URL}>
              Whitepaper
            </LinkButton>
            <LinkButton
              className={styles.cta}
              variant="secondary"
              href={WHITEPAPER_URL}
            >
              Whitepaper
            </LinkButton>
          </div>

          <svg
            width="31"
            height="13"
            viewBox="0 0 31 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.scrollDownArrow}
          >
            <path
              d="M16.6291 12.6322L30.075 3.7617C31.7726 2.64182 30.9796 0 28.946 0H2.05406C0.0202788 0 -0.772527 2.64182 0.925017 3.7617L14.3709 12.6322C15.0558 13.0839 15.9443 13.0839 16.6291 12.6322Z"
              fill="#1E87E4"
            />
          </svg>
        </div>
      </Container>

      <Scene offset={60} duration={300} indicators={true} triggerHook={0.5}>
        {(progress: number) => (
          <div>
            <div
              className={styles.mainArtContainer}
              style={{
                transform: `perspective(1000px) translate(-50%, 50%) rotateX(${
                  (1 - progress) * 45
                }deg)`,
              }}
            >
              <Image
                src="/images/main-art.png"
                alt="WhizArt"
                width="1216"
                height="648"
                objectFit="scale-down"
              />
              <div
                className={styles.daVinciContainer}
                style={{
                  top: `${progress * 4}%`,
                  transform: `translateZ(${(1 - progress) * 100}px) rotateX(-${
                    (1 - progress) * 45
                  }deg)`,
                }}
              >
                <Image
                  src="/images/da-vinci.png"
                  alt="WhizArt"
                  width="389"
                  height="236"
                />
              </div>
            </div>
          </div>
        )}
      </Scene>
    </section>
  );
}
