import { HTMLAttributes, useEffect } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import {
  useDisclosureState,
  Disclosure,
  DisclosureContent,
} from 'reakit/Disclosure';

import { Container, LinkButton, Subtitle, Text } from '@/components';

import styles from './styles.module.css';
import { WHITEPAPER_URL } from '@/data/urls';

export type NFTProps = HTMLAttributes<HTMLElement>;

const cards = [
  {
    name: `WhizDoge`,
    url: `/images/cards/marketplace/whizdoge.png`,
    width: `159`,
    height: `229`,
  },
  {
    name: `WhizMoon`,
    url: `/images/cards/marketplace/whizmoon.png`,
    width: `159`,
    height: `229`,
  },
  {
    name: `WhizSky`,
    url: `/images/cards/marketplace/whizsky.png`,
    width: `159`,
    height: `229`,
  },
];

export default function NFT({ className, ...rest }: NFTProps) {
  const dArtists = useDisclosureState({ visible: true });
  const dWorkshop = useDisclosureState();
  const dPaints = useDisclosureState();

  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.headline}>
          <div className={styles.cards}>
            {cards.map(({ name, url, width, height }) => (
              <div className={styles.card} key={name}>
                <Image src={url} alt={name} width={width} height={height} />
              </div>
            ))}
          </div>
          <div className={styles.content}>
            <Image
              src="/icons/chip.svg"
              alt="Chip icon"
              width="48"
              height="48"
            />

            <Subtitle className={styles.subtitle}>Mint real NFT Art</Subtitle>

            <Text className={styles.description}>
              The only game where you can produce art while you play.
              WhizArt&apos;s unique system combines through API a variety of
              image banks and a vast range of art style to produce Art with you
              own NFT characters.
            </Text>
          </div>
        </div>

        <div
          className={cn(styles.entities, {
            [styles.start]: dArtists.visible,
            [styles.middle]: dWorkshop.visible,
            [styles.end]: dPaints.visible,
          })}
        >
          <div className={styles.tabMenu}>
            <Disclosure
              className={styles.dButton}
              {...dArtists}
              onClickCapture={() => {
                dWorkshop.hide();
                dPaints.hide();
              }}
            >
              <Subtitle as="h5">Artists</Subtitle>
            </Disclosure>

            <DisclosureContent className={styles.dContent} {...dArtists}>
              <Text className={styles.dDescription} variant="small">
                There are various types of Artists (all NFTs). The Artists that
                are rarer and have higher creativity earn more $WHIZ and have
                better chances of generating a unique artwork.
              </Text>
              <LinkButton className={styles.dCta} href={WHITEPAPER_URL}>
                Read Whitepaper
              </LinkButton>
            </DisclosureContent>

            <Disclosure
              className={styles.dButton}
              {...dWorkshop}
              onClickCapture={() => {
                dArtists.hide();
                dPaints.hide();
              }}
            >
              <Subtitle as="h5">Workshop</Subtitle>
            </Disclosure>

            <DisclosureContent className={styles.dContent} {...dWorkshop}>
              <Text className={styles.dDescription} variant="small">
                Workshops represent the many places Artists can work. Each
                Workshop is assigned 1 of 5 rarities. The rarer the Workshop,
                the higher the chance of the Artist creating a piece of art.
                Workshops can be used by the player or rented out to other
                players.
              </Text>
              <LinkButton className={styles.dCta} href={WHITEPAPER_URL}>
                Read Whitepaper
              </LinkButton>
            </DisclosureContent>

            <Disclosure
              className={styles.dButton}
              {...dPaints}
              onClickCapture={() => {
                dArtists.hide();
                dWorkshop.hide();
              }}
            >
              <Subtitle as="h5">Paints</Subtitle>
            </Disclosure>

            <DisclosureContent className={styles.dContent} {...dPaints}>
              <Text className={styles.dDescription} variant="small">
                Work in progress...
              </Text>
              <LinkButton className={styles.dCta} href={WHITEPAPER_URL}>
                Read Whitepaper
              </LinkButton>
            </DisclosureContent>
          </div>
          <div className={styles.tabPanel}>
            <DisclosureContent className={styles.dPanelContent} {...dArtists}>
              <span>dArtists</span>
            </DisclosureContent>

            <DisclosureContent className={styles.dPanelContent} {...dWorkshop}>
              <span>dWorkshop</span>
            </DisclosureContent>

            <DisclosureContent className={styles.dPanelContent} {...dPaints}>
              <span>dPaints</span>
            </DisclosureContent>
          </div>
        </div>
      </Container>
    </section>
  );
}
