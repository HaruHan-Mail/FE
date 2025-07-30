import styled from '@emotion/styled';
import { FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 1rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  font-size: 0.8rem;
  color: black;
`;

const GithubIconWrapper = styled.div`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} HaruHan. All rights reserved.</p>
        <GithubIconWrapper>
          <a
            href="https://github.com/HaruHan-Mail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="하루한 깃허브"
          >
            <FaGithub size={20} color="black" />
          </a>
        </GithubIconWrapper>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
