import MailHeader from './MailHeader';
import Footer from './Footer';

const MailLayout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <MailHeader />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default MailLayout;
