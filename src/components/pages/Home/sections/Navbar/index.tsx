import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { Container } from '@/components';

import styles from './styles.module.css';

export type NavbarProps = HTMLAttributes<HTMLElement>;

export default function Navbar({ className, ...rest }: NavbarProps) {
  return (
    <nav className={cn(styles.navbar, className)} {...rest}>
      <Container className={styles.container}>
        <Link href="/">
          <a className={styles.logoContainer}>
            <Image
              src="/images/whizart-logo.png"
              alt="The WhizArt logo"
              width={194}
              height={53}
            />
          </a>
        </Link>

        <div className={styles.navItemsSroll}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link href="#gameplay">
                <a className={styles.navLink}>Gameplay</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#nft">
                <a className={styles.navLink}>NFT</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#ai">
                <a className={styles.navLink}>Artificial Intelligence</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#tokenomics">
                <a className={styles.navLink}>Tokenomics</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#team">
                <a className={styles.navLink}>Team</a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
