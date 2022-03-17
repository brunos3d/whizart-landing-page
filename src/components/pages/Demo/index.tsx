import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import SEO from '@/components/SEO';

import styles from './styles.module.css';

const ArtistRender = dynamic(() => import(`@/components/ArtistRender`), {
  ssr: false,
});

export default function Demo() {
  const [layers, setLayers] = useState<string[]>([]);

  async function randomizeArtist() {
    const response = await fetch(`/api/artists/random`);
    if (!response.ok) return;
    const randomArtistLayers = (await response.json()).layers;
    setLayers(randomArtistLayers);
  }

  useEffect(() => {
    randomizeArtist();
  }, []);

  return (
    <>
      <SEO shouldIndexPage />

      <main className={styles.main}>
        <div className={styles.frame}>
          <ArtistRender className={styles.pixirender} layers={layers} />
          <button className={styles.button} onClick={() => randomizeArtist()}>
            Randomize
          </button>
        </div>
      </main>
    </>
  );
}
