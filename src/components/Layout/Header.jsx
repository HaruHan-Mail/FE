import React, { useState, useEffect } from 'react';
import './css/Header.css';
import SubscriptionButton from '../common/SubscriptionButton';
import LogoImg from '/src/assets/images/HaruhanLogo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    // 스크롤할 때마다, handleScroll 함수 호출
    window.addEventListener('scroll', handleScroll);

    // 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="HeaderContainer" id={`${isScrolled ? 'Scrolled' : ''}`}>
      <div>
        <img className="HeaderLogoImage" src={LogoImg} onClick={() => nav('/')} />
      </div>
      <div className="HeaderLinkContainer">
        <a
          className="HeaderTeamInfoLink"
          target="_blank"
          href="https://www.notion.so/Inside-Insight-16b39551f55a80c38a65dd3c3057b969"
        >
          팀 소개
        </a>
        <SubscriptionButton size={'Medium'} />
      </div>
    </section>
  );
};

export default Header;
