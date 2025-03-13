import React from 'react';
import { knowledgeMockData } from '../../mocks/knowledgeData';
import KnowledgeSectionItem from './KnowledgeSectionItem';
import './css/KnowledgeSectionList.css';

const KnowledgeSectionList = () => {
  return (
    <div className="KnowledgeSectionList">
      {knowledgeMockData.map((item, index) => (
        <KnowledgeSectionItem
          key={index}
          icon={item.icon}
          title={item.title}
          summary={item.summary}
          contents={item.contents}
        />
      ))}
    </div>
  );
};

export default KnowledgeSectionList;
