import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ZuviaOne - how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="20 January 2025">
      <p>
        <strong>{siteConfig.legalName}</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed
        to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our ZuviaOne platform, website, and services
        (collectively, the &quot;Service&quot;).
      </p>
      <p>
        We are registered in England and Wales and comply with the UK General Data Protection Regulation
        (UK GDPR), the Data Protection Act 2018, and the Privacy and Electronic Communications Regulations (PECR).
      </p>
      <p>
        Please read this Privacy Policy carefully. By using the Service, you consent to the collection
        and use of your information as described in this policy.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        {siteConfig.legalName} is the data controller responsible for your personal data. If you have
        any questions about this Privacy Policy or our data practices, you can contact us at:
      </p>
      <ul>
        <li><strong>Email:</strong> {siteConfig.contact.email}</li>
        <li><strong>Phone:</strong> {siteConfig.contact.phone}</li>
      </ul>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Information You Provide</h3>
      <p>We collect information you provide directly to us, including:</p>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, phone number, company name, job title, and password when you create an account</li>
        <li><strong>Billing Information:</strong> Payment card details, billing address, and transaction history (payment details are processed securely by our payment processor, Stripe)</li>
        <li><strong>Business Data:</strong> Customer information, appointments, invoices, and other data you input into the Service for your business operations</li>
        <li><strong>Communications:</strong> Messages, feedback, and correspondence you send to us or through the Service</li>
        <li><strong>Support Requests:</strong> Information you provide when contacting our support team</li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <p>When you use the Service, we automatically collect certain information, including:</p>
      <ul>
        <li><strong>Device Information:</strong> Device type, operating system, browser type, and unique device identifiers</li>
        <li><strong>Usage Information:</strong> Pages viewed, features used, actions taken, time spent, and navigation patterns</li>
        <li><strong>Log Data:</strong> IP address, access times, referring URLs, and error logs</li>
        <li><strong>Location Data:</strong> General location based on IP address; precise location only if you enable GPS tracking features</li>
        <li><strong>Cookies and Tracking:</strong> Information collected through cookies, pixels, and similar technologies (see Section 8)</li>
      </ul>

      <h3>2.3 Information from Third Parties</h3>
      <p>We may receive information about you from third parties, including:</p>
      <ul>
        <li><strong>Integration Partners:</strong> When you connect third-party services (e.g., Google Calendar, accounting software)</li>
        <li><strong>Payment Processors:</strong> Transaction confirmations and fraud prevention data from Stripe</li>
        <li><strong>Analytics Providers:</strong> Aggregated usage and performance data</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <h3>3.1 To Provide the Service</h3>
      <p>We use your information to:</p>
      <ul>
        <li>Create and manage your account</li>
        <li>Process transactions and send related information</li>
        <li>Provide customer support and respond to your requests</li>
        <li>Enable features you request, such as scheduling, invoicing, and communication tools</li>
        <li>Send transactional notifications (appointment reminders, invoice alerts, etc.)</li>
      </ul>

      <h3>3.2 To Improve and Develop</h3>
      <p>We use your information to:</p>
      <ul>
        <li>Analyse usage patterns to improve the Service</li>
        <li>Develop new features and functionality</li>
        <li>Conduct research and analytics</li>
        <li>Fix bugs and troubleshoot issues</li>
      </ul>

      <h3>3.3 To Communicate With You</h3>
      <p>We use your information to:</p>
      <ul>
        <li>Send service-related announcements and updates</li>
        <li>Respond to your comments, questions, and requests</li>
        <li>Send marketing communications (with your consent, where required)</li>
        <li>Provide information about new features, products, or promotions</li>
      </ul>

      <h3>3.4 For Security and Compliance</h3>
      <p>We use your information to:</p>
      <ul>
        <li>Detect, prevent, and address fraud, security issues, and technical problems</li>
        <li>Enforce our Terms and Conditions</li>
        <li>Comply with legal obligations</li>
        <li>Protect the rights, property, and safety of our users and the public</li>
      </ul>

      <h2>4. Legal Basis for Processing (UK GDPR)</h2>
      <p>We process your personal data under the following legal bases:</p>
      <ul>
        <li><strong>Contract:</strong> Processing necessary to perform our contract with you (providing the Service)</li>
        <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests (improving the Service, marketing, security) where these are not overridden by your rights</li>
        <li><strong>Consent:</strong> Where you have given specific consent for processing (e.g., marketing emails)</li>
        <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
      </ul>

      <h2>5. How We Share Your Information</h2>
      <h3>5.1 Service Providers</h3>
      <p>
        We share your information with third-party service providers who perform services on our behalf, including:
      </p>
      <ul>
        <li><strong>Payment Processing:</strong> Stripe for secure payment handling</li>
        <li><strong>Cloud Hosting:</strong> Infrastructure providers for data storage and processing</li>
        <li><strong>Communication Services:</strong> Email and SMS delivery providers</li>
        <li><strong>Analytics:</strong> Tools to help us understand Service usage</li>
        <li><strong>Customer Support:</strong> Help desk and ticketing systems</li>
      </ul>
      <p>
        These providers are contractually obligated to protect your information and may only use it
        to provide services to us.
      </p>

      <h3>5.2 Business Transfers</h3>
      <p>
        If we are involved in a merger, acquisition, or sale of assets, your information may be
        transferred as part of that transaction. We will notify you of any change in ownership or
        uses of your information.
      </p>

      <h3>5.3 Legal Requirements</h3>
      <p>We may disclose your information if required to do so by law or in response to:</p>
      <ul>
        <li>Valid legal process (court orders, subpoenas)</li>
        <li>Government requests</li>
        <li>To protect our rights, privacy, safety, or property</li>
        <li>To enforce our Terms and Conditions</li>
        <li>To protect against legal liability</li>
      </ul>

      <h3>5.4 With Your Consent</h3>
      <p>We may share your information with third parties when you give us explicit consent to do so.</p>

      <h3>5.5 Aggregated Data</h3>
      <p>
        We may share aggregated, anonymised data that cannot reasonably be used to identify you for
        research, marketing, analytics, and other purposes.
      </p>

      <h2>6. Data Retention</h2>
      <p>We retain your personal data for as long as necessary to:</p>
      <ul>
        <li>Provide the Service and maintain your account</li>
        <li>Comply with legal obligations (e.g., tax and accounting requirements)</li>
        <li>Resolve disputes and enforce our agreements</li>
        <li>Support business operations and improve our services</li>
      </ul>
      <p>
        When you delete your account, we will delete or anonymise your personal data within 90 days,
        except where we are required to retain certain information for legal or legitimate business purposes.
      </p>
      <p>Specific retention periods:</p>
      <ul>
        <li><strong>Account Data:</strong> Retained while your account is active and for 90 days after deletion</li>
        <li><strong>Billing Records:</strong> Retained for 7 years for tax and accounting purposes</li>
        <li><strong>Communication Logs:</strong> Retained for 2 years</li>
        <li><strong>Usage Analytics:</strong> Retained in anonymised form indefinitely</li>
      </ul>

      <h2>7. Your Rights</h2>
      <p>Under the UK GDPR, you have the following rights regarding your personal data:</p>
      <h3>7.1 Right of Access</h3>
      <p>
        You have the right to request a copy of the personal data we hold about you. We will provide
        this within one month of your request.
      </p>
      <h3>7.2 Right to Rectification</h3>
      <p>
        You have the right to request that we correct any inaccurate or incomplete personal data we
        hold about you.
      </p>
      <h3>7.3 Right to Erasure</h3>
      <p>
        You have the right to request that we delete your personal data in certain circumstances,
        such as when the data is no longer necessary for the purposes for which it was collected.
      </p>
      <h3>7.4 Right to Restrict Processing</h3>
      <p>
        You have the right to request that we restrict the processing of your personal data in certain
        circumstances.
      </p>
      <h3>7.5 Right to Data Portability</h3>
      <p>
        You have the right to receive your personal data in a structured, commonly used, machine-readable
        format and to transmit it to another controller.
      </p>
      <h3>7.6 Right to Object</h3>
      <p>
        You have the right to object to processing of your personal data based on legitimate interests
        or for direct marketing purposes.
      </p>
      <h3>7.7 Right to Withdraw Consent</h3>
      <p>
        Where we process your data based on consent, you have the right to withdraw that consent at
        any time without affecting the lawfulness of processing before withdrawal.
      </p>
      <h3>7.8 Exercising Your Rights</h3>
      <p>
        To exercise any of these rights, please contact us at {siteConfig.contact.email}. We will
        respond to your request within one month. We may ask you to verify your identity before
        processing your request.
      </p>
      <h3>7.9 Right to Complain</h3>
      <p>
        You have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if
        you believe your data protection rights have been violated. You can contact the ICO at{' '}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
      </p>

      <h2>8. Cookies and Tracking Technologies</h2>
      <h3>8.1 What Are Cookies</h3>
      <p>
        Cookies are small text files stored on your device when you visit our website. They help us
        provide and improve the Service.
      </p>
      <h3>8.2 Types of Cookies We Use</h3>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for the Service to function (authentication, security, preferences). Cannot be disabled.</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the Service. You can opt out of these.</li>
        <li><strong>Functional Cookies:</strong> Remember your preferences and settings. You can opt out of these.</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements. You can opt out of these.</li>
      </ul>
      <h3>8.3 Managing Cookies</h3>
      <p>
        You can manage your cookie preferences through your browser settings. Please note that disabling
        certain cookies may affect the functionality of the Service.
      </p>

      <h2>9. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries outside the UK. When we
        transfer data internationally, we ensure appropriate safeguards are in place, including:
      </p>
      <ul>
        <li>Standard Contractual Clauses approved by the UK ICO</li>
        <li>Transfers to countries with adequate data protection laws</li>
        <li>Other legally recognised transfer mechanisms</li>
      </ul>

      <h2>10. Data Security</h2>
      <p>
        We implement appropriate technical and organisational measures to protect your personal data,
        including:
      </p>
      <ul>
        <li>Encryption of data in transit (TLS/SSL) and at rest</li>
        <li>Regular security assessments and penetration testing</li>
        <li>Access controls and authentication requirements</li>
        <li>Employee training on data protection</li>
        <li>Incident response procedures</li>
        <li>Regular backups and disaster recovery planning</li>
      </ul>
      <p>
        While we take reasonable measures to protect your data, no method of transmission or storage
        is completely secure. We cannot guarantee absolute security.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        The Service is not intended for children under 18 years of age. We do not knowingly collect
        personal data from children. If we learn we have collected personal data from a child, we
        will delete it promptly. If you believe we have collected data from a child, please contact
        us at {siteConfig.contact.email}.
      </p>

      <h2>12. Third-Party Links</h2>
      <p>
        The Service may contain links to third-party websites or services. We are not responsible for
        the privacy practices of these third parties. We encourage you to read the privacy policies
        of any third-party services you use.
      </p>

      <h2>13. Marketing Communications</h2>
      <p>
        We may send you marketing communications about our products, services, and promotions. You can
        opt out of marketing communications at any time by:
      </p>
      <ul>
        <li>Clicking the &quot;unsubscribe&quot; link in any marketing email</li>
        <li>Updating your communication preferences in your account settings</li>
        <li>Contacting us at {siteConfig.contact.email}</li>
      </ul>
      <p>
        Please note that even if you opt out of marketing communications, we may still send you
        transactional messages related to your account and the Service.
      </p>

      <h2>14. Data Processing for Business Customers</h2>
      <p>
        When you use the Service to store and process data about your customers (e.g., contact information,
        appointment data), you are the data controller for that data, and we act as a data processor on
        your behalf. In this capacity:
      </p>
      <ul>
        <li>We process your customers&apos; data only according to your instructions</li>
        <li>We maintain appropriate security measures</li>
        <li>We assist you in responding to data subject requests</li>
        <li>We notify you of any data breaches affecting your customers&apos; data</li>
      </ul>
      <p>
        You are responsible for ensuring you have the appropriate legal basis to collect and process
        your customers&apos; data and for providing them with appropriate privacy notices.
      </p>

      <h2>15. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make material changes, we will
        notify you by email or through the Service at least 30 days before the changes take effect.
        Your continued use of the Service after the effective date constitutes your acceptance of
        the revised Privacy Policy.
      </p>

      <h2>16. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
      <ul>
        <li><strong>Company:</strong> {siteConfig.legalName}</li>
        <li><strong>Email:</strong> {siteConfig.contact.email}</li>
        <li><strong>Phone:</strong> {siteConfig.contact.phone}</li>
      </ul>
      <p>
        For data protection enquiries, you may also contact our Data Protection Officer at{' '}
        {siteConfig.contact.email}.
      </p>
    </LegalLayout>
  );
}
