import LogoImg from '@assets/images/HaruhanLogo.webp';
import styled from '@emotion/styled';

const MailHeaderContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  padding: 20px 30px;
`;

const MailHeader = () => {
  return (
    <MailHeaderContainer>
      <a target="_blank" href="https://haruhan.site">
        <img
          className="MailHeaderLogoImage"
          src={LogoImg}
          loading="eager"
          alt="Haruhan Logo"
          width={100}
          height={50}
        />
      </a>
    </MailHeaderContainer>
  );
};

export default MailHeader;
