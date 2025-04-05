import { useState, useEffect } from 'react';
import './css/Header.css';
import SubscriptionButton from '../common/SubscriptionButton';
import LogoImg from '/src/assets/images/HaruhanLogo.png';
import { Link, useNavigate } from 'react-router-dom';

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
        <a onClick={() => nav("/teamInfo")}>팀 소개</a>
        <SubscriptionButton size={'Medium'} />
      </div>
    </section>
  );
};

export default Header;
