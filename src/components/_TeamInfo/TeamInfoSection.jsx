import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { teamInfo } from '../../mocks/teamInfoData';
import { useKineticText } from '../../hooks/useScrollAnimation';

// 전체 컨테이너 - 모던한 흰 배경
const FullScreenContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  overflow-x: hidden;
  position: relative;
  line-height: 1.5;
`;

// 메인 콘텐츠 영역 - 개선된 패딩과 레이아웃
const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// 히어로 섹션 - 모던한 타이포그래피
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 0 4rem;
  
  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`;

const HeroText = styled.h1`
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  
  .line {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const SubText = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  margin-top: 2rem;
  max-width: 600px;
  color: #666;
  opacity: 0.9;
`;

// 콘텐츠 섹션들 - 개선된 간격과 레이아웃
const ContentSection = styled.section`
  padding: 6rem 0;
  border-top: 1px solid #f0f0f0;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: 3rem;
  color: #1a1a1a;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentText = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4a4a4a;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 1.25rem;
      position: relative;
      padding-left: 1.5rem;
      
      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--primary);
        font-weight: bold;
        font-size: 1.2em;
      }
    }
  }
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MemberCard = styled.div`
  padding: 2.5rem 2rem;
  background: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  
  &:hover {
    background: #f5f5f5;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

// 키네틱 텍스트 컴포넌트 - 개선된 애니메이션
const KineticTextSpan = ({ text, animationType = 'fadeInUp', staggerDelay = 0.03, className }) => {
  const { ref, chars, isVisible, getCharStyle } = useKineticText(text, {
    animationType,
    staggerDelay,
    threshold: 0.2
  });

  return (
    <span ref={ref} className={className}>
      {chars.map((charData, index) => (
        <span
          key={index}
          style={getCharStyle(charData, isVisible)}
        >
          {charData.char}
        </span>
      ))}
    </span>
  );
};

const TeamInfoSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const koreanHeroTexts = [
    "HaruHan 지식이",
    "만들어가는",
    "똑똑한 하루를",
    "당신에게",
    "전합니다"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // 자동 텍스트 변경 - 더 부드러운 전환
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % koreanHeroTexts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <FullScreenContainer>
      <MainContent>
        {/* 히어로 섹션 */}
        <HeroSection>
          <HeroText>
            {koreanHeroTexts.map((text, index) => (
              <span 
                key={index} 
                className="line"
                style={{
                  opacity: currentPhrase >= index ? 1 : 0.4,
                  transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <KineticTextSpan 
                  text={text}
                  animationType="slideInRight"
                  staggerDelay={0.04}
                />
              </span>
            ))}
          </HeroText>
          
          <SubText>
            <KineticTextSpan 
              text="우리는 매일의 지식 전달을 통해"
              animationType="fadeInUp"
              staggerDelay={0.02}
            />
            <br />
            <KineticTextSpan 
              text="더 나은 세상을 만들어가는 팀입니다."
              animationType="fadeInUp"
              staggerDelay={0.02}
            />
          </SubText>
        </HeroSection>

        {/* 서비스 소개 섹션 */}
        <ContentSection>
          <SectionTitle>
            <KineticTextSpan 
              text="What We Do"
              animationType="fadeInScale"
              staggerDelay={0.06}
            />
          </SectionTitle>
          
          <ContentGrid>
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: '#1a1a1a'
              }}>
                <KineticTextSpan 
                  text="우리의 서비스"
                  animationType="slideInRight"
                  staggerDelay={0.04}
                />
              </h3>
            </div>
            <ContentText>
              <ul>
                {teamInfo.serviceInfo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ContentText>
          </ContentGrid>
        </ContentSection>

        {/* 비전 섹션 */}
        <ContentSection>
          <SectionTitle>
            <KineticTextSpan 
              text="Our Vision"
              animationType="rotateIn"
              staggerDelay={0.05}
            />
          </SectionTitle>
          
          <ContentGrid>
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: '#1a1a1a'
              }}>
                <KineticTextSpan 
                  text="우리의 비전"
                  animationType="fadeInUp"
                  staggerDelay={0.04}
                />
              </h3>
            </div>
            <ContentText>
              <ul>
                {teamInfo.vision.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ContentText>
          </ContentGrid>
        </ContentSection>

        {/* 목표 섹션 */}
        <ContentSection>
          <SectionTitle>
            <KineticTextSpan 
              text="Our Goals"
              animationType="fadeInScale"
              staggerDelay={0.06}
            />
          </SectionTitle>
          
          <ContentText>
            <ul>
              {teamInfo.goal.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </ContentText>
        </ContentSection>

        {/* 팀 섹션 */}
        <ContentSection>
          <SectionTitle>
            <KineticTextSpan 
              text="Our Team"
              animationType="slideInRight"
              staggerDelay={0.04}
            />
          </SectionTitle>
          
          <MembersGrid>
            {teamInfo.members.map((member, index) => (
              <MemberCard key={index}>
                {member}
              </MemberCard>
            ))}
          </MembersGrid>
        </ContentSection>
      </MainContent>
    </FullScreenContainer>
  );
};

export default TeamInfoSection;
