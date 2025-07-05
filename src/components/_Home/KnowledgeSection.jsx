import React from 'react';
import styled from '@emotion/styled';
// import useBlurScrollEffect from '../../hooks/useBlurScrollEffect';
// import KnowledgeOverlay from './KnowledgeOverlay';
import KnowledgeSectionLottie from './Knowledge/KnowledgeSectionLottie';
import KnowledgeSectionList from './Knowledge/KnowledgeSectionList';

const SectionContainer = styled.section`
  padding: 6rem 1.5rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #222;

  @media (max-width: 768px) {
    font-size: 2rem;
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

const KnowledgeSection = () => {
  // const sectionRef = useRef(null);
  // const { blurAmount, opacity } = useBlurScrollEffect(sectionRef);

  // blur가 일정 수준 이상일 때 오버레이 표시
  // const showOverlay = blurAmount > 3;

  return (
    <SectionContainer>
      <SectionTitle>하루 한 조각, 지식을 채우는 시간</SectionTitle>
      <SectionSubtitle>
        매일 이메일로 전달되는 짧지만 깊이 있는 지식 콘텐츠를 만나보세요.
      </SectionSubtitle>
      <KnowledgeSectionLottie />
      <KnowledgeSectionList />
    </SectionContainer>
  );
};

export default KnowledgeSection;
