import { HTMLAttributes } from 'react';
import cn from 'classnames';

import type { TeamMemberProps } from '@/components/TeamMember';
import { Container, Subtitle, TeamMember } from '@/components';

import styles from './styles.module.css';

export type TeamProps = HTMLAttributes<HTMLElement>;

const members: TeamMemberProps[] = [
  {
    name: `Elton Soares`,
    bio: `Serial entrepreneur who has worked with technology for the last eight years. Founded two startups and was accelerated by Microsoft and ACE, two of the largest startup accelerators in Latin America.`,
    avatarUrl: `/images/team/elton-soares.png`,
    socialUrl: `https://www.linkedin.com/in/elton-a-soares/`,
  },
  {
    name: `Fabio Cury`,
    bio: `Game Designer and Senior Developer for Cool Mini or Not. Has been in the game industry for 7 years and worked on big franchises like Game of Thrones, God of War, and Zombicide.`,
    avatarUrl: `/images/team/fabio-cury.png`,
    socialUrl: `https://www.linkedin.com/in/f%C3%A1bio-cury-hirsch-99b52a83`,
  },
  {
    name: `Felipe Tanso`,
    bio: `Entrepreneur for 10 years, has won several technology awards in Brazil and around the world, including NASA's world competition: NASA space apps.`,
    avatarUrl: `/images/team/felipe-tanso.png`,
    socialUrl: `https://www.linkedin.com/in/felipetanso/`,
  },
  {
    name: `Brenno Serrato`,
    bio: `Senior backend developer and big game enthusiast. He's a former esports athlete who was 14 times Brazil's Rocket League champion. Brenno also worked as a coach and commentator in gaming events.`,
    avatarUrl: `/images/team/brenno-serrato.png`,
    socialUrl: `https://www.linkedin.com/in/brenno-serrato/`,
  },
  {
    name: `Ana Julia Bittencourt`,
    bio: `Backend and blockchain developer. Currently working for a Cryptocurrency exchange in Latin America. Big enthusiast in both gaming and web3 development.`,
    avatarUrl: `/images/team/ana-julia.png`,
    socialUrl: `https://www.linkedin.com/in/anajuliabit/`,
  },
  {
    name: `Pedro Kranz`,
    bio: `PK has been leading as chief of growth for major companies in Brazil for the past 10 years. PK was also part of the founding team in PeixeUrbano and co-founder of Network Brasil, launching successful channels like Desimpedidos.`,
    avatarUrl: `/images/team/pedro-kranz.png`,
    socialUrl: `https://www.linkedin.com/in/pedrokcosta/`,
  },
  {
    name: `Rafaela Pitta`,
    bio: `User Experience Designer Working with world-renowned brands such as Adidas, Activision, Meta, Nestlé, AVEDA, AeroMexico. Nielsen Norman Group UX Certified.`,
    avatarUrl: `/images/team/rafaela-pitta.png`,
    socialUrl: `https://www.linkedin.com/in/rafaelapitta/`,
  },
  {
    name: `Bruno Silva`,
    bio: `Frontend Developer, +7 years as Unity Engine game developer, Tech Lead on +80 hackathons at Shawee, Frontend Developer at Rocketseat. Web3 enthusiast.`,
    avatarUrl: `/images/team/bruno-silva.png`,
    socialUrl: `https://www.linkedin.com/in/brunos3d/`,
  },
  {
    name: `Airton Barbosa`,
    bio: `Plastic arts college dropout and illustration guru. Airton is also a part time skater, part time chef, and a full time learner dedicated to games' concept design and 2D animation.`,
    avatarUrl: `/images/team/airton-barbosa.png`,
    socialUrl: `https://www.linkedin.com/in/oairtinho/`,
  },
  {
    name: `Érica Sena`,
    bio: `Designer and member of the Innovation team at Alpargatas, the world's largest open shoe company. Érica is an award winning professional in both illustration and shoemaking.`,
    avatarUrl: `/images/team/erica-sena.png`,
    socialUrl: `https://www.linkedin.com/in/erica-sena/`,
  },
  {
    name: `Travis`,
    bio: `Content editor, SEO strategist and lifetime gamer. Co-founder of Binance Academy, Travis has been working as a content writer and editor in the crypto space since 2017.`,
    avatarUrl: `/images/team/travis.jpeg`,
    // socialUrl: `https://www.linkedin.com/in/henrique-t-aa9390152/`,
  },
];

export default function Team({ className, ...rest }: TeamProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <Subtitle className={styles.subtitle}>Core Team</Subtitle>

        <ul className={styles.teamMembers}>
          {members.map((member) => (
            <li key={member.name}>
              <TeamMember className={styles.teamMember} {...member} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
