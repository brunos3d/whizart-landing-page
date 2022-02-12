import { HTMLAttributes } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { Container, Subtitle } from '@/components';

import styles from './styles.module.css';

SwiperCore.use([Autoplay]);

export type PartnersProps = HTMLAttributes<HTMLElement>;

const partners = [
  {
    name: `Jade Labs`,
    url: `/logos/jade-labs.png`,
    width: `184`,
    height: `32`,
  },
  {
    name: `BFRI`,
    url: `/logos/bfri.png`,
    width: `120`,
    height: `84`,
  },
];

export default function Partners({ className, ...rest }: PartnersProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.frame}>
          <Subtitle className={styles.subtitle}>Partners:</Subtitle>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop
            centeredSlides
            grabCursor
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className={styles.swiper}
          >
            {partners.map(({ name, url, width, height }) => (
              <SwiperSlide className={styles.slide} key={name}>
                <Image src={url} alt={name} width={width} height={height} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
