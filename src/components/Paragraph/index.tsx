import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export default function Paragraph({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <p className={cn(styles.paragraph, className)} {...rest}>
      {children}
    </p>
  );
}
