import { HTMLAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import type { SectionLink } from '@/types';

import animated from '@/styles/animated/styles.module.css';
import styles from './styles.module.css';

export type NavProps = HTMLAttributes<HTMLElement> & {
  sections: SectionLink[];
};

export default function Nav({ className, sections, ...rest }: NavProps) {
  return (
    <ul className={cn(styles.links, className)} {...rest}>
      {sections.map(({ title, url }) => (
        <li key={title}>
          <Link href={url}>
            <a className={cn(styles.anchor, animated.underline)}>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
