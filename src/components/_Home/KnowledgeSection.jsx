import React, { useRef } from 'react';
import styled from '@emotion/styled';
import useBlurScrollEffect from '../../hooks/useBlurScrollEffect';
import KnowledgeOverlay from './KnowledgeOverlay';
import KnowledgeSectionAni from './KnowledgeSectionAni';
import KnowledgeSectionList from './KnowledgeSectionList';

// Styled Components
const SectionWrapper = styled.div`
  position: relative;
  margin: 8rem 0;
`;

const Container = styled.section`
  will-change: filter, opacity;
  min-height: 200px;
  visibility: visible;
`;

const KnowledgeSection = () => {
  const knowledgeRef = useRef(null);
  const { blurAmount, descOpacity, closingOpacity, translateY } =
  useBlurScrollEffect(knowledgeRef);

  return (
    <SectionWrapper>
      <Container
        ref={knowledgeRef}
        style={{
          filter: `blur(${blurAmount}px)`,
          opacity: descOpacity,
          transition: 'filter 0.3s ease-out, opacity 0.3s ease-out',
        }}
      >
        <KnowledgeSectionAni />
        <KnowledgeSectionList />
      </Container>

      {/* KnowledgeOverlay 컴포넌트 */}
      <KnowledgeOverlay opacity={closingOpacity} translateY={translateY} />
    </SectionWrapper>
  );
};

export default KnowledgeSection;
