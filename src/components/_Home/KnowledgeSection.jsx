import React, { useRef } from 'react';
import styled from '@emotion/styled';
import useBlurScrollEffect from '../../hooks/useBlurScrollEffect';
import KnowledgeOverlay from './KnowledgeOverlay';
import KnowledgeSectionLottie from './KnowledgeSectionLottie';
import KnowledgeSectionList from './KnowledgeSectionList';

const SectionWrapper = styled.div`
  position: relative;
  margin: 8rem 0;
`;

const Container = styled.section`
  min-height: 200px;
  transition: filter 0.2s ease-out, opacity 0.2s ease-out;
`;

const KnowledgeSection = () => {
  const sectionRef = useRef(null);
  const { blurAmount, opacity } = useBlurScrollEffect(sectionRef);
  console.log(blurAmount, opacity)

  // blur가 일정 수준 이상일 때 오버레이 표시
  const showOverlay = blurAmount > 3;

  return (
    <SectionWrapper>
      <Container
        ref={sectionRef}
        style={{
          filter: `blur(${blurAmount}px)`,
          opacity,
        }}
      >
        <KnowledgeSectionLottie />
        <KnowledgeSectionList />
      </Container>
      
      {/* blur 효과가 있을 때만 오버레이 표시 */}
      {showOverlay && <KnowledgeOverlay opacity={Math.min(blurAmount / 10, 1)} />}
    </SectionWrapper>
  );
};

export default KnowledgeSection;
