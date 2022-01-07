import Image from 'next/image';
import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export type TeamMemberProps = {
  name: string;
  bio: string;
  avatarUrl: string;
  socialUrl?: string;
};

export default function TeamMember({
  name,
  bio,
  avatarUrl,
  socialUrl,
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & TeamMemberProps) {
  return (
    <div className={cn(styles.teamMember, className)} {...rest}>
      <div className={styles.info}>
        <div className={styles.avatarContainer}>
          <Image
            src={avatarUrl}
            alt={`${name} Image`}
            width={512}
            height={512}
          />
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.bio}>{bio}</p>
      </div>
      {socialUrl && (
        <a
          className={styles.socialLink}
          href={socialUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/linkedin.svg"
            alt="Social Network Logo"
            width={40}
            height={40}
          />
        </a>
      )}
    </div>
  );
}
