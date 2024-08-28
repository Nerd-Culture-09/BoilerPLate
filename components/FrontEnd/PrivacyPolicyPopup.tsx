import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const PrivacyPolicyPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const privacyAccepted = Cookies.get('privacyAccepted');
    if (!privacyAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('privacyAccepted', 'true', { expires: 365 });
    setIsVisible(false);
  };

  const handleReject = () => {
    setIsVisible(false);
    Cookies.set('privacyAccepted', 'false', { expires: 365 });
    router.push('/privacy-rejected');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="privacy-popup">
      <div className="privacy-popup-content">
        <h2>Privacy Policy</h2>
        <p>
          This Privacy Policy outlines how your personal information is collected, used, shared, and protected by Nucleus Pty Ltd when you use our e-commerce Virtual Mall Of Lesotho platform. We respect your privacy and are committed to safeguarding your personal information.
        </p>
        <h3>Information Collection</h3>
        <p>
          We collect information about you when you use our platform. This information may include:
          <ul>
            <li>Personal Information: Names, email address, phone number, shipping address, and billing information.</li>
            <li>Account Information: Username, password, and security questions.</li>
            <li>Order Information: Products purchased, purchase history, and order status.</li>
            <li>Payment Information: Credit card or other payment method details.</li>
            <li>Device Information: IP address, browser type, and operating system.</li>
            <li>Usage Information: Information about how you use our platform, such as pages visited and features used.</li>
          </ul>
        </p>
        <h3>Use of Information</h3>
        <p>
          We use your information for the following purposes:
          <ul>
            <li>Processing orders: To fulfill your orders and process payments.</li>
            <li>Customer service: To provide customer support and assistance.</li>
            <li>Communication: To send you order confirmations, shipping updates, and promotional offers.</li>
            <li>Marketing: To personalize your shopping experience and offer relevant products and services.</li>
            <li>Fraud prevention: To protect our platform and customers from fraudulent activity.</li>
            <li>Improving our platform: To analyze user behavior and enhance our platform s features.</li>
          </ul>
        </p>
        <h3>Data Sharing</h3>
        <p>
          We may share your information with third-party service providers who assist us in operating our platform, such as payment processors, shipping carriers, and marketing partners. These third parties are obligated to protect your information.
        </p>
        <h3>Data Security</h3>
        <p>
          We implement reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
        </p>
        <h3>Your Rights</h3>
        <p>
          You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications. To exercise your rights, please contact us at nucleusdevs@gmail.com.
        </p>
        <h3>Changes to this Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our platform.
        </p>
        <p>If you have any questions about this Privacy Policy, please contact us at nucleusdevs@gmail.com.</p>

        <div className="privacy-popup-actions">
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleReject}>Reject</button>
        </div>
      </div>

      <style jsx>{`
        .privacy-popup {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 20px;
          z-index: 1000;
        }
        .privacy-popup-content {
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
          color: black;
          padding: 20px;
          border-radius: 5px;
        }
        .privacy-popup-actions {
          display: flex;
          justify-content: space-between;
        }
        .privacy-popup-actions button {
          padding: 10px 20px;
          margin-top: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPopup;
