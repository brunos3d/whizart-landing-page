import { HTMLAttributes } from 'react';
import { Scene } from 'react-scrollmagic';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { sections } from '@/components/pages/Home';

import { WHITEPAPER_URL } from '@/data/urls';
import { Container, Text, Badge, Nav, LinkButton, Banner } from '@/components';

import styles from './styles.module.css';

export type HeroProps = HTMLAttributes<HTMLElement>;

export default function Hero({ className, ...rest }: HeroProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <Nav className={styles.nav} sections={sections} />
      </Container>

      <Banner />

      <Container className={styles.container}>
        <div className={styles.content}>
          <Badge className={styles.badge}>Coming Soon</Badge>

          <Scene offset={-30} duration={50} indicators={false} triggerHook={0}>
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
                  quality={100}
                />
              </h1>
            )}
          </Scene>

          <Text as="h2" className={styles.subtitle}>
            WhizArt is a{` `}
            <Link href="/#play-to-earn">
              <a className={styles.anchor}>play-to-earn</a>
            </Link>
            {` `}game that lets you{` `}
            <Link href="/#nft">
              <a className={styles.anchor}>create unique NFT artworks</a>
            </Link>
            {` `}while you play.
          </Text>

          <div className={styles.ctas}>
            <LinkButton
              className={styles.cta}
              href={WHITEPAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </LinkButton>
            <LinkButton
              className={styles.cta}
              variant="secondary"
              href="/#community"
            >
              Community
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

      <Scene offset={60} duration={300} indicators={false} triggerHook={0.5}>
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
                quality={80}
              />
              <div
                className={styles.daVinciContainer}
                style={{
                  top: `${progress * 4}%`,
                  transform: `translateZ(${(1 - progress) * 100}px) rotateX(-${
                    (1 - progress) * 45
                  }deg)`,
                  filter: `drop-shadow(0px ${(1 - progress) * 100}px ${
                    (1 - progress) * 20
                  }px rgba(0, 0, 0, ${(1 - progress) * 0.5}))`,
                }}
              >
                <Image
                  src="/images/animated/da-vinci.gif"
                  alt="WhizArt"
                  width="389"
                  height="236"
                  quality={80}
                />
              </div>
            </div>
          </div>
        )}
      </Scene>
    </section>
  );
}
