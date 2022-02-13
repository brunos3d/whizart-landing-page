import { HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import { useTabState, Tab, TabList, TabPanel } from 'reakit/Tab';

import { NASA_PROJECT_AWARD_URL, WHITEPAPER_URL } from '@/data/urls';
import { Container, LinkButton, Subtitle, Text } from '@/components';

import styles from './styles.module.css';

export type ArtificialIntelligenceProps = HTMLAttributes<HTMLElement>;

export default function ArtificialIntelligence({
  className,
  ...rest
}: ArtificialIntelligenceProps) {
  const tab = useTabState();
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.headline}>
          <div className={styles.content}>
            <Subtitle className={styles.subtitle}>
              Artificial Intelligence
            </Subtitle>
            <Text className={styles.description}>
              Whizzy, our NASA award winning A.I, can produce unique NFT
              artworks based on your own Artists and Workshops
            </Text>
          </div>

          <Link href={NASA_PROJECT_AWARD_URL}>
            <a
              className={styles.nasaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/logos/nasa.svg"
                  alt="NASA logo"
                  width="142"
                  height="39"
                />
              </div>
              <span className={styles.nasaText}>
                Space Apps Challenge <br />
                Award Winning
              </span>
              <div>
                <Image
                  src="/icons/arrow-up-right.svg"
                  alt="Arrow up right"
                  width="32"
                  height="32"
                />
              </div>
            </a>
          </Link>
        </div>

        <div className={styles.tabMenu}>
          <Subtitle className={styles.subtitle} as="h4">
            How it works
          </Subtitle>

          <TabList
            {...tab}
            className={cn(styles.tabList, {
              [styles.start]: tab.selectedId === `artist`,
              [styles.middle]: tab.selectedId === `workshop`,
              [styles.end]: tab.selectedId === `artwork`,
            })}
            aria-label="Artificial Intelligence Features"
          >
            <Tab {...tab} className={styles.tab} id="artist">
              <Text className={styles.text} as="span">
                1. Artist
              </Text>
            </Tab>

            <div className={styles.chevron}>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron right"
                width="24"
                height="24"
              />
            </div>

            <Tab {...tab} className={styles.tab} id="workshop">
              <Text className={styles.text} as="span">
                2. Workshop
              </Text>
            </Tab>

            <div className={styles.chevron}>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron right"
                width="24"
                height="24"
              />
            </div>

            <Tab {...tab} className={styles.tab} id="artwork">
              <Text className={styles.text} as="span">
                3. Artwork
              </Text>
            </Tab>
          </TabList>
        </div>

        <div className={styles.tabPanelContainer}>
          <TabPanel {...tab} className={styles.tabPanel}>
            {tab.selectedId === `artist` && (
              <>
                <div className={styles.panelImage}>
                  <Image
                    src="/images/the-great-wave-off-kanagawa.jpg"
                    alt="The Great Wave off Kanagawa"
                    width="492"
                    height="373"
                  />
                </div>
                <div className={styles.tabPanelContent}>
                  <Subtitle className={styles.subtitle} as="h5">
                    Artist
                  </Subtitle>

                  <Text className={styles.description}>
                    Has a unique and recognizable style that will be imprinted
                    to the Artwork.
                  </Text>

                  <LinkButton className={styles.cta} href={WHITEPAPER_URL}>
                    Read Whitepaper
                  </LinkButton>
                </div>
              </>
            )}
          </TabPanel>
          <TabPanel {...tab} className={styles.tabPanel}>
            {tab.selectedId === `workshop` && (
              <>
                <div className={styles.panelImage}>
                  <Image
                    src="/images/asteroid-vesta.jpg"
                    alt="The Vesta 4 asteroid"
                    width="492"
                    height="373"
                  />
                </div>
                <div className={styles.tabPanelContent}>
                  <Subtitle className={styles.subtitle} as="h5">
                    Workshop
                  </Subtitle>

                  <Text className={styles.description}>
                    The location and source of inspiration for the Artist. It
                    determines the theme of the artwork (landscape, portrait,
                    meme, etc...).
                  </Text>

                  <LinkButton className={styles.cta} href={WHITEPAPER_URL}>
                    Read Whitepaper
                  </LinkButton>
                </div>
              </>
            )}
          </TabPanel>
          <TabPanel {...tab} className={styles.tabPanel}>
            {tab.selectedId === `artwork` && (
              <>
                <div className={styles.panelImage}>
                  <Image
                    src="/images/artai-vesta-output.jpg"
                    alt="The Great Wave off Kanagawa"
                    width="492"
                    height="373"
                  />
                </div>
                <div className={styles.tabPanelContent}>
                  <Subtitle className={styles.subtitle} as="h5">
                    Artwork
                  </Subtitle>

                  <Text className={styles.description}>
                    Has a unique and recognizable style that will be imprinted
                    to the Artwork.
                  </Text>

                  <LinkButton className={styles.cta} href={WHITEPAPER_URL}>
                    Read Whitepaper
                  </LinkButton>
                </div>
              </>
            )}
          </TabPanel>
        </div>
      </Container>
    </section>
  );
}
