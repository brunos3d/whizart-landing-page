import { AnchorHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function LinkButton({
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a className={cn(styles.button, className)} {...rest}>
      {children}
    </a>
  );
}
