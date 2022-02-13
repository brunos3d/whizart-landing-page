import { Controller, Scene } from 'react-scrollmagic';

import type { SectionLink } from '@/types';

import { SEO, Navbar, Footer } from '@/components';
import {
  Hero,
  Team,
  Partners,
  PlayToEarn,
  Gameplay,
  NFT,
  ArtificialIntelligence,
  Roadmap,
  Tokenomics,
  Community,
} from './sections';

import styles from './styles.module.css';

export const sections: SectionLink[] = [
  {
    title: `Gameplay`,
    url: `/#gameplay`,
  },
  {
    title: `NFT`,
    url: `/#nft`,
  },
  {
    title: `Artificial Intelligence`,
    url: `/#artificial-intelligence`,
  },
  {
    title: `Roadmap`,
    url: `/#roadmap`,
  },
  {
    title: `Tokenomics`,
    url: `/#tokenomics`,
  },
  {
    title: `Team`,
    url: `/#team`,
  },
];

export default function Home() {
  return (
    <Controller>
      <SEO shouldIndexPage />

      {/* <Scene
        offset={50}
        indicators={false}
        triggerHook={0}
        pin
        classToggle={[`.${styles.navbar}`, styles.navbarShow]}
      >
        <Navbar className={styles.navbar} sections={sections} />
      </Scene> */}

      <main className={styles.main}>
        <Hero />

        <Partners id="partners" />

        <PlayToEarn id="play-to-earn" />

        {/* <Gameplay id="gameplay" />

        <NFT id="nft" />

        <ArtificialIntelligence id="artificial-intelligence" />

        <Roadmap id="roadmap" />

        <Tokenomics id="tokenomics" />

        <Team id="team" />

        <Community id="community" />

        <Footer sections={sections} /> */}
      </main>
    </Controller>
  );
}
