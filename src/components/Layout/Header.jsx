import { useState, useEffect } from 'react';
import './css/Header.css';
import SubscriptionButton from '../common/SubscriptionButton';
import LogoImg from '/src/assets/images/HaruhanLogo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`HeaderContainer ${isScrolled ? 'scrolled' : ''}`}>
      <div>
        <img
          className="HeaderLogoImage"
          src={LogoImg}
          onClick={() => nav('/')}
          alt="Haruhan Logo"
        />
      </div>
      <div className="HeaderLinkContainer">
        <a
          className="HeaderTeamInfoLink"
          target="_blank"
          href="https://www.notion.so/Inside-Insight-16b39551f55a80c38a65dd3c3057b969"
          rel="noreferrer"
        >
          팀 소개
        </a>
        <SubscriptionButton size={'Medium'} />
      </div>
    </section>
  );
};

export default Header;
