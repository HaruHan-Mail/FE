import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentDetail } from '../../apis/userContentApi';
import './css/ContentDetailSection.css';

const ContentDetailSection = () => {
  const { contentId } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const result = await fetchContentDetail({ contentId });
        setContent(result.data);
      } catch (err) {
        console.error('콘텐츠 상세 정보 불러오기 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [contentId]);

  if (loading) return <div>로딩 중...</div>;
  if (!content) return <div>컨텐츠를 불러올 수 없습니다.</div>;

  return (
    <section className="content-detail-section-container">
      <h1 className="content-detail-section-title">⁉️ {content.title}</h1>
      <h3 className="content-detail-section-summary">🧠 {content.summary}</h3>
      <h3 className="content-detail-section-text">✅ 알아두면 쓸모 있는 배경 지식</h3>
      <ul className="content-detail-section-list">
        {(content.background || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="content-detail-section-text">🌟 이 지식이 왜 중요할까?</h3>
      <ul className="content-detail-section-list">
        {(content.importance || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="content-detail-section-text">💡 오늘의 팁</h3>
      <ul className="content-detail-section-list">
        {(content.tip || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="content-detail-section-text">📖 더 알고 싶다면</h3>
      <ul className="content-detail-section-list">
        {(content.additionalResources || []).map((item, index) => (
          <li key={index}>
            <a href={item} target="_blank" rel="noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContentDetailSection;
