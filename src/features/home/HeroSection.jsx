import React, { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';
import gsap from 'gsap';
import { TeamHeroImages } from './utils/getTeamHeroImage';

const TeamHeroContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TextContainer = styled.div`
  position: absolute;
  text-align: center;
  p {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    font-size: 9rem;
  }

  span {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    p {
      font-size: 4rem;
    }
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 14rem;
  width: 100%;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14rem 4rem;

    img {
      width: 150px;
      height: 150px;
    }

    img:nth-of-type(n + 5) {
      display: none;
    }
  }
`;

export default function TeamHero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom center',
        pin: true,
        scrub: 1,
      },
    });

    gsap.utils.toArray('.img').forEach((img) => {
      tl.to(
        img,
        {
          x: random(-2000, 2000),
          y: random(-1000, 1000),
          rotate: random(-700, 700),
          scale: 0,
        },
        0,
      );
    });
    gsap.to(textRef.current, {
      scale: 0,
      scrollTrigger: {
        start: () => tl.scrollTrigger.end,
        end: '80%',
        pin: textRef.current,
        pinType: 'transform',
        scrub: 1,
      },
    });
  }, []);

  const random = (min, max) => min + (max - min) * Math.random();

  return (
    <TeamHeroContainer ref={sectionRef}>
      <TextContainer>
        <p ref={textRef}>
          'One a Day' <span>HARUHAN</span>
        </p>
      </TextContainer>
      <ImageContainer>
        {TeamHeroImages.map((src, i) => (
          <img key={i} className="img" src={src} alt={`Team Profile ${i + 1}`} />
        ))}
      </ImageContainer>
    </TeamHeroContainer>
  );
}
