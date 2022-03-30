import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import SEO from '@/components/SEO';

import type { ArtistLayer } from '@/types';

import styles from './styles.module.css';

const ArtistRender = dynamic(() => import(`@/components/ArtistRender`), {
  ssr: false,
});

export default function Demo() {
  const [artistLayers, setArtistLayers] = useState<ArtistLayer[]>([]);

  async function randomizeArtist() {
    try {
      const response = await fetch(
        `https://1ermj8xtj3.execute-api.us-east-2.amazonaws.com/generate-artist`,
      );
      if (!response.ok) return;
      const randomArtistLayers = (await response.json()) as ArtistLayer[];
      setArtistLayers(randomArtistLayers);
    } catch {}
  }

  useEffect(() => {
    randomizeArtist();
  }, []);

  return (
    <>
      <SEO shouldIndexPage />

      <main className={styles.main}>
        <div className={styles.frame}>
          <ArtistRender className={styles.pixirender} layers={artistLayers} />
          <button className={styles.button} onClick={() => randomizeArtist()}>
            Randomize
          </button>
        </div>
      </main>
    </>
  );
}
