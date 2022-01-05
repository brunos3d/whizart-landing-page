import { SEO, SocialBar } from '@/components';
import { Navbar, Hero, PlayToEarn } from './sections';

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
      </main>
    </>
  );
}
