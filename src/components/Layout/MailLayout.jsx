import MailHeader from './MailHeader';
import Footer from './Footer';

const MailLayout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between',
      }}
    >
      <MailHeader />
      {children}
      <Footer />
    </div>
  );
};

export default MailLayout;
