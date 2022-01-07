import { SEO, SocialBar } from '@/components';
import {
  Navbar,
  Hero,
  PlayToEarn,
  Gameplay,
  Artists,
  ArtificialIntelligence,
  Tokenomics,
  Team,
  Footer,
} from './sections';

import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <SEO shouldIndexPage />

      <Navbar />

      <div className={styles.socialBarContainer}>
        <SocialBar direction="vertical" />
      </div>

      <main className={styles.main}>
        <Hero />

        <PlayToEarn />

        <Gameplay id="gameplay" />

        <Artists id="nft" />

        <ArtificialIntelligence id="ai" />

        <Tokenomics id="tokenomics" />

        <Team id="team" />
      </main>

      <Footer />
    </>
  );
}
