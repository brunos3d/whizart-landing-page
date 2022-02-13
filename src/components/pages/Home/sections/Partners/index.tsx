import { HTMLAttributes } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import { Container, Subtitle } from '@/components';

import styles from './styles.module.css';

export type PartnersProps = HTMLAttributes<HTMLElement>;

const partners = [
  {
    name: `Jade Labs`,
    url: `/logos/partners/jade-labs.png`,
    width: `184`,
    height: `32`,
  },
  {
    name: `BFRI`,
    url: `/logos/partners/bfri.png`,
    width: `110`,
    height: `60`,
  },
  {
    name: `Binance Smart Chain`,
    url: `/logos/partners/binance-smart-chain.png`,
    width: `204`,
    height: `60`,
  },
  {
    name: `Amazon Web Services`,
    url: `/logos/partners/amazon-web-services.png`,
    width: `191`,
    height: `63`,
  },
];

export default function Partners({ className, ...rest }: PartnersProps) {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      <Container className={styles.container}>
        <div className={styles.frame}>
          <Subtitle className={styles.subtitle}>Partners:</Subtitle>
          <div className={styles.swiperContainer}>
            <Swiper
              spaceBetween={30}
              loop
              centeredSlides
              grabCursor
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              breakpoints={
                process.env.NODE_ENV === `production`
                  ? {
                      320: {
                        slidesPerView: 1,
                      },
                      576: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                    }
                  : {}
              }
              className={styles.swiper}
            >
              {partners.map(({ name, url, width, height }) => (
                <SwiperSlide className={styles.slide} key={name}>
                  <Image src={url} alt={name} width={width} height={height} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
