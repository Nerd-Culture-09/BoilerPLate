// components/TermsOfService.tsx

import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="terms-of-service">
      <h1>Terms of Service</h1>
      <h2>1. Introduction</h2>
      <p>
        These Terms of Service (the Terms) govern your use of the V-Mall platform (the Platform). By accessing or using the Platform, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Platform.
      </p>

      <h2>2. User Accounts</h2>
      <p>
        2.1 To access certain features of the Platform, you may be required to create a user account.<br />
        2.2 You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.<br />
        2.3 Nucleus Pty Ltd reserves the right to suspend or terminate your account without prior notice for violation of these Terms or any illegal activity.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        3.1 This Platform and its original content, features, and functionality are owned by Nucleus Pty Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.<br />
        3.2 You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content from the Platform, except as expressly permitted by Nucleus Pty Ltd.
      </p>

      <h2>4. Product Information</h2>
      <p>
        4.1 While Nucleus Pty Ltd strives to provide accurate product information, we cannot guarantee the accuracy, completeness, or reliability of any product descriptions or other content on the Platform.<br />
        4.2 Product prices and availability are subject to change without notice.
      </p>

      <h2>5. Orders and Payments</h2>
      <p>
        5.1 By placing an order on the Platform, you represent that you are authorized to use the payment method provided.<br />
        5.2 All payments are processed securely through Stripe, which is subject to change.<br />
        5.3 Nucleus Pty Ltd reserves the right to refuse or cancel any order for any reason.
      </p>

      <h2>6. Shipping and Delivery</h2>
      <p>
        6.1 Shipping options, costs, and delivery times vary depending on the product and the shipping address.<br />
        6.2 Nucleus Pty Ltd is not responsible for delays or damages caused by shipping carriers.<br />
        6.3 Risk of loss and title for items purchased from the Platform pass to you upon delivery of the items to the shipping carrier.
      </p>

      <h2>7. Returns and Refunds</h2>
      <p>
        7.1 Return and refund policies vary by product and store. Please refer to the specific terms and conditions of each store on the Platform.<br />
        7.2 Nucleus Pty Ltd may impose restocking fees or other charges for returned items.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        8.1 TO THE MAXIMUM EXTENT PERMITTED BY LAW, NUCLEUS PTY LTD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE PLATFORM.
      </p>

      <h2>9. Dispute Resolution</h2>
      <p>
        9.1 Any disputes arising out of or in connection with these Terms shall be governed by and construed in accordance with the laws of Lesotho.
      </p>

      <h2>10. Changes to Terms of Service</h2>
      <p>
        10.1 Nucleus Pty Ltd reserves the right to modify these Terms at any time. Your continued use of the Platform following the posting of changes constitutes your acceptance of the modified Terms.
      </p>

      <h2>11. Contact Information</h2>
      <p>
        11.1 For any questions or concerns regarding these Terms, please contact us at nucleusdevs@gmail.com.
      </p>

      <style jsx>{`
        .terms-of-service {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        h1, h2 {
          margin-top: 20px;
        }
        p {
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;