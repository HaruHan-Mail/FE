import React from 'react';
import Lottie from 'lottie-react';
import knowledgeAni from '../../assets/lottiefiles/knowledgeAni.json';
import './css/KnowledgeSectionAni.css';

const KnowledgeSectionAni = () => {
  return (
    <div className="KnowledgeSectionAni">
      <div className="KnowledgeAniContainer">
        <Lottie animationData={knowledgeAni} loop={true} />
      </div>
      <div className="KnowledgeSectionDescription">
        <h1>
          원하는 시간에
          <span className="KnowledgeSectionHighlight"> 메일</span>을 통해 <br />
          <span className="KnowledgeSectionHighlight">짧지만 알찬 지식</span>을
          <br /> 아래와 같이 공유해드려요!
        </h1>
      </div>
    </div>
  );
};

export default KnowledgeSectionAni;
