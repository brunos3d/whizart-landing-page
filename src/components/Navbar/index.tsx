import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { Scene } from 'react-scrollmagic';

import { WHITEPAPER_URL } from '@/data/urls';
import { Container, Nav, LinkButton } from '@/components';

import styles from './styles.module.css';

export type NavbarProps = HTMLAttributes<HTMLElement>;

export default function Navbar({ className, ...rest }: NavbarProps) {
  return (
    <nav className={cn(styles.navbar, className)} {...rest}>
      <Scene offset={120} duration={75} indicators={false} triggerHook={0}>
        {(progress: number) => (
          <Container className={styles.container}>
            <div
              style={{
                transform: `translateY(-${(1 - progress) * 80}px)`,
                opacity: progress,
              }}
            >
              <Link href="/#">
                <a>
                  <Image
                    src="/logos/whizart.png"
                    alt="WhizArt"
                    width="200"
                    height="58"
                  />
                </a>
              </Link>
            </div>

            <Nav className={styles.nav} />

            <LinkButton
              className={styles.cta}
              variant="secondary"
              href={WHITEPAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </LinkButton>
          </Container>
        )}
      </Scene>
    </nav>
  );
}
