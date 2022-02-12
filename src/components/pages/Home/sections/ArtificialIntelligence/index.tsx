import { HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import { useTabState, Tab, TabList, TabPanel } from 'reakit/Tab';

import { NASA_PROJECT_AWARD } from '@/data/urls';
import { Container, Subtitle, Text } from '@/components';

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
              Artificial Inteligence
            </Subtitle>
            <Text className={styles.description}>
              Whizzy, our NASA award winning A.I, can produce unique NFT
              artworks based on three inputs.
            </Text>
          </div>

          <Link href={NASA_PROJECT_AWARD}>
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
              <Subtitle className={styles.subtitle} as="h5">
                1. Artist
              </Subtitle>
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
              <Subtitle className={styles.subtitle} as="h5">
                2. Workshop
              </Subtitle>
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
              <Subtitle className={styles.subtitle} as="h5">
                3. Artwork
              </Subtitle>
            </Tab>
          </TabList>
        </div>

        <div className={styles.tabPanel}>
          <TabPanel {...tab}>
            {tab.selectedId === `artist` && `Artist`}
          </TabPanel>
          <TabPanel {...tab}>
            {tab.selectedId === `workshop` && `Workshop`}
          </TabPanel>
          <TabPanel {...tab}>
            {tab.selectedId === `artwork` && `Artwork`}
          </TabPanel>
        </div>
      </Container>
    </section>
  );
}
