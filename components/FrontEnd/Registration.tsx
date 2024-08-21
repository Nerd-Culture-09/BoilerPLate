import React, { useState } from 'react';
import TermsOfServiceModal from '@/components/FrontEnd/TermsOfServiceModal';

const RegistrationPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowTerms = () => {
    setIsModalVisible(true);
  };

  const handleCloseTerms = () => {
    setIsModalVisible(false);
  };

  const handleAcceptTerms = () => {
    // Handle the logic for accepting the terms (e.g., set a cookie or update user status)
    setIsModalVisible(false);
  };

  return (
    <div>
      <h1>Register</h1>
      {/* Registration form goes here */}
      <button onClick={handleShowTerms}>View Terms of Service</button>
      <button onClick={handleAcceptTerms}>Accept Terms and Register</button>
      
      <TermsOfServiceModal isVisible={isModalVisible} onClose={handleCloseTerms} />
    </div>
  );
};

export default RegistrationPage;
