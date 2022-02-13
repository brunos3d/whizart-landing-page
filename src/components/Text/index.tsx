import { createElement, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export type TextProps = HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'small' | 'default';
};

export default function Text({
  as = `p`,
  variant = `default`,
  className,
  ...rest
}: TextProps) {
  return createElement(as, {
    className: cn(styles.text, styles[variant], className),
    ...rest,
  });
}
