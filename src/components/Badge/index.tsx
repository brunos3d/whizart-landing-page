import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export type BadgeProps = HTMLAttributes<HTMLElement> & {
  size?: 'small' | 'default';
  color?: string;
};

export default function Badge({
  className,
  children,
  size = `default`,
  color = `var(--spicy-mix)`,
  style,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(styles.badge, styles[size], className)}
      style={{ color, borderColor: color, ...style }}
      {...rest}
    >
      {children}
    </span>
  );
}
