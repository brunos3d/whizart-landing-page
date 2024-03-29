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

      <Navbar className={styles.navbar} sections={sections} />

      <Scene
        offset={50}
        indicators={false}
        triggerHook={0}
        pin
        classToggle={[`.${styles.navbar}`, styles.navbarShow]}
      >
        <div></div>
      </Scene>

      <main className={styles.main}>
        <div className={styles.overflowHidden}>
          <Hero />

          <Partners id="partners" />
        </div>

        <PlayToEarn id="play-to-earn" />

        <Gameplay id="gameplay" />

        <NFT id="nft" />

        <ArtificialIntelligence id="artificial-intelligence" />

        <Roadmap id="roadmap" />

        <Tokenomics id="tokenomics" />

        <Team id="team" />

        <Community id="community" />

        <Footer sections={sections} />
      </main>
    </Controller>
  );
}
