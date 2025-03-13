import React from 'react';
import './css/KnowledgeSectionItem.css';

const KnowledgeSectionItem = ({ icon, title, summary, contents }) => {
  return (
    <div className="knowledgeSectionItem">
      <h3 className="ItemTitle">
        {icon} {title}
      </h3>
      <h4 className="ItemSummary">{summary}</h4>
      {contents &&
        contents.map((content, index) => (
          <p key={index} className="ItemContent">
            {content}
          </p>
        ))}
    </div>
  );
};

export default KnowledgeSectionItem;
