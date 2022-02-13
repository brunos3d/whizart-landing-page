import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Container } from '@/components';

import styles from './styles.module.css';

export type TEMPLATEProps = HTMLAttributes<HTMLElement>;

export default function TEMPLATE({ className, ...rest }: TEMPLATEProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}></Container>
    </section>
  );
}
