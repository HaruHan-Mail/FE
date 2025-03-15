import './css/MailHeader.css';
import LogoImg from '/src/assets/images/HaruhanLogo.png';

const MailHeader = () => {
  return (
    <section className="MailHeaderContainer">
      <a target="_blank" href="https://haruhan.site">
        <img className="MailHeaderLogoImage" src={LogoImg} />
      </a>
    </section>
  );
};

export default MailHeader;
