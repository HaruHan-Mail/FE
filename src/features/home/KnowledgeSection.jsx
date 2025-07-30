import React, { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';
import gsap from 'gsap';
import KnowledgeSectionLottie from './Knowledge/KnowledgeSectionLottie';
import KnowledgeSectionList from './Knowledge/KnowledgeSectionList';

const SectionContainer = styled.section`
  padding: 6rem 1.5rem;
  overflow: hidden;
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LottieWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto 3rem;
  display: flex;
  justify-content: center;
`;

const ListWrapper = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
`;

export default function KnowledgeSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lottieRef = useRef(null);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(lottieRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: lottieRef.current,
          start: 'top 80%',
        },
      });

      const items = listRef.current.querySelectorAll('.item');
      items.forEach((item, i) => {
        gsap.from(item, {
          x: i % 2 === 0 ? -200 : 200,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionContainer ref={sectionRef}>
      <SectionTitle ref={titleRef}>하루 한 조각, 지식을 채우는 시간</SectionTitle>
      <SectionSubtitle>
        매일 이메일로 전달되는 짧지만
        <br />
        깊이 있는 지식 콘텐츠를 만나보세요.
      </SectionSubtitle>

      <LottieWrapper ref={lottieRef}>
        <KnowledgeSectionLottie />
      </LottieWrapper>

      <ListWrapper ref={listRef}>
        <KnowledgeSectionList />
      </ListWrapper>
    </SectionContainer>
  );
}
