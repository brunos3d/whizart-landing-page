import { Controller, Scene } from 'react-scrollmagic';

import { SEO, Navbar } from '@/components';
import {
  Hero,
  Team,
  Partners,
  PlayToEarn,
  Gameplay,
  NFT,
  ArtificialIntelligence,
  Roadmap,
} from './sections';

import styles from './styles.module.css';

export default function Home() {
  return (
    <Controller>
      <SEO shouldIndexPage />

      <Scene
        offset={50}
        indicators={false}
        triggerHook={0}
        pin
        classToggle={[`.${styles.navbar}`, styles.navbarShow]}
      >
        <Navbar className={styles.navbar} />
      </Scene>

      <main className={styles.main}>
        <Hero />

        <Partners />

        <PlayToEarn />

        <Gameplay id="gameplay" />

        <NFT id="nft" />

        <ArtificialIntelligence id="artificial-intelligence" />

        <Roadmap id="roadmap" />

        <Team id="team" />
      </main>
    </Controller>
  );
}
