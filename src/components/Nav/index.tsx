import { HTMLAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './styles.module.css';

export type NavProps = HTMLAttributes<HTMLElement>;

export default function Nav({ className, ...rest }: NavProps) {
  return (
    <ul className={cn(styles.links, className)} {...rest}>
      <li>
        <Link href="#nft">
          <a className={styles.anchor}>NFT</a>
        </Link>
      </li>
      <li>
        <Link href="#gameplay">
          <a className={styles.anchor}>Gameplay</a>
        </Link>
      </li>
      <li>
        <Link href="#artificial-intelligence">
          <a className={styles.anchor}>Artificial Intelligence</a>
        </Link>
      </li>
      <li>
        <Link href="#tokenomics">
          <a className={styles.anchor}>Tokenomics</a>
        </Link>
      </li>
      <li>
        <Link href="#roadmap">
          <a className={styles.anchor}>Roadmap</a>
        </Link>
      </li>
      <li>
        <Link href="#team">
          <a className={styles.anchor}>Team</a>
        </Link>
      </li>
    </ul>
  );
}
