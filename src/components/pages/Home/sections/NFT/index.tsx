import { HTMLAttributes } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import {
  useDisclosureState,
  Disclosure,
  DisclosureContent,
} from 'reakit/Disclosure';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Grid, Navigation, Pagination } from 'swiper';

import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { WHITEPAPER_URL } from '@/data/urls';
import { Container, LinkButton, Subtitle, Text } from '@/components';

import styles from './styles.module.css';

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

const workshops = [
  {
    name: `Garden`,
    url: `/images/workshops/garden.png`,
    width: `592`,
    height: `340`,
  },
  {
    name: `Office`,
    url: `/images/workshops/office.png`,
    width: `592`,
    height: `340`,
  },
  {
    name: `Circuit`,
    url: `/images/workshops/circuit.png`,
    width: `592`,
    height: `340`,
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

        <div className={styles.entities}>
          <div
            className={cn(styles.tabMenu, {
              [styles.start]: dArtists.visible,
              [styles.middle]: dWorkshop.visible,
              [styles.end]: dPaints.visible,
            })}
          >
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
              <LinkButton
                className={styles.dCta}
                href={WHITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <LinkButton
                className={styles.dCta}
                href={WHITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <LinkButton
                className={styles.dCta}
                href={WHITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Whitepaper
              </LinkButton>
            </DisclosureContent>
          </div>
          <div className={styles.tabPanel}>
            <DisclosureContent className={styles.dPanelContent} {...dArtists}>
              <Swiper
                grabCursor
                slidesPerView={3}
                grid={{
                  rows: 2,
                  fill: `row`,
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Grid, Navigation, Pagination]}
                className={styles.artistsSwiper}
              >
                {new Array(9).fill(0).map((_, index) => (
                  <SwiperSlide
                    className={styles.artistsSlide}
                    key={index.toString()}
                  >
                    <Image
                      src={`/images/artists/${index + 1}.png`}
                      alt={`Artist ${index + 1}`}
                      width="110"
                      height="192"
                      objectFit="contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </DisclosureContent>

            <DisclosureContent className={styles.dPanelContent} {...dWorkshop}>
              <Swiper
                spaceBetween={30}
                loop
                grabCursor
                navigation
                centeredSlides
                effect="creative"
                creativeEffect={{
                  prev: {
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: [`100%`, 0, 0],
                  },
                }}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, EffectCreative, Navigation, Pagination]}
                className={styles.workshopSwiper}
              >
                {workshops.map(({ name, url, width, height }) => (
                  <SwiperSlide className={styles.workshopSlide} key={name}>
                    <Image src={url} alt={name} width={width} height={height} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </DisclosureContent>

            {/* <DisclosureContent className={styles.dPanelContent} {...dPaints}>
              <span>dPaints</span>
            </DisclosureContent> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
