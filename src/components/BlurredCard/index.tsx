import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Subtitle, Paragraph } from '@/components';

import styles from './styles.module.css';

export type BlurredCardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
};

export default function BlurredCard({
  className,
  title,
  description,
  ...rest
}: BlurredCardProps) {
  return (
    <div className={cn(styles.card, className)} {...rest}>
      <Subtitle className={styles.title}>{title}</Subtitle>
      <Paragraph className={styles.description}>{description}</Paragraph>
    </div>
  );
}
