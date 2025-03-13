import React from 'react';
import SubscriptionButton from '../common/SubscriptionButton';
import './css/KnowledgeOverlay.css';

const KnowledgeOverlay = ({ opacity, translateY }) => {
  return (
    <section
      className="knowledgeOverlayContainer"
      style={{
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
      }}
    >
      <div className="knowledgeOverlayGradient"></div>
      <div className="knowledgeOverlayContent">
        <div
          className="knowledgeOverlaySubscribeText"
          style={{
            opacity: opacity,
            transform: `translateY(${translateY * 0.7}px)`,
            transition: 'opacity 0.6s ease-out, transform 0.5s ease-out',
          }}
        >
          <span className="knowledgeOverlayHighlight">Haruhan 지식</span>
          <br />
          <span className="fadeInText">무료로 구독하고 지식 얻어가세요!</span>
        </div>
        <div
          style={{
            opacity: opacity,
            transform: `translateY(${translateY * 0.5}px)`,
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <SubscriptionButton size="Large" />
        </div>
      </div>
    </section>
  );
};

export default KnowledgeOverlay;
