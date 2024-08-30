import { NextPage } from 'next';
import Link from 'next/link';

const Privacy: NextPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="mb-6">
                <h1 className="text-3xl font-bold">Terms of Service</h1>
            </header>
            <main>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">1. Introduction</h2>
                    <p>
                        These Terms of Service (the Terms) govern your use of the V-Mall platform (the Platform). By accessing or using the Platform, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Platform.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">2. User Accounts</h2>
                    <p>
                        2.1 To access certain features of the Platform, you may be required to create a user account.
                    </p>
                    <p>
                        2.2 You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                    <p>
                        2.3 Nucleus Pty Ltd reserves the right to suspend or terminate your account without prior notice for violation of these Terms or any illegal activity.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
                    <p>
                        3.1 This Platform and its original content, features, and functionality are owned by Nucleus Pty Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>
                    <p>
                        3.2 You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content from the Platform, except as expressly permitted by Nucleus Pty Ltd.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">4. Product Information</h2>
                    <p>
                        4.1 While Nucleus Pty Ltd strives to provide accurate product information, we cannot guarantee the accuracy, completeness, or reliability of any product descriptions or other content on the Platform.
                    </p>
                    <p>
                        4.2 Product prices and availability are subject to change without notice.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">5. Orders and Payments</h2>
                    <p>
                        5.1 By placing an order on the Platform, you represent that you are authorized to use the payment method provided.
                    </p>
                    <p>
                        5.2 All payments are processed securely through Stripe, which is subject to change.
                    </p>
                    <p>
                        5.3 Nucleus Pty Ltd reserves the right to refuse or cancel any order for any reason.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">6. Shipping and Delivery</h2>
                    <p>
                        6.1 Shipping options, costs, and delivery times vary depending on the product and the shipping address.
                    </p>
                    <p>
                        6.2 Nucleus Pty Ltd is not responsible for delays or damages caused by shipping carriers.
                    </p>
                    <p>
                        6.3 Risk of loss and title for items purchased from the Platform pass to you upon delivery of the items to the shipping carrier.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">7. Returns and Refunds</h2>
                    <p>
                        7.1 Return and refund policies vary by product and store. Please refer to the specific terms and conditions of each store on the Platform.
                    </p>
                    <p>
                        7.2 Nucleus Pty Ltd may impose restocking fees or other charges for returned items.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
                    <p>
                        8.1 TO THE MAXIMUM EXTENT PERMITTED BY LAW, NUCLEUS PTY LTD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE PLATFORM.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">9. Dispute Resolution</h2>
                    <p>
                        9.1 Any disputes arising out of or in connection with these Terms shall be governed by and construed in accordance with the laws of Lesotho.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">10. Changes to Terms of Service</h2>
                    <p>
                        10.1 Nucleus Pty Ltd reserves the right to modify these Terms at any time. Your continued use of the Platform following the posting of changes constitutes your acceptance of the modified Terms.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">11. Contact Information</h2>
                    <p>
                        11.1 For any questions or concerns regarding these Terms, please contact us at <a href="mailto:nucleusdevs@gmail.com" className="text-blue-600 hover:underline">nucleusdevs@gmail.com</a>.
                    </p>
                </section>
                <section className="mb-8">
                    <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    <h2 className="text-2xl font-semibold">1. Introduction</h2>
                    <p>
                        This Privacy Policy outlines how your personal information is collected, used, shared, and protected by Nucleus Pty Ltd when you use our e-commerce Virtual Mall Of Lesotho platform. We respect your privacy and are committed to safeguarding your personal information.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">2. Information Collection</h2>
                    <p>
                        2.1 We collect information about you when you use our platform. This information may include:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Personal Information: Names, email address, phone number, shipping address, and billing information.</li>
                        <li>Account Information: Username, password, and security questions.</li>
                        <li>Order Information: Products purchased, purchase history, and order status.</li>
                        <li>Payment Information: Credit card or other payment method details.</li>
                        <li>Device Information: IP address, browser type, and operating system.</li>
                        <li>Usage Information: Information about how you use our platform, such as pages visited and features used.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">3. Use of Information</h2>
                    <p>
                        3.1 We use your information for the following purposes:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Processing orders: To fulfill your orders and process payments.</li>
                        <li>Customer service: To provide customer support and assistance.</li>
                        <li>Communication: To send you order confirmations, shipping updates, and promotional offers.</li>
                        <li>Marketing: To personalize your shopping experience and offer relevant products and services.</li>
                        <li>Fraud prevention: To protect our platform and customers from fraudulent activity.</li>
                        <li>Improving our platform: To analyze user behavior and enhance our platform&apos;s features.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">4. Data Sharing</h2>
                    <p>
                        4.1 We may share your information with third-party service providers who assist us in operating our platform, such as payment processors, shipping carriers, and marketing partners. These third parties are obligated to protect your information.
                    </p>
                    <p>
                        4.2 We may also share your information if required by law or to protect our rights or the rights of others.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">5. Data Security</h2>
                    <p>
                        5.1 We implement reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">6. Data Retention</h2>
                    <p>
                        6.1 We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">7. Your Rights</h2>
                    <p>
                        7.1 You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications. To exercise your rights, please contact us at <a href="mailto:nucleusdevs@gmail.com" className="text-blue-600 hover:underline">nucleusdevs@gmail.com</a>.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">8. Children&apos;s Privacy</h2>
                    <p>
                        8.1 Our platform is not intended for children under the age of 13. We do not knowingly collect personal information from children.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">9. Changes to this Privacy Policy</h2>
                    <p>
                        9.1 We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our platform.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">10. Contact Us</h2>
                    <p>
                        10.1 If you have any questions about this Privacy Policy, please contact us at <a href="mailto:nucleusdevs@gmail.com" className="text-blue-600 hover:underline">nucleusdevs@gmail.com</a>.
                    </p>
                </section>
            </main>
            <footer className="mt-8">
                <Link href="/" legacyBehavior={true}>
                    <a className="text-blue-600 hover:underline">Back to Home</a>
                </Link>
            </footer>
        </div>
    );
};

export default Privacy;