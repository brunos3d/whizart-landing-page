import { HTMLAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import type { SectionLink } from '@/types';

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
            <a className={styles.anchor}>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
