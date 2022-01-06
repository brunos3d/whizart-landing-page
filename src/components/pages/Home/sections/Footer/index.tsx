import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Container } from '@/components';

import styles from './styles.module.css';

export type FooterProps = HTMLAttributes<HTMLElement>;

export default function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer className={cn(styles.footer, className)} {...rest}>
      <Container className={styles.container}>
        <span className={styles.copyright}>© WhizArt 2021</span>
        <span className={styles.privacy}>Contact us Privacy &amp; cookies</span>
      </Container>
    </footer>
  );
}
