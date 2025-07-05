import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import PopularTopicItem from './PopularTopicItem';
import { usePopularContent } from '../../../hooks/queries';
import { getPopularImages } from '../../../utils/getPopularImages';
import LoadingSpinner from '../../common/LoadingSpinner';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

// Global Swiper 스타일
const swiperStyles = css`
  .swiper {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 1024px) {
      width: 350px;
      height: 350px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-pagination-bullet {
    background-color: var(--primary);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary);
  }
`;

const PopularTopicList = () => {
  const { data: popularContent, isLoading, error } = usePopularContent();
  const images = getPopularImages();

  if (isLoading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div>인기 컨텐츠를 불러오는데 실패했습니다.</div>
      </Container>
    );
  }

  if (!popularContent || popularContent.length === 0) {
    return (
      <Container>
        <div>인기 컨텐츠가 없습니다.</div>
      </Container>
    );
  }

  return (
    <>
      <Global styles={swiperStyles} />
      <Container>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {popularContent.map((item, idx) => (
            <SwiperSlide key={item.id || idx}>
              <PopularTopicItem 
                title={item.title} 
                image={images[idx]} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default PopularTopicList;
