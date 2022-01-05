import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export type TEMPLATEProps = HTMLAttributes<HTMLElement>;

export default function TEMPLATE({ className, ...rest }: TEMPLATEProps) {
  return <div className={cn(styles.component, className)} {...rest}></div>;
}
