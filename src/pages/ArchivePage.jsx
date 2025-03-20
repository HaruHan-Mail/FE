import { useState, useEffect } from 'react';
import MailLayout from '../components/Layout/MailLayout';
import ArchiveSection from '../components/_Archive/ArchiveSection';
import { useQueryParams } from '../hooks/useQueryParams';

const ArchivePage = () => {
  const { email, token } = useQueryParams();
  
  return (
    <MailLayout>
      <ArchiveSection email={email} token={token} />
    </MailLayout>
  );
};

export default ArchivePage;