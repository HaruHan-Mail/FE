import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import SubscriptionButton from '@common/SubscriptionButton';
import LogoImg from '/src/assets/images/HaruhanLogo.webp';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  box-sizing: border-box;
  background-color: transparent;
  backdrop-filter: none;
  box-shadow: none;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

  &.scrolled {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
    padding: 20px 40px;
  }
`;

const LogoImage = styled.img`
  width: auto;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 768px) {
    height: 3rem;

    ${HeaderContainer}.scrolled & {
      height: 3rem;
    }
  }
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

  ${HeaderContainer}.scrolled & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 5px 0;
  position: relative;

  &:hover {
    color: #000;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    transition: width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer className={isScrolled ? 'scrolled' : ''}>
      <LogoImage
        src={LogoImg}
        onClick={() => nav('/')}
        alt="Haruhan Logo"
        loading="eager"
        width={100}
        height={50}
      />
      <NavContainer className={isScrolled ? 'scrolled' : ''}>
        <NavLink onClick={() => nav('/teamInfo')}>팀 소개</NavLink>
        <SubscriptionButton size={'Medium'} />
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
