import React, { useRef } from 'react';
import './css/CombinedSection.css';
import HaruhanDescription from '../assets/images/HaruhanPhone.png';
import SubscriptionButton from './common/SubscriptionButton';
import useCombinedScrollEffect from '../hooks/useCombinedScrollEffect';

const descriptionData = [
  {
    icon: '🧠',
    title: '오늘의 주제',
    content: '비트코인, 양자컴퓨터가 해킹하면 3초 만에 증발할까?',
    details: [
      '기존 컴퓨터로는 사실상 불가능한 비트코인 해킹이 양자컴퓨터 시대가 오면 현실이 될 가능성이 있습니다.',
      '현재의 암호화 기술(예: ECDSA)은 양자컴퓨터가 쉽게 풀어버릴 수 있는 구조를 가지고 있어, 보완책이 필요합니다.',
    ],
  },
  {
    icon: '📌',
    title: '알아두면 쓸모 있는 배경 지식',
    content: '비트코인의 보안 구조',
    details: [
      '비트코인은 공개키 암호화(Public Key Cryptography) 기술을 기반으로 합니다. 가장 널리 사용되는 알고리즘이 ECDSA(Elliptic Curve Digital Signature Algorithm, 타원 곡선 서명 알고리즘)인데, 이 기술은 현재의 컴퓨터로는 사실상 해킹이 불가능한 수준입니다.',
      '기존의 슈퍼컴퓨터는 비트코인의 개인키를 풀기 위해 수천 년 이상의 시간이 필요하지만, 양자컴퓨터(Quantum Computer)는 완전히 다른 방식으로 연산을 수행하기 때문에, 이 과정을 단 몇 초 만에 해결할 가능성이 있습니다.',
      "양자컴퓨터가 문제인 이유: 쇼어의 알고리즘(Shor's Algorithm)",
      '1994년, 수학자 피터 쇼어(Peter Shor)는 양자컴퓨터가 기존 암호화 방식을 빠르게 해독할 수 있는 알고리즘을 제안했습니다.',
      '쇼어 알고리즘을 활용하면 비트코인의 개인키를 단 몇 초~몇 분 만에 추출할 수 있다는 것이 학계의 추정입니다.',
    ],
  },
];

const CombinedSection = () => {
  const descriptionRef = useRef(null);
  const { blurAmount, descOpacity, closingOpacity, translateY } =
    useCombinedScrollEffect(descriptionRef);

  return (
    <div className="combinedSectionWrapper">
      <section
        ref={descriptionRef}
        className="DescriptionSectionContainer"
        style={{
          filter: `blur(${blurAmount}px)`,
          opacity: descOpacity,
          transition: 'filter 0.3s ease-out, opacity 0.3s ease-out',
        }}
      >
        <div className="DescriptionSectionTop">
          <img className="DescriptionSectionImage" src={HaruhanDescription} alt="하루한 핸드폰" />
          <h1 className="DescriptionSectionH1">
            원하는 시간에
            <span className="DescriptionSectionHighlight"> 메일</span>을 통해 <br />
            <span className="DescriptionSectionHighlight">짧지만 알찬 지식</span>을
            <br /> 아래와 같이 공유해드려요!
          </h1>
        </div>
        <div className="DescriptionSectionTemplate">
          {descriptionData.map((item, index) => (
            <div key={index} className="contentBlock">
              <h3 className="contentTitle">
                {item.icon} {item.title}: {item.content}
              </h3>
              {item.details &&
                item.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="contentDetail">
                    {detail}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </section>

      <section
        className="ClosingSectionOverlayContainer"
        style={{
          opacity: closingOpacity,
          transform: `translateY(${translateY}px)`,
          transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
        }}
      >
        <div className="ClosingSectionGradient"></div>
        <div className="ClosingSectionContent">
          <div
            className="ClosingSectionSubscribeText"
            style={{
              opacity: closingOpacity,
              transform: `translateY(${translateY * 0.7}px)`,
              transition: 'opacity 0.6s ease-out, transform 0.5s ease-out',
            }}
          >
            <span className="ClosingSectionHighlight">Haruhan 지식</span>
            <br />
            <span className="fadeInText">무료로 구독하고 지식 얻어가세요!</span>
          </div>
          <div
            style={{
              opacity: closingOpacity,
              transform: `translateY(${translateY * 0.5}px)`,
              transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
            }}
          >
            <SubscriptionButton size="Large" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombinedSection;
