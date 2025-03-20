import MailLayout from '../components/Layout/MailLayout';
import ArchiveSection from '../components/_Archive/ArchiveSection';
import { useSearchParams } from 'react-router-dom';

const Archive = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');
  
  return (
    <MailLayout>
      <ArchiveSection email={email} token={token} />
    </MailLayout>
  );
};

export default Archive;