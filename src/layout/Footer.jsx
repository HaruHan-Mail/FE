import styled from '@emotion/styled';
import { FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #F8F8F8;
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
  color: var(--l-grey);
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
        <GithubIconWrapper >
          <a href="https://github.com/HaruHan-Mail" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} color="var(--l-grey)" />
          </a>
        </GithubIconWrapper>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
