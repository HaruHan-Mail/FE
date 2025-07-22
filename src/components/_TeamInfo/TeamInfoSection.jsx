import { useLayoutEffect } from 'react';
import cloud from '/src/assets/images/cloud.avif';
import email from '/src/assets/images/email.avif';
import team from '/src/assets/images/team.avif';
import knowledge from '/src/assets/images/knowledge.avif';
import styled from '@emotion/styled';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TeamInfoData = [
  {
    id: 1,
    image: cloud,
    title: 'Haruhan',
    content: [
      '똑똑한 하루의 시작',
      '하루를 여는 작은 지식',
      'Morning Spark',
      '하루 1분, 새로운 시선',
    ]
  },
  {
    id: 2,
    image: team,
    title: 'What We Do',
    content: [
      'HaruHan 이란?',
      '매일의 지식 레터',
      'Daily Dose: 하루 한 편의 인사이트',
      '가볍고 유익한 잡학 이야기',
    ]
  },
  {
    id: 3,
    image: knowledge,
    title: 'Our Vision',
    content: [
      '배움이 일상이 되는 세상',
      'Beyond Info: 대화를 여는 지식',
      '호기심으로 잇는 내일',
      '지식으로 여는 새로운 시각',
    ]
  },
  {
    id: 4,
    image: email,
    title: 'Our Goals',
    content: [
      '지속 가능한 인사이트 습관',
      '짧고 깊은 배움의 여정',
      '무(無)자극, 온전한 집중',
      '한 조각 지식이 만드는 변화',
    ]
  },
]

const TeamInfoContainer = styled.div`
  padding: 60vh 10vw;
`

const TeamInfoItem = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`

const TeamInfoItemTitle = styled.div`
  align-self: center;
  width: 40%;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }

  h1 {
    padding: 20px 0;
  }

  ul {
    list-style: none;
    padding: 20px 0;
    margin: 0;

    li {
      padding: 10px 0;
    }
  }
`

const TeamInfoItemImage = styled.div`
  width: 60%;
  height: 28rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 18rem;
  }
`
const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${props => `url(${props.image})`};
`;

const TeamInfoSection = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useGSAP(() => {
    gsap.utils.toArray('.slider .image').forEach((image, index) => {
      gsap.fromTo(image, {
        clipPath: "inset(0% 100% 0% 0% round 15px)",
      }, {
        clipPath: "inset(0% 0% 0% 0% round 15px)",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "clamp(top bottom)",
          end: "clamp(top top)",
          scrub: true,
        }
      })
    })
    gsap.utils.toArray('.slider .title, .slider .content').forEach((title, index) => {
      gsap.fromTo(title, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: title,
          start: "clamp(top bottom)",
          end: "clamp(top top)",
          scrub: true,
        }
      })
    })
  })
  

  return (
    <TeamInfoContainer>
      {
        TeamInfoData.map((item, index) => (
          <TeamInfoItem key={index} className={`slider`}>
            <TeamInfoItemTitle>
              <h1 className={`title`}>{item.title}</h1>
              <ul className={`content`}>
                {
                  item.content.map((content, index) => (
                    <li key={index}>{content}</li>
                  ))
                }
              </ul>
            </TeamInfoItemTitle>
            <TeamInfoItemImage>
              <ImageBox image={item.image} className={`image`}/>
            </TeamInfoItemImage>
          </TeamInfoItem>
        ))
      }
    </TeamInfoContainer>
  )
}

export default TeamInfoSection;