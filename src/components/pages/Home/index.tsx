import { Controller } from 'react-scrollmagic';

import { SEO } from '@/components';
import { Hero, Team } from './sections';

import styles from './styles.module.css';

export default function Home() {
  return (
    <Controller>
      <SEO shouldIndexPage />

      <main className={styles.main}>
        <Hero />

        <Team id="team" />
      </main>
    </Controller>
  );
}
