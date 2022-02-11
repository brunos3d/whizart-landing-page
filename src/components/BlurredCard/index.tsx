import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Subtitle, Text, LinkButton } from '@/components';

import styles from './styles.module.css';

export type BlurredCardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
  cta?: {
    url: string;
    text: string;
  };
};

export default function BlurredCard({
  className,
  title,
  description,
  cta,
  ...rest
}: BlurredCardProps) {
  return (
    <div className={cn(styles.card, className)} {...rest}>
      <div className={styles.content}>
        <Subtitle className={styles.title}>{title}</Subtitle>
        <Text className={styles.description}>{description}</Text>
        {cta && (
          <LinkButton className={styles.cta} href={cta.url}>
            {cta.text}
          </LinkButton>
        )}
      </div>
    </div>
  );
}
