import Image from 'next/image';
import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Container, Subtitle } from '@/components';

import styles from './styles.module.css';

export type TokenomicsProps = HTMLAttributes<HTMLElement>;

export default function Tokenomics({ className, ...rest }: TokenomicsProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <table className={styles.table}>
            <tbody className={styles.tbody}>
              <tr className={styles.trow}>
                <td className={styles.tdata}>Pre-Sale</td>
                <td className={styles.tdata}>2%</td>
                <td className={styles.tdata}>12 months vesting</td>
              </tr>
              <tr>
                <td className={styles.tdata}>Public Sale</td>
                <td className={styles.tdata}>8%</td>
              </tr>
              <tr>
                <td className={styles.tdata}>Liquidity</td>
                <td className={styles.tdata}>5%</td>
                <td className={styles.tdata}>18 months vesting</td>
              </tr>
              <tr>
                <td className={styles.tdata}>Play To Earn</td>
                <td className={styles.tdata}>40%</td>
              </tr>
              <tr>
                <td className={styles.tdata}>Staking Rewards</td>
                <td className={styles.tdata}>10%</td>
                <td className={styles.tdata}>18 months vesting</td>
              </tr>
              <tr>
                <td className={styles.tdata}>Team</td>
                <td className={styles.tdata}>13%</td>
                <td className={styles.tdata}>18 months vesting</td>
              </tr>
              <tr>
                <td className={styles.tdata}>Development</td>
                <td className={styles.tdata}>5%</td>
                <td className={styles.tdata}>18 months vesting</td>
              </tr>
              <tr>
                <td className={styles.tdata}>Partners/Advisor</td>
                <td className={styles.tdata}>4%</td>
                <td className={styles.tdata}>18 months vesting</td>
              </tr>
              <tr>
                <td className={styles.tdata}>Treasury</td>
                <td className={styles.tdata}>5%</td>
                <td className={styles.tdata}>18 months vesting</td>
              </tr>
              <tr>
                <td className={styles.tdata}>Marketing/Listing</td>
                <td className={styles.tdata}>8%</td>
                <td className={styles.tdata}>18 months vesting</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.backgroundContainer}>
          <Subtitle className={styles.subtitle}>Tokenomics</Subtitle>
          <Image
            src="/images/painting-frame.png"
            alt="Drawing of a painting frame"
            width={947}
            height={1213}
          />
        </div>
      </Container>
    </section>
  );
}
