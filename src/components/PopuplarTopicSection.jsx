import React, { useEffect, useState } from 'react';
import './css/PopuplarTopicSection.css';
import { animate } from '@motionone/dom';

const PopuplarTopicSection = () => {
  const topics = [
    '1️⃣ 하품은 왜 할까?',
    '2️⃣ 우주 쓰레기',
    '3️⃣ 하늘로 총을 쏘면 어떻게 될까?',
    '4️⃣ 딸꾹질은 왜 할까?',
    '5️⃣ 2차 세계 대전',
  ];
  const [index, setIndex] = useState(0);

  // 일정 시간마다 주제 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % topics.length);
    }, 2000); // 2초마다 주제 전환

    // 컴포넌트 언마운트 시 메소드 정리
    return () => clearInterval(interval);
  }, [topics.length]); // topics 배열 길이 변경될 때마다 재실행

  // index 값 변경될 때마다 항목 위치, 투명도 등 변경
  useEffect(() => {
    const elements = document.querySelectorAll('.ShowcaseItem');

    elements.forEach((el, i) => {
      const prevIndex = (index - 1 + topics.length) % topics.length;
      const nextIndex = (index + 1) % topics.length;

      if (i === index) animate(el, { opacity: 1, scale: 1, x: 0, zIndex: 3 }, { duration: 0.8 });
      else if (i === prevIndex)
        animate(el, { opacity: 0.5, scale: 0.8, x: -150, zIndex: 2 }, { duration: 0.8 });
      else if (i === nextIndex)
        animate(el, { opacity: 0.5, scale: 0.8, x: 150, zIndex: 2 }, { duration: 0.8 });
      else animate(el, { opacity: 0, scale: 0.5, x: 0, zIndex: 1 }, { duration: 0.8 });
    });
  }, [index]);

  return (
    <section className="PopuplarTopicSectionContainer">
      <img className="PopuplarTopicSectionImage" src="src\assets\HaruhanBook.png" />
      <h1 className="PopuplarTopicSectionH1">
        인기가 많은
        <span className="PopuplarTopicSectionHighlight"> 교양 지식</span>이에요!
      </h1>
      <div className="PopuplarTopicSectionShowcase">
        {topics.map((topic, i) => (
          <div key={i} className="ShowcaseItem">
            {topic}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopuplarTopicSection;
