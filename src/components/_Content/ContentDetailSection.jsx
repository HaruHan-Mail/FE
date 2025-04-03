import React, { useState } from 'react';
import './css/ContentDetailSection.css';
import { contentData } from '../../mocks/contentData.js';

const ContentDetailSection = () => {
  const [content, setContent] = useState({
    // title: '',
    // summary: '',
    // background: [],
    // importance: [],
    // tip: [],
    // resource: [],
  });

  return (
    <section className="content-detail-section-container">
      <h1 className="content-detail-section-title">⁉️{contentData.title}</h1>
      <h3 className="content-detail-section-summary">🧠 {contentData.summary}</h3>
      <h3 className="content-detail-section-text">✅ 알아두면 쓸모 있는 배경 지식</h3>
      <ul className="content-detail-section-list">
        {contentData.background.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="content-detail-section-text">🌟 이 지식이 왜 중요할까?</h3>
      <ul className="content-detail-section-list">
        {contentData.importance.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="content-detail-section-text">💡 오늘의 팁</h3>
      <ul className="content-detail-section-list">
        {contentData.tip.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="content-detail-section-text">📖 더 알고 싶다면</h3>
      <ul className="content-detail-section-list">
        {contentData.resource.map((item, index) => (
          <li key={index}>
            <a href={item} target="_blank">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContentDetailSection;
