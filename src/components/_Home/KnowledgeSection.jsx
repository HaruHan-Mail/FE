import React, { useRef } from 'react';
import './css/KnowledgeSection.css';
import useCombinedScrollEffect from '../../hooks/useCombinedScrollEffect';
import KnowledgeOverlay from './KnowledgeOverlay';
import KnowledgeSectionAni from './KnowledgeSectionAni';
import KnowledgeSectionList from './KnowledgeSectionList';

const KnowledgeSection = () => {
  const knowledgeRef = useRef(null);
  const { blurAmount, descOpacity, closingOpacity, translateY } =
    useCombinedScrollEffect(knowledgeRef);

  return (
    <div className="KnowledgeSection">
      <section
        ref={knowledgeRef}
        className="KnowledgeSectionContainer"
        style={{
          filter: `blur(${blurAmount}px)`,
          opacity: descOpacity,
          transition: 'filter 0.3s ease-out, opacity 0.3s ease-out',
        }}
      >
        <KnowledgeSectionAni />
        <KnowledgeSectionList />
      </section>

      {/* KnowledgeOverlay 컴포넌트 */}
      <KnowledgeOverlay opacity={closingOpacity} translateY={translateY} />
    </div>
  );
};

export default KnowledgeSection;
