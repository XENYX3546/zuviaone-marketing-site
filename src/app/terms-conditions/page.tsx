import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using ZuviaOne services.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="January 2026">
      <p>
        Welcome to ZuviaOne. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of
        the ZuviaOne platform, website, mobile applications, and services (collectively, the &quot;Service&quot;)
        operated by <strong>{siteConfig.legalName}</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
        a company registered in England and Wales.
      </p>
      <p>
        By accessing or using our Service, you agree to be bound by these Terms. If you disagree with
        any part of the Terms, you may not access the Service.
      </p>

      {/* Section 1 */}
      <h2>1. Definitions</h2>
      <p>For the purposes of these Terms:</p>

      <div className="definition">
        <p><strong>&quot;Account&quot;</strong> — A unique account created for you to access our Service, which may be a Business Account, Staff Account, or Customer Portal Account.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;AI Features&quot;</strong> — The artificial intelligence and machine learning capabilities within the Service, including the AI Agent, AI Chatbot, email classification, sentiment analysis, and content generation.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Automation&quot;</strong> — Workflow automation features that allow you to create automated sequences of actions triggered by events within the Service.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Business&quot;</strong> — A legal entity or sole trader that subscribes to the Service to manage their operations.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Business Account&quot;</strong> — The primary account held by the Business owner with full administrative access.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Business Day&quot;</strong> — Any day other than a Saturday, Sunday, or public holiday in England.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Content&quot;</strong> — Any data, text, files, information, communications, recordings, or materials you upload, submit, transmit, or generate through the Service.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Credits&quot;</strong> — Consumable units used to access certain features including AI Features, SMS messaging, and email sending.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Customer&quot;</strong> — A third-party client or customer of a Business who accesses the Customer Portal.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Customer Portal&quot;</strong> — The self-service portal where Customers can view their bookings, invoices, quotes, and account information.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Embeddable Widgets&quot;</strong> — Components that can be embedded on third-party websites, including quote request forms, chatbots, booking forms, and service catalogues.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Staff Member&quot;</strong> — An individual authorised by a Business to access and use the Service on their behalf.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Stripe Connect&quot;</strong> — Payment processing functionality that enables Businesses to accept payments from their Customers.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;Subscription&quot;</strong> — The paid plan you select to access the Service, including the base subscription and any add-on bundles.</p>
      </div>
      <div className="definition">
        <p><strong>&quot;User&quot;</strong> — Any individual accessing or using the Service, including Business owners, Staff Members, and Customers.</p>
      </div>

      {/* Section 2 */}
      <h2>2. Account Registration and Types</h2>

      <h3>2.1 Account Creation</h3>
      <p>
        To use certain features of the Service, you must register for an account. When you register,
        you agree to provide accurate, current, and complete information and to update such information
        to keep it accurate, current, and complete.
      </p>

      <h3>2.2 Account Types</h3>
      <p><strong>Business Accounts</strong></p>
      <p>
        The primary account holder (Business owner) has full administrative access to all features and
        is responsible for the Business&apos;s use of the Service, including all actions taken by Staff Members.
      </p>

      <p><strong>Staff Accounts</strong></p>
      <p>
        Business owners may invite Staff Members to access the Service. Staff Members are granted
        permissions based on roles assigned by the Business owner. The Business owner is responsible for:
      </p>
      <ul>
        <li>Managing Staff Member access and permissions</li>
        <li>Ensuring Staff Members comply with these Terms</li>
        <li>All actions taken by Staff Members within the Service</li>
        <li>Promptly revoking access when Staff Members leave the organisation</li>
      </ul>

      <p><strong>Customer Portal Accounts</strong></p>
      <p>
        Businesses may enable Customer Portal access for their Customers. Customers can only access
        their own bookings, invoices, quotes, and account information related to that specific Business.
      </p>

      <h3>2.3 Account Security</h3>
      <p>
        You are responsible for safeguarding your account credentials and for all activities that occur
        under your account. You must notify us immediately upon becoming aware of any breach of security
        or unauthorised use of your account at {siteConfig.contact.email}.
      </p>

      <h3>2.4 Account Requirements</h3>
      <p>
        You must be at least 18 years old and have the legal capacity to enter into a binding agreement
        to create an account.
      </p>

      <h3>2.5 Multi-Tenant Architecture</h3>
      <p>
        The Service operates on a multi-tenant architecture where each Business&apos;s data is logically separated.
        You acknowledge that while we implement appropriate security measures, multiple Businesses share the
        same infrastructure.
      </p>

      {/* Section 3 */}
      <h2>3. Subscriptions and Payments</h2>

      <h3>3.1 Subscription Plans</h3>
      <p>
        Access to the Service requires a paid Subscription after any applicable trial period.
        The features available depend on your Subscription plan:
      </p>
      <ul>
        <li>A base subscription fee that includes a specified number of Staff seats</li>
        <li>Additional fees for extra Staff seats beyond the included allocation</li>
        <li>Optional add-on bundles for enhanced features (e.g., Optimisation Bundle, Marketing Bundle)</li>
      </ul>
      <p>We reserve the right to modify, discontinue, or change Subscription plans with appropriate notice.</p>

      <h3>3.2 Billing</h3>
      <p>
        Subscription fees are billed in advance on a monthly or annual basis. Payment is due immediately
        upon the start of each billing period. Changes to Staff seat counts are prorated within the billing cycle.
      </p>

      <h3>3.3 Payment Methods</h3>
      <p>
        We accept credit cards, debit cards, and other methods as indicated at checkout. All payments
        are processed securely through Stripe.
      </p>

      <h3>3.4 Price Changes</h3>
      <p>
        We may change Subscription fees at any time with at least 30 days&apos; notice before new fees take effect.
        Continued use after a price change constitutes agreement to pay the new fees.
      </p>

      <h3>3.5 Refunds</h3>
      <p>
        Subscription fees are non-refundable except where required by law. If you cancel, you will have
        access until the end of your current billing period.
      </p>

      <h3>3.6 Free Trials</h3>
      <div className="info-box">
        <p><strong>30-Day Free Trial</strong></p>
        <p>We offer a 30-day free trial for new Businesses. During the trial:</p>
        <ul>
          <li>Full access to Service features</li>
          <li>One-time allocation of Credits for trial use</li>
          <li>No payment information required to start</li>
          <li>Account placed in read-only mode at trial end unless you subscribe</li>
        </ul>
        <p>The trial does not automatically convert to a paid subscription without your explicit action.</p>
      </div>

      <h3>3.7 Subscription Enforcement</h3>
      <p>If your Subscription lapses, expires, or payment fails:</p>
      <ul>
        <li>Account may be placed in read-only mode</li>
        <li>Existing data remains accessible for a grace period</li>
        <li>Continued non-payment may result in account suspension or termination</li>
        <li>Reasonable notice provided before access restrictions</li>
      </ul>

      {/* Section 4 */}
      <h2>4. Credits and Usage-Based Billing</h2>

      <h3>4.1 Credit System</h3>
      <p>Certain features consume Credits:</p>
      <ul>
        <li><strong>AI Features</strong> — charged per token processed</li>
        <li><strong>SMS messaging</strong> — charged per message segment</li>
        <li><strong>Email sending</strong> — charged per email</li>
        <li><strong>Automation executions</strong> — charged per run</li>
        <li><strong>VoIP calls</strong> — charged per minute</li>
      </ul>

      <h3>4.2 Credit Allocation</h3>
      <p>
        Your Subscription includes a monthly Credit allocation that refreshes each billing period.
        Unused monthly Credits do not roll over.
      </p>

      <h3>4.3 Purchased Credits</h3>
      <p>You may purchase additional Credits at any time. Purchased Credits:</p>
      <ul>
        <li>Valid for 12 months from purchase date</li>
        <li>Consumed after monthly Credits are exhausted</li>
        <li>Expire if not used within validity period</li>
        <li>Non-refundable except where required by law</li>
      </ul>

      <h3>4.4 Auto Top-Up</h3>
      <p>
        Enable automatic Credit top-up when your balance falls below a threshold you specify.
        Configure the Credit pack, trigger threshold, and maximum auto top-ups per month.
        Disable at any time through account settings.
      </p>

      <h3>4.5 Credit Overdraft</h3>
      <p>
        We may allow limited overdraft for essential operations (transactional emails and SMS).
        Overdraft balance is deducted from your next allocation or invoiced separately.
      </p>

      <h3>4.6 Usage Monitoring</h3>
      <p>
        Monitor Credit usage and balance through the Service dashboard. We send notifications when
        your balance is low.
      </p>

      {/* Section 5 */}
      <h2>5. AI Features and Machine Learning</h2>

      <h3>5.1 AI Services</h3>
      <p>The Service includes AI-powered features:</p>
      <ul>
        <li><strong>AI Agent</strong> — Intelligent assistant for questions, data analysis, and task execution</li>
        <li><strong>AI Chatbot</strong> — Conversational interface for websites, customer engagement, and lead generation</li>
        <li><strong>Email Classification</strong> — Automatic categorisation and prioritisation</li>
        <li><strong>Sentiment Analysis</strong> — Detection of sentiment and intent in communications</li>
        <li><strong>Content Generation</strong> — AI-assisted drafting of emails, messages, and content</li>
        <li><strong>Semantic Search</strong> — Intelligent search across your business data</li>
      </ul>

      <h3>5.2 Third-Party AI Providers</h3>
      <div className="info-box">
        <p>AI Features are powered by third-party providers including OpenAI. By using AI Features, you acknowledge:</p>
        <ul>
          <li>Your Content may be processed by these third-party AI providers</li>
          <li>Data sent to AI providers is subject to their terms and privacy policies</li>
          <li>We implement safeguards but cannot guarantee complete confidentiality</li>
          <li>Avoid inputting highly sensitive data (financial account numbers, health information) unless necessary</li>
        </ul>
      </div>

      <h3>5.3 AI Accuracy and Limitations</h3>
      <p>AI Features assist you but are not infallible. You acknowledge:</p>
      <ul>
        <li>AI-generated content may contain errors, inaccuracies, or inappropriate suggestions</li>
        <li>You must review and verify all AI-generated content before use</li>
        <li>AI Features should not be the sole basis for important business decisions</li>
        <li>AI responses do not constitute professional advice</li>
        <li>The AI may occasionally produce unexpected or incorrect results</li>
      </ul>

      <h3>5.4 AI-Generated Content Ownership</h3>
      <p>
        Content generated by AI Features based on your prompts and data is considered your Content,
        subject to Section 11. Similar content may be generated for other users with similar prompts.
      </p>

      <h3>5.5 Prohibited AI Uses</h3>
      <p>You agree not to use AI Features to:</p>
      <ul>
        <li>Generate illegal, harmful, or discriminatory content</li>
        <li>Extract training data or reverse engineer AI models</li>
        <li>Circumvent AI safety measures or content policies</li>
        <li>Generate spam, phishing content, or misleading information</li>
        <li>Impersonate individuals or create deepfake content</li>
      </ul>

      {/* Section 6 */}
      <h2>6. Communication Services</h2>

      <h3>6.1 Email Services</h3>
      <p>
        Email functionality powered by SendGrid, Resend, and Gmail API integration. You may send
        emails, sync connected accounts, and create templates. You are responsible for compliance
        with applicable laws including GDPR, CAN-SPAM, and PECR.
      </p>

      <h3>6.2 Gmail Integration</h3>
      <p>If you connect your Gmail account:</p>
      <ul>
        <li>We access using OAuth authentication</li>
        <li>We may read, send, and manage emails on your behalf</li>
        <li>Email content may be indexed for search and AI analysis</li>
        <li>Disconnect at any time through your settings</li>
      </ul>

      <h3>6.3 SMS Messaging</h3>
      <p>SMS messaging powered by Twilio. When using SMS:</p>
      <ul>
        <li>Obtain proper consent from recipients before sending</li>
        <li>Marketing SMS requires explicit opt-in consent</li>
        <li>Honour opt-out requests promptly</li>
        <li>Fees charged in Credits per message segment</li>
        <li>Comply with telecommunications regulations (TCPA, GDPR, local laws)</li>
      </ul>
      <p>We provide opt-out management tools, but you remain responsible for compliance.</p>

      <h3>6.4 VoIP and Voice Calling</h3>
      <p>Voice calling features powered by Twilio:</p>
      <ul>
        <li>Calls may be recorded for quality assurance</li>
        <li>Inform participants if recording where required by law</li>
        <li>Recordings stored securely and accessible through the Service</li>
        <li>Usage charged in Credits based on duration</li>
        <li><strong>Important:</strong> Emergency services (999/112) cannot be reliably reached</li>
      </ul>

      <h3>6.5 Call Recording and Transcription</h3>
      <p>If you enable call recording:</p>
      <ul>
        <li>You are solely responsible for obtaining consent where required</li>
        <li>Recordings may be transcribed using AI (Google Cloud or OpenAI Whisper)</li>
        <li>Transcriptions provided for convenience and may contain errors</li>
        <li>Storage duration specified in your data retention settings</li>
        <li>Delete recordings at any time through the Service</li>
      </ul>

      <h3>6.6 Internal Messaging</h3>
      <p>Internal team chat messages:</p>
      <ul>
        <li>Stored within the Service</li>
        <li>May be visible to Staff Members with appropriate permissions</li>
        <li>Subject to your Business&apos;s data retention policies</li>
        <li>Should not be used for highly confidential communications</li>
      </ul>

      {/* Section 7 */}
      <h2>7. Embeddable Widgets</h2>

      <h3>7.1 Widget Types</h3>
      <p>Create and embed widgets on third-party websites:</p>
      <ul>
        <li>Quote request forms</li>
        <li>AI Chatbots</li>
        <li>Booking forms</li>
        <li>Service catalogues</li>
        <li>Shopping carts</li>
        <li>FAQ and business hours displays</li>
      </ul>

      <h3>7.2 Data Collection Through Widgets</h3>
      <p>When embedding widgets on third-party websites:</p>
      <ul>
        <li>Data submitted is collected and stored within the Service</li>
        <li>Provide appropriate privacy notices on websites where widgets are embedded</li>
        <li>Ensure compliance with privacy policies of host websites</li>
        <li>We may collect analytics data (views, interactions, conversions)</li>
      </ul>

      <h3>7.3 Widget Configuration</h3>
      <p>Configure widgets through the Service: styling and branding, fields and data collected,
        allowed domains, and A/B testing variants.</p>

      <h3>7.4 Third-Party Website Responsibility</h3>
      <p>You are responsible for:</p>
      <ul>
        <li>Obtaining permission to embed on websites you don&apos;t own</li>
        <li>Ensuring compliance with host website terms of service</li>
        <li>Providing appropriate data collection disclosures to visitors</li>
      </ul>

      {/* Section 8 */}
      <h2>8. Business Payment Processing (Stripe Connect)</h2>

      <h3>8.1 Payment Processing Service</h3>
      <p>Accept payments from your Customers through Stripe Connect.</p>

      <h3>8.2 Stripe Connect Account</h3>
      <p>To accept payments, create and connect a Stripe account. By using this feature:</p>
      <ul>
        <li>You agree to Stripe&apos;s terms of service and connected account agreement</li>
        <li>You authorise us to facilitate payment processing on your behalf</li>
        <li>You are responsible for accuracy of your Stripe account information</li>
        <li>Stripe may perform identity verification and compliance checks</li>
      </ul>

      <h3>8.3 Payment Processing Fees</h3>
      <p>Subject to:</p>
      <ul>
        <li>Stripe&apos;s standard processing fees (charged by Stripe)</li>
        <li>Platform fees charged by us (disclosed in your Subscription or at checkout)</li>
      </ul>

      <h3>8.4 Fund Settlement</h3>
      <p>Payments received from your Customers:</p>
      <ul>
        <li>Processed by Stripe according to their payout schedule</li>
        <li>Deposited into your connected Stripe account</li>
        <li>May be subject to holds or reserves as determined by Stripe</li>
        <li>Your responsibility to reconcile and manage</li>
      </ul>

      <h3>8.5 Chargebacks and Disputes</h3>
      <p>You are responsible for all chargebacks and payment disputes, timely responses,
        associated fees, and maintaining proper records for dispute resolution.</p>

      <h3>8.6 Compliance</h3>
      <p>Ensure payment practices comply with PCI DSS, consumer protection laws, anti-money
        laundering regulations, and Stripe requirements.</p>

      {/* Section 9 */}
      <h2>9. Automation</h2>

      <h3>9.1 Automation Features</h3>
      <p>Create automated sequences triggered by events:</p>
      <ul>
        <li>Lead creation or updates</li>
        <li>Booking status changes</li>
        <li>Quote submissions</li>
        <li>Invoice events</li>
        <li>Custom triggers</li>
      </ul>

      <h3>9.2 Available Actions</h3>
      <p>Automations can:</p>
      <ul>
        <li>Send emails and SMS messages</li>
        <li>Create tasks and notifications</li>
        <li>Update records</li>
        <li>Trigger AI analysis</li>
        <li>Make HTTP requests to external services</li>
      </ul>

      <h3>9.3 Your Responsibilities</h3>
      <p>You are solely responsible for:</p>
      <ul>
        <li>Automations you create and their consequences</li>
        <li>Ensuring automated communications comply with applicable laws</li>
        <li>Testing automations before activation</li>
        <li>Monitoring execution for errors or unintended effects</li>
        <li>Costs incurred through automated actions (including Credits)</li>
      </ul>

      <h3>9.4 Automation Limits</h3>
      <p>To prevent abuse and ensure stability:</p>
      <ul>
        <li>Automations are subject to rate limits</li>
        <li>We may suspend automations consuming excessive resources</li>
        <li>We may disable automations violating Terms or applicable laws</li>
      </ul>

      <h3>9.5 AI in Automations</h3>
      <p>AI actions within automations are limited to read-only operations for safety,
        subject to Section 5, and may produce variable results.</p>

      {/* Section 10 */}
      <h2>10. Use of the Service</h2>

      <h3>10.1 Permitted Use</h3>
      <p>
        We grant you a limited, non-exclusive, non-transferable, revocable licence to access and
        use the Service for your internal business purposes.
      </p>

      <h3>10.2 Prohibited Uses</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose or in violation of any laws</li>
        <li>Attempt unauthorised access to any part of the Service or its systems</li>
        <li>Interfere with or disrupt the Service or connected networks</li>
        <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
        <li>Transmit viruses, malware, or harmful code</li>
        <li>Send unsolicited communications (spam) or violate anti-spam laws</li>
        <li>Impersonate any person or entity</li>
        <li>Use the Service in any manner that could damage or impair it</li>
        <li>Use automated means to access without written permission (except provided APIs)</li>
        <li>Resell, sublicense, or redistribute without written permission</li>
        <li>Harass, abuse, or harm others</li>
        <li>Upload Content that infringes intellectual property rights</li>
        <li>Circumvent usage limits, Credit systems, or billing mechanisms</li>
        <li>Use AI Features to generate harmful, illegal, or misleading content</li>
        <li>Send communications without proper consent where required</li>
      </ul>

      {/* Section 11 */}
      <h2>11. Your Content</h2>

      <h3>11.1 Ownership</h3>
      <p>You retain all ownership rights in Content you upload. We do not claim ownership of your Content.</p>

      <h3>11.2 Licence to Us</h3>
      <p>
        You grant us a worldwide, non-exclusive, royalty-free licence to use, store, copy, process,
        and display your Content solely to:
      </p>
      <ul>
        <li>Provide, maintain, and improve the Service</li>
        <li>Process Content through AI Features as directed by you</li>
        <li>Generate insights and analytics for your use</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h3>11.3 Content Responsibility</h3>
      <p>You are solely responsible for your Content. You represent and warrant that:</p>
      <ul>
        <li>You own or have necessary rights to your Content</li>
        <li>Your Content does not infringe third-party rights</li>
        <li>Your Content does not violate applicable laws</li>
        <li>You have obtained necessary consents for personal data in your Content</li>
      </ul>

      <h3>11.4 Content Backup</h3>
      <p>
        While we take reasonable measures to protect your Content, we are not responsible for loss
        or corruption. Maintain your own backups.
      </p>

      <h3>11.5 Content Deletion</h3>
      <p>When you delete Content or terminate your account:</p>
      <ul>
        <li>We delete your Content within a reasonable period</li>
        <li>Some Content may be retained in backups temporarily</li>
        <li>Aggregated, anonymised data may be retained</li>
        <li>Content shared with third parties (e.g., emails sent) cannot be recalled</li>
      </ul>

      {/* Section 12 */}
      <h2>12. Intellectual Property</h2>

      <h3>12.1 Our Intellectual Property</h3>
      <p>
        The Service, including its original content, features, functionality, design, and underlying
        technology, is owned by {siteConfig.legalName} and protected by copyright, trademark, patent,
        and other intellectual property laws. Our trademarks may not be used without written consent.
      </p>

      <h3>12.2 Feedback</h3>
      <p>
        If you provide feedback, suggestions, or ideas regarding the Service, you grant us the right
        to use such feedback without restriction and without compensation.
      </p>

      {/* Section 13 */}
      <h2>13. Third-Party Services and Integrations</h2>

      <h3>13.1 Third-Party Service Providers</h3>
      <p>The Service integrates with various third-party providers:</p>

      <p><strong>AI and Machine Learning</strong></p>
      <ul>
        <li>OpenAI (AI Agent, content generation, transcription)</li>
        <li>Google Cloud (Speech-to-Text transcription)</li>
      </ul>

      <p><strong>Communication Services</strong></p>
      <ul>
        <li>Twilio (SMS, VoIP calling, call recording)</li>
        <li>SendGrid &amp; Resend (email delivery)</li>
        <li>Google/Gmail API (email integration)</li>
      </ul>

      <p><strong>Payment Processing</strong></p>
      <ul>
        <li>Stripe (platform billing and Stripe Connect)</li>
      </ul>

      <p><strong>Mapping and Location</strong></p>
      <ul>
        <li>Mapbox (map display)</li>
        <li>LocationIQ (geocoding)</li>
        <li>Postcodes.io (UK postcode lookup)</li>
        <li>OpenRouteService (routing)</li>
      </ul>

      <p><strong>Infrastructure</strong></p>
      <ul>
        <li>NeonDB (database hosting)</li>
        <li>Tigris/AWS S3 (file storage)</li>
      </ul>

      <p><strong>Other Services</strong></p>
      <ul>
        <li>Short.io (URL shortening)</li>
      </ul>

      <h3>13.2 Third-Party Terms</h3>
      <p>
        Use of integrated services is subject to their respective terms and privacy policies.
        We are not responsible for third-party service provider practices.
      </p>

      <h3>13.3 Data Sharing</h3>
      <p>
        Your data may be shared with third-party providers to the extent necessary to provide
        the Service. We implement appropriate data processing agreements and safeguards.
      </p>

      <h3>13.4 Third-Party Links</h3>
      <p>
        The Service may contain links to third-party websites. We are not responsible for their
        content, terms, or practices.
      </p>

      {/* Section 14 */}
      <h2>14. Data Protection and Privacy</h2>

      <h3>14.1 Privacy Policy</h3>
      <p>
        Our collection and use of personal data is governed by our Privacy Policy, incorporated by reference.
      </p>

      <h3>14.2 Data Storage Location</h3>
      <p>
        Data is stored in secure EU data centres (primarily AWS eu-west-2, London region).
      </p>

      <h3>14.3 Data Processing</h3>
      <p>We process your data to provide the Service:</p>
      <ul>
        <li>Storing and managing business data</li>
        <li>Processing communications (email, SMS, voice)</li>
        <li>Analysing data using AI Features</li>
        <li>Generating reports and analytics</li>
        <li>Providing customer support</li>
      </ul>

      <h3>14.4 Your Data Protection Responsibilities</h3>
      <p>
        As a Business processing personal data, you may be a data controller under GDPR.
        You are responsible for:
      </p>
      <ul>
        <li>Having a lawful basis for processing</li>
        <li>Providing appropriate privacy notices</li>
        <li>Responding to data subject requests</li>
        <li>Implementing appropriate security measures</li>
        <li>Reporting data breaches where required</li>
      </ul>

      <h3>14.5 Data Processing Agreement</h3>
      <p>
        For Businesses subject to GDPR, we provide a Data Processing Agreement upon request.
        Contact {siteConfig.contact.email} for details.
      </p>

      <h3>14.6 Activity Monitoring</h3>
      <p>
        We maintain audit logs of activities for security, compliance, and troubleshooting.
        Logs are retained for up to 2 years and not shared except as required by law.
      </p>

      {/* Section 15 */}
      <h2>15. Mobile Applications</h2>

      <h3>15.1 Mobile App Availability</h3>
      <p>We provide mobile applications for iOS and Android devices, subject to these Terms.</p>

      <h3>15.2 App Store Terms</h3>
      <p>
        Mobile app use is also subject to applicable app store terms (Apple App Store or Google Play Store).
      </p>

      <h3>15.3 Device Permissions</h3>
      <p>Mobile apps may request access to:</p>
      <ul>
        <li>Camera (document scanning)</li>
        <li>Location (staff tracking, if enabled)</li>
        <li>Notifications (push notifications)</li>
        <li>Contacts (contact import, if enabled)</li>
      </ul>
      <p>Manage permissions through your device settings.</p>

      <h3>15.4 Push Notifications</h3>
      <p>If you enable push notifications:</p>
      <ul>
        <li>We send notifications about relevant Service events</li>
        <li>Configure preferences within the app</li>
        <li>Disable through device settings at any time</li>
      </ul>

      {/* Section 16 */}
      <h2>16. Location Tracking</h2>

      <h3>16.1 Staff Location Tracking</h3>
      <p>Optional GPS tracking for Staff Members. If enabled:</p>
      <ul>
        <li>Data collected only during working hours or when explicitly enabled</li>
        <li>Staff Members must consent to tracking</li>
        <li>Used for route optimisation, time tracking, and operations</li>
        <li>You are responsible for complying with employee monitoring laws</li>
      </ul>

      <h3>16.2 Customer Location Data</h3>
      <p>We may collect Customer addresses for service delivery, scheduling, route optimisation,
        and geographic analytics. Addresses may be geocoded using third-party services.</p>

      {/* Section 17 */}
      <h2>17. Service Availability</h2>

      <h3>17.1 Availability</h3>
      <p>
        We strive for high availability but do not guarantee uninterrupted access.
        The Service may be temporarily unavailable due to maintenance, updates, or circumstances
        beyond our control.
      </p>

      <h3>17.2 Scheduled Maintenance</h3>
      <p>We endeavour to provide advance notice of scheduled maintenance affecting availability.</p>

      <h3>17.3 Modifications</h3>
      <p>
        We reserve the right to modify, suspend, or discontinue the Service at any time.
        We will give reasonable notice for material changes.
      </p>

      {/* Section 18 */}
      <h2>18. Confidentiality</h2>
      <p>We treat your Content and account information as confidential and will not disclose except:</p>
      <ul>
        <li>As necessary to provide the Service (including to third-party providers)</li>
        <li>As required to comply with legal obligations</li>
        <li>To protect our rights or investigate violations of these Terms</li>
        <li>With your consent</li>
      </ul>

      {/* Section 19 */}
      <h2>19. Limitation of Liability</h2>

      <h3>19.1 Disclaimer of Warranties</h3>
      <div className="info-box">
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          AND NON-INFRINGEMENT.
        </p>
        <p>We do not warrant that:</p>
        <ul>
          <li>The Service will be uninterrupted, secure, or error-free</li>
          <li>AI Features will produce accurate or appropriate results</li>
          <li>The Service will meet your specific requirements</li>
          <li>Any errors or defects will be corrected</li>
        </ul>
      </div>

      <h3>19.2 Limitation of Liability</h3>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, {siteConfig.legalName.toUpperCase()}, ITS DIRECTORS,
        EMPLOYEES, PARTNERS, AGENTS, OR AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL,
        OR BUSINESS OPPORTUNITIES.
      </p>

      <h3>19.3 Cap on Liability</h3>
      <p>
        OUR TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF: (A) AMOUNTS YOU PAID US IN THE TWELVE
        (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED POUNDS STERLING (&pound;100).
      </p>

      <h3>19.4 Specific Exclusions</h3>
      <p>Without limiting the above, we are not liable for:</p>
      <ul>
        <li>Errors or inaccuracies in AI-generated content</li>
        <li>Failed or delayed communications (email, SMS, voice)</li>
        <li>Actions taken based on AI recommendations</li>
        <li>Data processed by third-party service providers</li>
        <li>Chargebacks or payment disputes with your Customers</li>
        <li>Misuse of the Service by Staff Members</li>
        <li>Content submitted through Embeddable Widgets</li>
      </ul>

      <h3>19.5 Exceptions</h3>
      <p>Nothing in these Terms limits or excludes liability for:</p>
      <ul>
        <li>Death or personal injury caused by our negligence</li>
        <li>Fraud or fraudulent misrepresentation</li>
        <li>Any other liability that cannot be limited or excluded by law</li>
      </ul>

      {/* Section 20 */}
      <h2>20. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless {siteConfig.legalName} and its officers,
        directors, employees, agents, and affiliates from claims, liabilities, damages, losses, and
        expenses arising from:
      </p>
      <ul>
        <li>Your use of the Service</li>
        <li>Your Content</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any applicable laws or regulations</li>
        <li>Your violation of any third-party rights</li>
        <li>Communications sent through the Service</li>
        <li>Actions of Staff Members under your account</li>
        <li>Data collected through Embeddable Widgets</li>
        <li>Your use of Stripe Connect and related payment disputes</li>
      </ul>

      {/* Section 21 */}
      <h2>21. Termination</h2>

      <h3>21.1 Termination by You</h3>
      <p>
        Terminate your account at any time by cancelling your Subscription through account settings
        or by contacting {siteConfig.contact.email}.
      </p>

      <h3>21.2 Termination by Us</h3>
      <p>We may terminate or suspend your account immediately, without prior notice, if:</p>
      <ul>
        <li>You breach these Terms</li>
        <li>You fail to pay fees when due</li>
        <li>We are required to do so by law</li>
        <li>We discontinue the Service</li>
      </ul>
      <p>For other reasons, we will provide reasonable notice.</p>

      <h3>21.3 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>Your right to use the Service immediately ceases</li>
        <li>Staff Member and Customer Portal access revoked</li>
        <li>Automations deactivated</li>
        <li>Embeddable Widgets stop functioning</li>
        <li>Content deleted within a reasonable period (typically 30-90 days)</li>
        <li>Provisions that should survive termination remain in effect</li>
      </ul>

      <h3>21.4 Data Export</h3>
      <p>
        Request a Content export in CSV or JSON format before or within 30 days after termination.
      </p>

      <h3>21.5 Outstanding Fees</h3>
      <p>Termination does not relieve you of outstanding fees. Unused Credits are not refundable.</p>

      {/* Section 22 */}
      <h2>22. Dispute Resolution</h2>

      <h3>22.1 Informal Resolution</h3>
      <p>
        Before initiating legal proceedings, contact {siteConfig.contact.email} to attempt informal resolution.
        We will attempt to resolve disputes within 30 Business Days.
      </p>

      <h3>22.2 Governing Law</h3>
      <p>
        These Terms are governed by the laws of England and Wales, without regard to conflict of law provisions.
      </p>

      <h3>22.3 Jurisdiction</h3>
      <p>
        Disputes are subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      {/* Section 23 */}
      <h2>23. General Provisions</h2>

      <h3>23.1 Entire Agreement</h3>
      <p>
        These Terms, together with our Privacy Policy and any applicable Data Processing Agreement,
        constitute the entire agreement between you and {siteConfig.legalName}.
      </p>

      <h3>23.2 Severability</h3>
      <p>
        If any provision is found unenforceable, it shall be limited to the minimum extent necessary,
        and remaining provisions remain in full effect.
      </p>

      <h3>23.3 Waiver</h3>
      <p>Our failure to enforce any right shall not be deemed a waiver of such right.</p>

      <h3>23.4 Assignment</h3>
      <p>
        You may not assign these Terms without our written consent. We may assign our rights without restriction.
      </p>

      <h3>23.5 Notices</h3>
      <p>
        We may provide notices via email, through the Service, by push notification, or by posting on
        our website. You may provide notices to {siteConfig.contact.email}.
      </p>

      <h3>23.6 Force Majeure</h3>
      <p>
        We are not liable for failure or delay due to circumstances beyond our reasonable control,
        including natural disasters, war, terrorism, riots, embargoes, fire, floods, accidents, strikes,
        or shortages of transportation, facilities, fuel, energy, labour, or materials.
      </p>

      {/* Section 24 */}
      <h2>24. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. For material changes, we will notify
        you at least 30 days before changes take effect. Continued use constitutes acceptance.
        If you do not agree, stop using the Service before changes take effect.
      </p>

      {/* Section 25 */}
      <h2>25. Contact Us</h2>
      <p>If you have questions about these Terms:</p>

      <div className="contact-card">
        <ul>
          <li><strong>Company:</strong> {siteConfig.legalName}</li>
          <li><strong>Address:</strong> Hyacinths, The Avenue, North Fambridge, CM3 6LZ</li>
          <li><strong>Email:</strong> {siteConfig.contact.email}</li>
          <li><strong>Phone:</strong> {siteConfig.contact.phone}</li>
          <li><strong>Website:</strong> https://www.zuviaone.com</li>
        </ul>
      </div>

      <hr />

      <p>
        <strong>By using the Service, you acknowledge that you have read, understood, and agree to be bound
        by these Terms and Conditions.</strong>
      </p>
    </LegalLayout>
  );
}
