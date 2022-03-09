import { HTMLAttributes } from 'react';
import cn from 'classnames';

import type { TeamMemberProps } from '@/components/TeamMember';
import { Container, Subtitle, TeamMember } from '@/components';

import styles from './styles.module.css';

export type TeamProps = HTMLAttributes<HTMLElement>;

const mainTeamMembers: TeamMemberProps[] = [
  {
    name: `Elton Soares`,
    bio: `Serial entrepreneur who has worked with technology for the last eight years. Founded two startups and was accelerated by Microsoft and ACE, two of the largest startup accelerators in Latin America.`,
    avatarUrl: `/images/team/elton-soares.webp`,
    socialUrl: `https://www.linkedin.com/in/elton-a-soares/`,
  },
  {
    name: `Fabio Cury`,
    bio: `Game Designer and Senior Developer for Cool Mini or Not. Has been in the game industry for 7 years and worked on big franchises like Game of Thrones, God of War, and Zombicide.`,
    avatarUrl: `/images/team/fabio-cury.webp`,
    socialUrl: `https://www.linkedin.com/in/f%C3%A1bio-cury-hirsch-99b52a83`,
  },
  {
    name: `Felipe Tanso`,
    bio: `Entrepreneur for 10 years, has won several technology awards in Brazil and around the world, including NASA's world competition: NASA space apps.`,
    avatarUrl: `/images/team/felipe-tanso.webp`,
    socialUrl: `https://www.linkedin.com/in/felipetanso/`,
  },
  {
    name: `Brenno Serrato`,
    bio: `Senior backend developer and big game enthusiast. He's a former esports athlete who was 14 times Brazil's Rocket League champion. Brenno also worked as a coach and commentator in gaming events.`,
    avatarUrl: `/images/team/brenno-serrato.webp`,
    socialUrl: `https://www.linkedin.com/in/brenno-serrato/`,
  },
  {
    name: `Ana Julia Bittencourt`,
    bio: `Backend and blockchain developer. Currently working for a Cryptocurrency exchange in Latin America. Big enthusiast in both gaming and web3 development.`,
    avatarUrl: `/images/team/ana-julia.webp`,
    socialUrl: `https://www.linkedin.com/in/anajuliabit/`,
  },
  {
    name: `Pedro Kranz`,
    bio: `PK has been leading as chief of growth for major companies in Brazil for the past 10 years. PK was also part of the founding team in PeixeUrbano and co-founder of Network Brasil, launching successful channels like Desimpedidos.`,
    avatarUrl: `/images/team/pedro-kranz.webp`,
    socialUrl: `https://www.linkedin.com/in/pedrokcosta/`,
  },
  {
    name: `Bruno Silva`,
    bio: `Frontend Developer, Community Expert, +7 years as Unity Engine game developer, Tech Lead on +80 hackathons at Shawee, Frontend Developer at Rocketseat. Web3 enthusiast.`,
    avatarUrl: `/images/team/bruno-silva.webp`,
    socialUrl: `https://www.linkedin.com/in/brunos3d/`,
  },
  {
    name: `Airton Barbosa`,
    bio: `Plastic arts college dropout and illustration guru. Airton is also a part time skater, part time chef, and a full time learner dedicated to games' concept design and 2D animation.`,
    avatarUrl: `/images/team/airton-barbosa.webp`,
    socialUrl: `https://www.linkedin.com/in/oairtinho/`,
  },
  {
    name: `Érica Sena`,
    bio: `Designer and member of the Innovation team at Alpargatas, the world's largest open shoe company. Érica is an award winning professional in both illustration and shoemaking.`,
    avatarUrl: `/images/team/erica-sena.webp`,
    socialUrl: `https://www.linkedin.com/in/erica-sena/`,
  },
  {
    name: `Raíssa Jensen`,
    bio: `Business specialist degree from Fundação Dom Cabral and mentor of final projects for ESPM social communication students. Currently working in marketing and supply chain for a toy company.`,
    avatarUrl: `/images/team/raissa-jensen.webp`,
    socialUrl: `https://www.linkedin.com/in/raissa-jensen-3b4106b0/`,
  },
  {
    name: `Travis`,
    bio: `Content editor, SEO strategist and lifetime gamer. Co-founder of Binance Academy, Travis has been working as a content writer and editor in the crypto space since 2017.`,
    avatarUrl: `/images/team/travis.webp`,
    // socialUrl: `https://www.linkedin.com/in/henrique-t-aa9390152/`,
  },
];

const marketingTeamMembers = [
  {
    name: `Noah Le`,
    bio: `Working at BFRI Group and Dealrms. 6 years of experience in marketing, and 2+ years of experience working in the Crypto sector with the positions of CM, BD and marketing team leader.`,
    avatarUrl: `/images/team/noah.webp`,
    socialUrl: `https://www.linkedin.com/in/raissa-jensen-3b4106b0/`,
  },
  {
    name: `Lucas Barton`,
    bio: `4 years of experience in marketing, and 2+ years of experience in the Cryptocurrency sector.`,
    avatarUrl: `/images/team/lucas-barton.webp`,
    socialUrl: `https://www.linkedin.com/in/raissa-jensen-3b4106b0/`,
  },
];

export default function Team({ className, ...rest }: TeamProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <Subtitle className={styles.subtitle}>The WhizArt Team</Subtitle>

        <ul className={styles.teamMembers}>
          {mainTeamMembers.map((member) => (
            <li key={member.name}>
              <TeamMember className={styles.teamMember} {...member} />
            </li>
          ))}
        </ul>

        <Subtitle className={styles.teamTitle} as="h5">
          Marketing
        </Subtitle>

        <ul className={styles.teamMembers}>
          {marketingTeamMembers.map((member) => (
            <li key={member.name}>
              <TeamMember className={styles.teamMember} {...member} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
