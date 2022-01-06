import { SEO, SocialBar } from '@/components';
import {
  Navbar,
  Hero,
  PlayToEarn,
  Gameplay,
  Artists,
  ArtificialIntelligence,
  Team,
  Footer,
} from './sections';

import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <SEO shouldIndexPage />

      <Navbar />

      <SocialBar className={styles.socialBar} />

      <main className={styles.main}>
        <Hero />

        <PlayToEarn />

        <Gameplay id="gameplay" />

        <Artists id="nft" />

        <ArtificialIntelligence id="ai" />

        <Team id="team" />
      </main>

      <Footer />
    </>
  );
}
