import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} HaruHan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
