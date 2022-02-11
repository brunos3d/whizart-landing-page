import { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './styles.module.css';

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary';
};

export default function LinkButton({
  className,
  children,
  href,
  variant = `primary`,
  ...rest
}: LinkButtonProps) {
  return (
    <Link href={href as string} passHref>
      <a className={cn(styles.button, styles[variant], className)} {...rest}>
        {children}
      </a>
    </Link>
  );
}
