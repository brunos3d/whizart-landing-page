import { createElement, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export type SubtitleProps = HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
};

export default function Subtitle({
  as = `h3`,
  className,
  ...rest
}: SubtitleProps) {
  return createElement(as, {
    className: cn(styles.subtitle, styles[as], className),
    ...rest,
  });
}
