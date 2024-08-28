// pages/terms-of-service.tsx

import React from 'react';
import TermsOfService from '@/components/FrontEnd/TermsOfService';
import TermsOfServiceModal from '@/components/FrontEnd/TermsOfServiceModal';

const TermsOfServicePage: React.FC = () => {
  return (
    <div>
      <TermsOfServiceModal isVisible={false} onClose={function (): void {
        throw new Error('Function not implemented.');
      } }/>
      
    </div>
  );
};

export default TermsOfServicePage;
