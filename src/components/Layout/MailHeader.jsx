import { useState, useEffect } from 'react';
import './css/MailHeader.css';
import LogoImg from '/src/assets/images/HaruhanLogo.png';

const MailHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <section className="MailHeaderContainer" id={`${isScrolled ? 'Scrolled' : ''}`}>
      <a target="_blank" href="https://haruhan.site">
        <img className="MailHeaderLogoImage" src={LogoImg} />
      </a>
    </section>
  );
};

export default MailHeader;
