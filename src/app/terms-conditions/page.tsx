import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using ZuviaOne services.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="20 January 2025">
      <p>
        Welcome to ZuviaOne. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of
        the ZuviaOne platform, website, and services (collectively, the &quot;Service&quot;) operated by{' '}
        <strong>{siteConfig.legalName}</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
        a company registered in England and Wales.
      </p>
      <p>
        By accessing or using our Service, you agree to be bound by these Terms. If you disagree with
        any part of the Terms, you may not access the Service.
      </p>

      <h2>1. Definitions</h2>
      <p>For the purposes of these Terms:</p>
      <ul>
        <li><strong>&quot;Account&quot;</strong> means a unique account created for you to access our Service.</li>
        <li><strong>&quot;Subscription&quot;</strong> means the paid plan you select to access premium features.</li>
        <li><strong>&quot;User&quot;</strong> means the individual accessing or using the Service, or the company or legal entity on behalf of which such individual is accessing or using the Service.</li>
        <li><strong>&quot;Content&quot;</strong> means any data, text, files, information, or materials you upload, submit, or transmit through the Service.</li>
        <li><strong>&quot;Business Day&quot;</strong> means any day other than a Saturday, Sunday, or public holiday in England.</li>
      </ul>

      <h2>2. Account Registration</h2>
      <h3>2.1 Account Creation</h3>
      <p>
        To use certain features of the Service, you must register for an account. When you register,
        you agree to provide accurate, current, and complete information and to update such information
        to keep it accurate, current, and complete.
      </p>
      <h3>2.2 Account Security</h3>
      <p>
        You are responsible for safeguarding your account credentials and for all activities that occur
        under your account. You must notify us immediately upon becoming aware of any breach of security
        or unauthorised use of your account at {siteConfig.contact.email}.
      </p>
      <h3>2.3 Account Requirements</h3>
      <p>
        You must be at least 18 years old and have the legal capacity to enter into a binding agreement
        to create an account. By creating an account, you represent and warrant that you meet these requirements.
      </p>

      <h2>3. Subscriptions and Payments</h2>
      <h3>3.1 Subscription Plans</h3>
      <p>
        Access to certain features of the Service requires a paid Subscription. The features available
        to you depend on the Subscription plan you select. We reserve the right to modify, discontinue,
        or change Subscription plans at any time.
      </p>
      <h3>3.2 Billing</h3>
      <p>
        Subscription fees are billed in advance on a monthly or annual basis depending on the billing
        cycle you select. Payment is due immediately upon the start of each billing period.
      </p>
      <h3>3.3 Payment Methods</h3>
      <p>
        We accept payment via credit card, debit card, and other methods as indicated at checkout.
        By providing payment information, you represent that you are authorised to use the payment method.
      </p>
      <h3>3.4 Price Changes</h3>
      <p>
        We may change our Subscription fees at any time. If we change the fees for your Subscription,
        we will provide you with at least 30 days&apos; notice before the new fees take effect. Your continued
        use of the Service after the price change constitutes your agreement to pay the new fees.
      </p>
      <h3>3.5 Refunds</h3>
      <p>
        Subscription fees are non-refundable except where required by law. If you cancel your Subscription,
        you will continue to have access to the Service until the end of your current billing period.
      </p>
      <h3>3.6 Free Trials</h3>
      <p>
        We may offer free trials for certain Subscription plans. At the end of the free trial period,
        your Subscription will automatically convert to a paid Subscription unless you cancel before
        the trial ends.
      </p>

      <h2>4. Use of the Service</h2>
      <h3>4.1 Permitted Use</h3>
      <p>
        Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable
        licence to access and use the Service for your internal business purposes.
      </p>
      <h3>4.2 Prohibited Uses</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose or in violation of any applicable laws or regulations</li>
        <li>Attempt to gain unauthorised access to any part of the Service or its related systems</li>
        <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
        <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
        <li>Use the Service to transmit any viruses, malware, or other harmful code</li>
        <li>Use the Service to send unsolicited communications (spam)</li>
        <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
        <li>Use the Service in any manner that could damage, disable, or impair the Service</li>
        <li>Use automated means to access or use the Service without our express written permission</li>
        <li>Resell, sublicense, or redistribute the Service without our express written permission</li>
      </ul>

      <h2>5. Your Content</h2>
      <h3>5.1 Ownership</h3>
      <p>
        You retain all ownership rights in Content you upload to the Service. We do not claim any
        ownership rights in your Content.
      </p>
      <h3>5.2 Licence to Us</h3>
      <p>
        By uploading Content to the Service, you grant us a worldwide, non-exclusive, royalty-free
        licence to use, store, copy, and display your Content solely to the extent necessary to
        provide and improve the Service.
      </p>
      <h3>5.3 Content Responsibility</h3>
      <p>
        You are solely responsible for your Content and the consequences of uploading it. You represent
        and warrant that you own or have the necessary rights to your Content and that your Content
        does not infringe any third-party rights.
      </p>
      <h3>5.4 Content Backup</h3>
      <p>
        While we take reasonable measures to protect your Content, we are not responsible for any
        loss or corruption of Content. You are responsible for maintaining your own backup of your Content.
      </p>

      <h2>6. Intellectual Property</h2>
      <h3>6.1 Our Intellectual Property</h3>
      <p>
        The Service, including its original content, features, functionality, and design, is owned
        by {siteConfig.legalName} and is protected by copyright, trademark, and other intellectual
        property laws. Our trademarks may not be used without our prior written consent.
      </p>
      <h3>6.2 Feedback</h3>
      <p>
        If you provide us with any feedback, suggestions, or ideas regarding the Service, you grant
        us the right to use such feedback without restriction and without compensation to you.
      </p>

      <h2>7. Third-Party Services</h2>
      <p>
        The Service may integrate with or contain links to third-party services. We are not responsible
        for the content, terms, or practices of any third-party services. Your use of third-party
        services is governed by their respective terms and policies.
      </p>

      <h2>8. Confidentiality</h2>
      <p>
        We will treat your Content and account information as confidential and will not disclose it
        to third parties except as necessary to provide the Service, comply with legal obligations,
        or protect our rights.
      </p>

      <h2>9. Data Protection</h2>
      <p>
        Our collection and use of personal data is governed by our Privacy Policy, which is incorporated
        into these Terms by reference. By using the Service, you consent to our collection and use of
        data as described in the Privacy Policy.
      </p>

      <h2>10. Service Availability</h2>
      <h3>10.1 Availability</h3>
      <p>
        We strive to maintain high availability of the Service but do not guarantee uninterrupted access.
        The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond
        our control.
      </p>
      <h3>10.2 Modifications</h3>
      <p>
        We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at
        any time with or without notice. We will not be liable to you or any third party for any
        modification, suspension, or discontinuation of the Service.
      </p>

      <h2>11. Limitation of Liability</h2>
      <h3>11.1 Disclaimer of Warranties</h3>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
      <h3>11.2 Limitation of Liability</h3>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL {siteConfig.legalName.toUpperCase()},
        ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA,
        USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
      </p>
      <h3>11.3 Cap on Liability</h3>
      <p>
        OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR
        USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING
        THE CLAIM.
      </p>
      <h3>11.4 Exceptions</h3>
      <p>
        Nothing in these Terms shall limit or exclude our liability for death or personal injury caused
        by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be
        limited or excluded by law.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless {siteConfig.legalName} and its officers,
        directors, employees, agents, and affiliates from and against any claims, liabilities, damages,
        losses, and expenses (including reasonable legal fees) arising out of or in connection with
        your use of the Service, your Content, or your violation of these Terms.
      </p>

      <h2>13. Termination</h2>
      <h3>13.1 Termination by You</h3>
      <p>
        You may terminate your account at any time by cancelling your Subscription through your account
        settings or by contacting us at {siteConfig.contact.email}. Upon termination, your right to
        use the Service will immediately cease.
      </p>
      <h3>13.2 Termination by Us</h3>
      <p>
        We may terminate or suspend your account immediately, without prior notice or liability, if
        you breach these Terms or for any other reason at our sole discretion.
      </p>
      <h3>13.3 Effect of Termination</h3>
      <p>
        Upon termination, your right to use the Service will immediately cease. We may delete your
        Content within a reasonable period after termination. Provisions of these Terms that by their
        nature should survive termination shall survive, including ownership provisions, warranty
        disclaimers, indemnity, and limitations of liability.
      </p>
      <h3>13.4 Data Export</h3>
      <p>
        Upon request made before or within 30 days after termination, we will provide you with an
        export of your Content in a commonly used format.
      </p>

      <h2>14. Dispute Resolution</h2>
      <h3>14.1 Informal Resolution</h3>
      <p>
        Before initiating any legal proceedings, you agree to contact us at {siteConfig.contact.email}
        to attempt to resolve any dispute informally. We will attempt to resolve the dispute within
        30 days.
      </p>
      <h3>14.2 Governing Law</h3>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of England and Wales,
        without regard to its conflict of law provisions.
      </p>
      <h3>14.3 Jurisdiction</h3>
      <p>
        Any disputes arising out of or relating to these Terms or the Service shall be subject to the
        exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>15. General Provisions</h2>
      <h3>15.1 Entire Agreement</h3>
      <p>
        These Terms, together with our Privacy Policy, constitute the entire agreement between you and
        {siteConfig.legalName} regarding the Service and supersede all prior agreements and understandings.
      </p>
      <h3>15.2 Severability</h3>
      <p>
        If any provision of these Terms is found to be unenforceable or invalid, that provision shall
        be limited or eliminated to the minimum extent necessary, and the remaining provisions shall
        remain in full force and effect.
      </p>
      <h3>15.3 Waiver</h3>
      <p>
        Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of
        such right or provision.
      </p>
      <h3>15.4 Assignment</h3>
      <p>
        You may not assign or transfer these Terms or your rights under them without our prior written
        consent. We may assign our rights and obligations under these Terms without restriction.
      </p>
      <h3>15.5 Notices</h3>
      <p>
        We may provide notices to you via email, through the Service, or by posting on our website.
        You may provide notices to us at {siteConfig.contact.email}.
      </p>

      <h2>16. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. If we make material changes, we will
        notify you by email or through the Service at least 30 days before the changes take effect.
        Your continued use of the Service after the effective date of the revised Terms constitutes
        your acceptance of the changes.
      </p>

      <h2>17. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li><strong>Company:</strong> {siteConfig.legalName}</li>
        <li><strong>Email:</strong> {siteConfig.contact.email}</li>
        <li><strong>Phone:</strong> {siteConfig.contact.phone}</li>
      </ul>
    </LegalLayout>
  );
}
