import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  // 화면 스크롤에 따른 헤더 배경색 조정
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50)
        setIsScrolled(true);
      else 
        setIsScrolled(false);
    };

    // 스크롤할 때마다, handleScroll 함수 호출
    window.addEventListener('scroll', handleScroll);

    // 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    }
  }, []);

  return (
    <section className='HeaderContainer' id={`${isScrolled ? 'Scrolled' : ''}`}>
        <img className='HeaderLogoImage' src='src\assets\HaruhanLogo.png' />
        <a className='HeaderTeamInfoLink' target='_blank' href='https://www.notion.so/Inside-Insight-16b39551f55a80c38a65dd3c3057b969'>팀 소개</a>
        <button className='HeaderSubscribeButton'>구독하기</button>
    </section>
  )
}

export default Header