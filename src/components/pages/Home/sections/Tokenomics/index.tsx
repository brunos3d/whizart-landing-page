import { HTMLAttributes } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { WHITEPAPER_URL } from '@/data/urls';
import { Container, Subtitle, Text, LinkButton } from '@/components';

import styles from './styles.module.css';

export type TokenomicsProps = HTMLAttributes<HTMLElement>;

const pools = [
  {
    name: `Play to Earn`,
    amount: `33%`,
    color: `#E13C36`,
  },
  {
    name: `Team`,
    amount: `15%`,
    color: `#498346`,
  },
  {
    name: `Staking`,
    amount: `10%`,
    color: `#C18D66`,
  },
  {
    name: `Marketing`,
    amount: `10%`,
    color: `#F3D331`,
  },
  {
    name: `Liquidity`,
    amount: `10%`,
    color: `#81AEB3`,
  },
  {
    name: `Private sale`,
    amount: `8%`,
    color: `#EC9836`,
  },
  {
    name: `Seed/Advisor`,
    amount: `5%`,
    color: `#B0D552`,
  },
  {
    name: `Treasury`,
    amount: `5%`,
    color: `#367CEC`,
  },
  {
    name: `Public sale`,
    amount: `4%`,
    color: `#8136EC`,
  },
];

export default function Tokenomics({ className, ...rest }: TokenomicsProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.frameBackgroundContainer}>
            <Image
              src="/images/backgrounds/vertical-frame.png"
              alt="Background"
              layout="fill"
            />
          </div>

          <Subtitle className={styles.subtitle}>Tokenomics</Subtitle>

          <Text className={styles.description}>
            We see our players as serious investors and therefore we have looked
            for the best professionals in the Southeast Asia market to help us
            build this tokenomics.
          </Text>

          <ul className={styles.pools}>
            {pools.map(({ name, amount, color }) => (
              <li className={styles.pool} key={name}>
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.14397 10.6123C3.61143 10.6123 0 7.31469 0 4.74759C0 2.03432 2.09401 0 5.02693 0C7.91589 0 9.49526 1.9336 9.49526 4.74759C9.49526 6.05982 9.34983 7.26848 9.00968 8.24183C8.50467 9.68691 7.55436 10.6123 6.14397 10.6123ZM32.9935 5.03356C34.408 7.52327 33.9707 9.52914 32.1239 13.0746C31.0105 15.2119 30.7199 15.9209 30.7199 16.7563C30.7199 17.4997 31.4236 18.3099 33.2266 19.6758C33.3264 19.7515 33.4313 19.8303 33.5613 19.9277C33.6278 19.9776 33.7312 20.0549 33.903 20.1835C36.859 22.3975 37.981 23.6386 37.981 25.6929C37.981 31.7552 35.3401 37.6142 30.2408 37.9781C27.4545 38.1769 25.7744 37.0323 23.2757 34.1038C23.1692 33.979 22.8091 33.5545 22.7631 33.5005C21.0406 31.4763 20.0293 30.5887 18.6231 30.0992C17.1558 29.5884 15.9564 29.7299 13.234 30.5079C12.1251 30.8248 11.6655 30.9469 11.0464 31.0722C8.71145 31.5448 6.80946 31.2865 4.9375 29.9544C2.86261 28.4777 2.5479 26.4938 3.79381 24.4969C4.66984 23.0928 6.23046 21.7238 8.54088 20.1259C9.04174 19.7795 9.55593 19.4367 10.204 19.0141C10.2545 18.9811 11.3851 18.2475 11.6731 18.0577C12.7968 17.3171 13.3733 15.8873 14.2649 12.1915L14.2796 12.1304C14.8313 9.84325 15.1141 8.85213 15.6045 7.74909C16.3089 6.16498 17.2473 5.07955 18.5754 4.5482C21.7869 3.2633 23.9046 2.58117 26.0679 2.31381C29.2409 1.92164 31.6691 2.70251 32.9935 5.03356Z"
                    fill={color || `#E13C36`}
                  />
                </svg>

                <Text className={styles.poolDescription}>
                  {amount} | {name}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.palette}>
          <div className={styles.paletteContainer}>
            <Image
              src="/images/palette.png"
              alt="Palette"
              width="590"
              height="503"
              objectFit="contain"
            />
          </div>

          <LinkButton className={styles.cta} href={WHITEPAPER_URL}>
            Read Whitepaper
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
