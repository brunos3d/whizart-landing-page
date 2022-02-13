import { HTMLAttributes, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { Button } from 'reakit';

import StorageKeys from '@/enums/StorageKeys';

import styles from './styles.module.css';

export type BannerProps = HTMLAttributes<HTMLElement>;

export default function Banner({ className, ...rest }: BannerProps) {
  const [showBanner, setShowBanner] = useState(
    typeof window !== `undefined`
      ? localStorage.getItem(StorageKeys.ShowBanner) !== `false`
      : true,
  );

  function handleClose() {
    localStorage.setItem(StorageKeys.ShowBanner, `false`);
    setShowBanner(false);
  }

  return (
    <div className={cn(styles.banner, className)} {...rest}>
      {showBanner && (
        <div className={styles.innerBanner}>
          <Link href="/#partners">
            <a className={styles.link}>
              <div className={styles.badge}>New</div>

              <span className={styles.text}>
                From the advisors of Bomb Crypto.
              </span>

              <svg
                className={styles.arrowRight}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 13.5L11.25 9L6.75 4.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Link>

          <Button className={styles.closeButton} onClick={() => handleClose()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#E1E1E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#E1E1E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      )}
    </div>
  );
}
