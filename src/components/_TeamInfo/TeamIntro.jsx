import { useLayoutEffect } from 'react';
import { TeamIntroImages } from './utils/getTeamIntroImage';
import styled from '@emotion/styled';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TeamIntroData = [
  {
    id: 1,
    image: TeamIntroImages[0],
    title: 'HARUHAN',
    content: [
      '똑똑한 하루의 시작',
      '하루를 여는 작은 지식',
      'Morning Spark',
      '하루 1분, 새로운 시선',
    ],
  },
  {
    id: 2,
    image: TeamIntroImages[1],
    title: 'What We Do',
    content: [
      'HaruHan 이란?',
      '하루 하나의 지식 Letter',
      'Daily Dose: 하루 한 편의 인사이트',
      '가볍고 유익한 교양 잡학 이야기',
    ],
  },
  {
    id: 3,
    image: TeamIntroImages[2],
    title: 'Our Vision',
    content: [
      '배움이 일상이 되는 세상',
      'Beyond Info: 대화를 여는 지식',
      '호기심으로 잇는 내일',
      '지식으로 여는 새로운 시각',
    ],
  },
  {
    id: 4,
    image: TeamIntroImages[3],
    title: 'Our Goals',
    content: [
      '지속 가능한 인사이트 습관',
      '짧고 깊은 배움의 여정',
      '무(無)자극, 온전한 집중',
      '한 조각 지식이 만드는 변화',
    ],
  },
];

const TeamIntroContainer = styled.div`
  padding: 30vh 10vw;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const TeamIntroItem = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const TeamIntroItemTitle = styled.div`
  align-self: center;
  width: 40%;
  font-size: 2rem;

  h1 {
    padding: 20px 0;
    font-weight: 700;
  }

  ul {
    list-style: none;
    padding: 20px 0;
    margin: 0;

    li {
      padding: 10px 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 3rem;
    }

    ul {
      font-size: 1.2rem;
    }
  }
`;

const TeamIntroItemImage = styled.div`
  width: 60%;
  height: 28rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 18rem;
  }
`;
const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.image})`};
`;

const TeamIntro = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    gsap.utils.toArray('.slider .image').forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          clipPath: 'inset(0% 100% 0% 0%)',
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'clamp(top bottom)',
            end: 'clamp(top top)',
          },
        },
      );
    });
    gsap.utils.toArray('.slider .title, .slider .content').forEach((title, index) => {
      gsap.fromTo(
        title,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: title,
            start: 'clamp(top bottom)',
            end: 'clamp(top top)',
          },
        },
      );
    });
  });

  return (
    <TeamIntroContainer>
      {TeamIntroData.map((item, index) => (
        <TeamIntroItem key={index} className={`slider`}>
          <TeamIntroItemTitle>
            <h1 className={`title`}>{item.title}</h1>
            <ul className={`content`}>
              {item.content.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </TeamIntroItemTitle>
          <TeamIntroItemImage>
            <ImageBox image={item.image} className={`image`} />
          </TeamIntroItemImage>
        </TeamIntroItem>
      ))}
    </TeamIntroContainer>
  );
};

export default TeamIntro;
