import Head from 'next/head';
import Image from 'next/image';

import { SEO } from '@/components';
import { Hero } from './sections';

import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <SEO shouldIndexPage />

      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}
