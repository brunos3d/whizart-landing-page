import { HTMLAttributes } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styled from '@emotion/styled';
import { Scene } from 'react-scrollmagic';

import { Container, Subtitle, Text } from '@/components';

import styles from './styles.module.css';

export type RoadmapProps = HTMLAttributes<HTMLElement>;

const UList = styled.ul`
  &:after {
    height: ${({ progress }: { progress: number }) => `${progress * 100}%`};
  }
`;

const milestones = [
  {
    title: `Q3-Q4/2021`,
    checkpoints: [
      {
        title: `Team building`,
        complete: true,
      },
      {
        title: `Concept Development`,
        complete: true,
      },
      {
        title: `AI Validation (Whizzy)`,
        complete: true,
      },
      {
        title: `Visual Identity`,
        complete: true,
      },
    ],
  },
  {
    title: `Q1/2022`,
    checkpoints: [
      {
        title: `Landing Page v1`,
        complete: true,
      },
      {
        title: `Social media and community`,
        complete: true,
      },
      {
        title: `Pre-sale contract audit`,
        complete: false,
      },
      {
        title: `Whitelist Pre-List`,
        complete: false,
      },
    ],
  },
  {
    title: `Q2/2022`,
    checkpoints: [
      {
        title: `Public Sale`,
        complete: false,
      },
      {
        title: `Final contracts audit`,
        complete: false,
      },
      {
        title: `List token on dex`,
        complete: false,
      },
      {
        title: `Demo game on testnet`,
        complete: false,
      },
      {
        title: `List on CoinGecko and CoinMarketCap`,
        complete: false,
      },
      {
        title: `Official Game Launch`,
        complete: false,
      },
    ],
  },
  {
    title: `Q3/2022`,
    checkpoints: [
      {
        title: `Expand team`,
        complete: false,
      },
      {
        title: `Whizzy improvement`,
        complete: false,
      },
      {
        title: `Unlock Creativity Levels`,
        complete: false,
      },
      {
        title: `Consumables`,
        complete: false,
      },
    ],
  },
  {
    title: `Q1/2023`,
    checkpoints: [
      {
        title: `Guilds System`,
        complete: false,
      },
      {
        title: `Open Sea`,
        complete: false,
      },
      {
        title: `Breeding`,
        complete: false,
      },
    ],
  },
  {
    title: `Q2/2023`,
    checkpoints: [
      {
        title: `Scholarship System`,
        complete: false,
      },
      {
        title: `Custom Commission (you input the image)`,
        complete: false,
      },
      {
        title: `Wonders Gameplay`,
        complete: false,
      },
      {
        title: `Whizzy Improvements 2.0`,
        complete: false,
      },
    ],
  },
];

export default function Roadmap({ className, ...rest }: RoadmapProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.stickyContainer}>
          <Subtitle className={styles.subtitle}>Check WhizArt Roadmap</Subtitle>

          <Image
            src="/images/wooden-door.png"
            alt="Wooden door"
            width="375"
            height="375"
          />
        </div>

        <div className={styles.roadmap}>
          <ol className={styles.milestones}>
            {milestones.map(({ title, checkpoints }) => (
              <Scene
                offset={40}
                duration={35 * checkpoints.length}
                indicators={false}
                key={title}
              >
                {(progress: number) => (
                  <li className={styles.milestone}>
                    <Subtitle className={styles.subtitle} as="h5">
                      {title}
                    </Subtitle>
                    <UList className={styles.checkpoints} progress={progress}>
                      {checkpoints.map(({ title, complete }) => (
                        <li className={styles.checkpoint} key={title}>
                          <div
                            className={cn(styles.checkmark, {
                              [styles.disabled]: !complete,
                            })}
                          >
                            <Image
                              src="/icons/check-yellow.svg"
                              alt="Check"
                              width="24"
                              height="24"
                            />
                          </div>
                          <Text className={styles.text}>{title}</Text>
                        </li>
                      ))}
                    </UList>
                  </li>
                )}
              </Scene>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
