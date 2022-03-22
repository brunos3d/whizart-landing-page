import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { Scene } from 'react-scrollmagic';

import type { SectionLink } from '@/types';

import {
  DISCORD_INVITE_URL,
  TWITTER_COMMUNITY_URL,
  WHITEPAPER_URL,
} from '@/data/urls';
import { Container, Nav, LinkButton } from '@/components';

import styles from './styles.module.css';

export type NavbarProps = HTMLAttributes<HTMLElement> & {
  sections: SectionLink[];
};

export default function Navbar({ className, sections, ...rest }: NavbarProps) {
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

            <Nav className={styles.nav} sections={sections} />

            <div className={styles.buttons}>
              <LinkButton
                className={styles.socialCta}
                variant="secondary"
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="32"
                  height="23"
                  viewBox="0 0 32 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.8082 20.7822C22.6301 21.8226 23.6164 23 23.6164 23C29.6712 22.8083 32 18.8381 32 18.8381C32 10.0216 28.0548 2.87521 28.0548 2.87521C24.1096 -0.0819021 20.3562 0.00022744 20.3562 0.00022744L19.9726 0.438326C24.6301 1.86212 26.7945 3.91567 26.7945 3.91567C23.9452 2.35497 21.1507 1.58832 18.5479 1.28713C16.5753 1.06808 14.6849 1.12284 13.0137 1.34189C12.8702 1.34189 12.7476 1.36276 12.6093 1.38628L12.5479 1.39665C11.589 1.47879 9.26028 1.83474 6.32878 3.12163C5.31508 3.5871 4.71234 3.91567 4.71234 3.91567C4.71234 3.91567 6.98631 1.75259 11.9178 0.328798L11.6438 0.00022744C11.6438 0.00022744 7.89041 -0.0819021 3.94521 2.87521C3.94521 2.87521 0 10.0216 0 18.8381C0 18.8381 2.30138 22.8083 8.35617 23C8.35617 23 9.36987 21.7679 10.1918 20.7274C6.71233 19.6869 5.39727 17.4965 5.39727 17.4965C5.39727 17.4965 5.67124 17.6881 6.16439 17.962C6.19179 17.9893 6.21918 18.0167 6.27397 18.0441C6.31507 18.0715 6.35618 18.092 6.39729 18.1126C6.43837 18.1331 6.47947 18.1536 6.52056 18.181C7.20549 18.5643 7.89042 18.8655 8.52056 19.1119C9.64384 19.55 10.9863 19.9881 12.5479 20.2893C14.6027 20.6726 17.0137 20.8095 19.6438 20.3167C20.9315 20.0977 22.2466 19.7143 23.6164 19.1393C24.5754 18.7834 25.6438 18.2632 26.7671 17.5239C26.7671 17.5239 25.3973 19.7691 21.8082 20.7822ZM8.08221 13.2525C8.08221 11.5823 9.31508 10.2132 10.8767 10.2132C12.4384 10.2132 13.6986 11.5823 13.6712 13.2525C13.6712 14.9227 12.4384 16.2917 10.8767 16.2917C9.34247 16.2917 8.08221 14.9227 8.08221 13.2525ZM18.0822 13.2525C18.0822 11.5823 19.3151 10.2132 20.8767 10.2132C22.4384 10.2132 23.6712 11.5823 23.6712 13.2525C23.6712 14.9227 22.4384 16.2917 20.8767 16.2917C19.3425 16.2917 18.0822 14.9227 18.0822 13.2525Z"
                    fill="#9B6F54"
                  />
                </svg>
              </LinkButton>

              <LinkButton
                className={styles.socialCta}
                variant="secondary"
                href={TWITTER_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="32"
                  height="26"
                  viewBox="0 0 32 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 3C30.8 3.6 29.6 3.8 28.2 4C29.6 3.2 30.6 2 31 0.4C29.8 1.2 28.4 1.6 26.8 2C25.6 0.8 23.8 0 22 0C17.8 0 14.6 4 15.6 8C10.2 7.8 5.4 5.2 2 1.2C0.2 4.2 1.2 8 4 10C3 10 2 9.6 1 9.2C1 12.2 3.2 15 6.2 15.8C5.2 16 4.2 16.2 3.2 16C4 18.6 6.4 20.6 9.4 20.6C7 22.4 3.4 23.4 0 23C3 24.8 6.4 26 10 26C22.2 26 29 15.8 28.6 6.4C30 5.6 31.2 4.4 32 3Z"
                    fill="#9B6F54"
                  />
                </svg>
              </LinkButton>

              <LinkButton
                className={styles.cta}
                variant="secondary"
                href={WHITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Whitepaper
              </LinkButton>
            </div>
          </Container>
        )}
      </Scene>
    </nav>
  );
}
