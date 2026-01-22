import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ZuviaOne - how we collect, use, and protect your data.',
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 2026">
      <p>
        <strong>{siteConfig.legalName}</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed
        to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our ZuviaOne platform, website, mobile applications,
        and services (collectively, the &quot;Service&quot;).
      </p>
      <p>
        We are registered in England and Wales and comply with the UK General Data Protection Regulation
        (UK GDPR), the Data Protection Act 2018, the Privacy and Electronic Communications Regulations (PECR),
        and other applicable data protection laws.
      </p>

      {/* Section 1 */}
      <h2>1. Data Controller Information</h2>
      <p>{siteConfig.legalName} is the data controller responsible for your personal data.</p>

      <div className="contact-card">
        <p><strong>Contact Details</strong></p>
        <ul>
          <li><strong>Email:</strong> privacy@zuviaone.com</li>
          <li><strong>Support:</strong> {siteConfig.contact.email}</li>
          <li><strong>Phone:</strong> {siteConfig.contact.phone}</li>
          <li><strong>Website:</strong> {siteConfig.url}</li>
          <li><strong>Data Protection Officer:</strong> dpo@zuviaone.com</li>
        </ul>
      </div>

      {/* Section 2 */}
      <h2>2. Information We Collect</h2>
      <p>
        We collect different types of information depending on how you interact with the Service and
        your role (Business User, Staff Member, Customer, or Visitor).
      </p>

      <h3>2.1 Account and Profile Information</h3>
      <p><strong>Business Users and Staff Members:</strong></p>
      <ul>
        <li>Full name, email address, phone number</li>
        <li>Company name, job title, department</li>
        <li>Username and password (securely hashed)</li>
        <li>Profile picture</li>
        <li>Google account ID (if using Google Sign-In)</li>
        <li>Employment information (hire date, employee ID, employment type)</li>
        <li>Emergency contact details</li>
        <li>Professional licenses, certifications, skills, and qualifications</li>
      </ul>

      <p><strong>Customers (via Customer Portal):</strong></p>
      <ul>
        <li>Full name, email address, phone number</li>
        <li>Company name (if applicable)</li>
        <li>Billing and service addresses</li>
        <li>Account preferences and communication settings</li>
      </ul>

      <h3>2.2 Financial and Payment Information</h3>
      <ul>
        <li>Payment card details (processed by Stripe; we do not store full card numbers)</li>
        <li>Bank account details for Staff Members (payroll purposes)</li>
        <li>Tax identification numbers (where required)</li>
        <li>Billing addresses</li>
        <li>Transaction history and payment records</li>
        <li>Subscription and credit balance information</li>
      </ul>

      <h3>2.3 Business Operations Data</h3>
      <p>When you use the Service to manage your business:</p>
      <ul>
        <li>Customer and lead contact information</li>
        <li>Booking and appointment details</li>
        <li>Quotes, invoices, and financial records</li>
        <li>Service descriptions and pricing</li>
        <li>Staff schedules and availability</li>
        <li>Internal notes and communications</li>
        <li>Custom form responses</li>
      </ul>

      <h3>2.4 Communication Data</h3>
      <ul>
        <li>Email content (when connected via Gmail integration)</li>
        <li>SMS messages sent through the Service</li>
        <li>Voice call recordings and transcriptions (when enabled)</li>
        <li>Internal chat messages between team members</li>
        <li>Chatbot conversation transcripts</li>
        <li>Customer support correspondence</li>
      </ul>

      <h3>2.5 Location Data</h3>
      <p><strong>Staff Location Tracking (Opt-In Only):</strong></p>
      <ul>
        <li>GPS coordinates (latitude, longitude)</li>
        <li>Location accuracy and timestamp</li>
        <li>Reverse-geocoded address</li>
        <li>Movement data (altitude, heading, speed)</li>
        <li>Associated booking or job information</li>
      </ul>

      <p><strong>Customer and Business Addresses:</strong></p>
      <ul>
        <li>Service addresses for bookings</li>
        <li>Billing addresses for invoices</li>
        <li>Geocoded coordinates for mapping and routing</li>
      </ul>

      <h3>2.6 Device and Technical Information</h3>
      <ul>
        <li>Device type, model, and operating system</li>
        <li>Browser type and version</li>
        <li>IP address (anonymised for GDPR compliance)</li>
        <li>Unique device identifiers</li>
        <li>Push notification tokens (for mobile apps)</li>
        <li>App version information</li>
      </ul>

      <h3>2.7 Usage and Analytics Data</h3>
      <ul>
        <li>Pages and features accessed</li>
        <li>Actions taken within the Service</li>
        <li>Time spent on various sections</li>
        <li>Search queries within the Service</li>
        <li>Error logs and diagnostic information</li>
        <li>Widget views and interactions</li>
        <li>Link clicks (for Link in Bio pages)</li>
      </ul>

      <h3>2.8 Marketing Attribution Data</h3>
      <p>When you interact with our marketing or embedded widgets:</p>
      <ul>
        <li>Referrer URL and landing page</li>
        <li>UTM parameters (source, medium, campaign)</li>
        <li>Advertising click identifiers (Google, Facebook, Microsoft)</li>
        <li>Visitor session information</li>
        <li>Conversion tracking data</li>
      </ul>

      <h3>2.9 Information from Third Parties</h3>
      <ul>
        <li>OAuth profile data from Google (when using Google Sign-In)</li>
        <li>Payment confirmation and fraud signals from Stripe</li>
        <li>Email delivery status from email service providers</li>
        <li>SMS delivery status from Twilio</li>
      </ul>

      {/* Section 3 */}
      <h2>3. How We Use Your Information</h2>

      <h3>3.1 To Provide and Operate the Service</h3>
      <ul>
        <li>Create and manage your account</li>
        <li>Process bookings, quotes, and invoices</li>
        <li>Facilitate communications (email, SMS, voice calls)</li>
        <li>Enable team collaboration and internal messaging</li>
        <li>Provide customer portal access</li>
        <li>Process payments and manage subscriptions</li>
        <li>Deliver push notifications</li>
      </ul>

      <h3>3.2 To Improve and Personalise the Service</h3>
      <ul>
        <li>Analyse usage patterns to enhance features</li>
        <li>Personalise your experience based on preferences</li>
        <li>Optimise widget and form performance through A/B testing</li>
        <li>Develop new features and functionality</li>
        <li>Fix bugs and resolve technical issues</li>
      </ul>

      <h3>3.3 For AI-Powered Features</h3>
      <p>We use artificial intelligence to provide enhanced functionality:</p>
      <ul>
        <li><strong>AI Agent</strong> — assistance for business queries</li>
        <li><strong>Email classification</strong> — categorisation and prioritisation</li>
        <li><strong>Sentiment analysis</strong> — understanding communication tone</li>
        <li><strong>Intent detection</strong> — routing and prioritisation</li>
        <li><strong>Chatbot conversations</strong> — customer engagement</li>
        <li><strong>Semantic search</strong> — intelligent search across data</li>
        <li><strong>Content generation</strong> — drafting assistance</li>
      </ul>

      <h3>3.4 For Automated Decision-Making and Optimisation</h3>
      <p>We use automated systems to improve Service performance:</p>
      <ul>
        <li>A/B testing of widget variants using Thompson Sampling algorithms</li>
        <li>Contextual upsell recommendations based on booking context</li>
        <li>Email routing based on detected intent and urgency</li>
        <li>Search result ranking based on query classification</li>
      </ul>
      <p>See Section 11 for more information about automated decision-making.</p>

      <h3>3.5 For Communication</h3>
      <ul>
        <li>Transactional notifications (booking confirmations, invoice alerts)</li>
        <li>Customer support</li>
        <li>Service announcements and updates</li>
        <li>Marketing communications (with consent)</li>
        <li>Facilitating communications between you and your customers</li>
      </ul>

      <h3>3.6 For Security and Compliance</h3>
      <ul>
        <li>Detect and prevent fraud and abuse</li>
        <li>Maintain audit logs for compliance</li>
        <li>Enforce our Terms and Conditions</li>
        <li>Comply with legal obligations</li>
        <li>Protect the rights and safety of users</li>
      </ul>

      <h3>3.7 For Billing and Credits</h3>
      <ul>
        <li>Track usage of AI, SMS, email, and automation features</li>
        <li>Manage credit balances and consumption</li>
        <li>Process subscription payments</li>
        <li>Detect anomalous usage patterns</li>
      </ul>

      {/* Section 4 */}
      <h2>4. Legal Basis for Processing (UK GDPR)</h2>
      <p>We process your personal data under the following legal bases:</p>

      <div className="definition">
        <p><strong>Contract Performance</strong> — Processing necessary to perform our contract with you, including providing the Service, processing payments, and delivering requested features.</p>
      </div>

      <div className="definition">
        <p><strong>Legitimate Interests</strong> — Processing necessary for our legitimate interests:</p>
        <ul>
          <li>Improving and personalising the Service</li>
          <li>Marketing our services (where no consent required)</li>
          <li>Preventing fraud and ensuring security</li>
          <li>Analysing usage to develop new features</li>
          <li>A/B testing to optimise user experience</li>
        </ul>
        <p>These interests are balanced against your rights and do not override your fundamental freedoms.</p>
      </div>

      <div className="definition">
        <p><strong>Consent</strong> — Where you have given specific consent:</p>
        <ul>
          <li>Marketing communications</li>
          <li>Optional location tracking for Staff Members</li>
          <li>Call recording (where legally required)</li>
          <li>Connection of third-party accounts (Gmail)</li>
        </ul>
      </div>

      <div className="definition">
        <p><strong>Legal Obligation</strong> — Processing necessary to comply with legal requirements, including tax reporting, fraud prevention, and responding to lawful requests from authorities.</p>
      </div>

      {/* Section 5 */}
      <h2>5. Cookies and Tracking Technologies</h2>

      <h3>5.1 Cookies We Use</h3>
      <p><strong>Essential Cookies (Required):</strong></p>
      <ul>
        <li><strong>Session Cookie (connect.sid)</strong> — Maintains your login session. Duration: 7 days.</li>
        <li><strong>CSRF Token (__Host-csrf)</strong> — Protects against cross-site request forgery. Duration: 15 minutes.</li>
      </ul>

      <p><strong>Functional Cookies:</strong></p>
      <ul>
        <li><strong>Visitor ID (crm_visitor_id)</strong> — Ensures consistent experience across widget visits and A/B tests. Duration: 1 year.</li>
      </ul>

      <h3>5.2 What We Do NOT Use</h3>
      <div className="info-box">
        <p>
          We do not use third-party analytics tracking such as Google Analytics, Facebook Pixel, Hotjar,
          or similar services. All analytics data is collected and stored internally on our own servers.
        </p>
      </div>

      <h3>5.3 Managing Cookies</h3>
      <p>
        Essential cookies cannot be disabled as they are necessary for the Service to function.
        Manage other cookies through your browser settings (may affect certain features).
      </p>

      <h3>5.4 Do Not Track</h3>
      <p>
        We do not currently respond to &quot;Do Not Track&quot; browser signals as there is no industry standard.
        However, we minimise tracking and do not share data with third-party advertisers.
      </p>

      {/* Section 6 */}
      <h2>6. How We Share Your Information</h2>

      <h3>6.1 Third-Party Service Providers</h3>
      <p>
        We share information with service providers who help us operate the Service.
        These providers are contractually obligated to protect your information.
      </p>

      <p><strong>AI and Machine Learning:</strong></p>
      <ul>
        <li><strong>OpenAI</strong> — AI Agent, email analysis, content generation, audio transcription</li>
        <li><strong>Google Cloud</strong> — Speech-to-text transcription for voice calls</li>
      </ul>

      <p><strong>Communication Services:</strong></p>
      <ul>
        <li><strong>Twilio</strong> — SMS messages, voice calls, phone number services</li>
        <li><strong>SendGrid</strong> — Transactional and marketing email delivery</li>
        <li><strong>Resend</strong> — Backup email delivery service</li>
        <li><strong>Google/Gmail API</strong> — Email sync when you connect your Gmail</li>
      </ul>

      <p><strong>Payment Processing:</strong></p>
      <ul>
        <li><strong>Stripe</strong> — Platform subscriptions and Stripe Connect for business payments</li>
      </ul>

      <p><strong>Location Services:</strong></p>
      <ul>
        <li><strong>LocationIQ</strong> — Geocodes addresses and reverse geocoding</li>
        <li><strong>Postcodes.io</strong> — UK postcode lookup</li>
      </ul>

      <p><strong>Infrastructure:</strong></p>
      <ul>
        <li><strong>NeonDB</strong> — Database hosting (EU, AWS eu-west-2, London region)</li>
        <li><strong>Tigris/AWS S3</strong> — File storage in EU data centres</li>
      </ul>

      <p><strong>Other Services:</strong></p>
      <ul>
        <li><strong>Short.io</strong> — Shortened URL creation</li>
      </ul>

      <h3>6.2 Within Your Business</h3>
      <p>If you are a Staff Member, your Business administrator and authorised Staff Members may access:</p>
      <ul>
        <li>Your profile information</li>
        <li>Your work schedule and availability</li>
        <li>Location data (if tracking enabled and you consented)</li>
        <li>Your activity within the Service</li>
        <li>Communications sent through the Service</li>
      </ul>

      <h3>6.3 With Your Customers</h3>
      <p>When you communicate with customers:</p>
      <ul>
        <li>Your business contact information may be visible</li>
        <li>Email and SMS content is delivered to recipients</li>
        <li>Customer portal users can see their own booking and invoice history</li>
      </ul>

      <h3>6.4 Business Transfers</h3>
      <p>
        If we are involved in a merger, acquisition, or sale of assets, your information may be
        transferred. We will notify you of any change in ownership or uses of your information.
      </p>

      <h3>6.5 Legal Requirements</h3>
      <p>We may disclose information if required by law or in response to:</p>
      <ul>
        <li>Valid legal process (court orders, subpoenas)</li>
        <li>Government or regulatory requests</li>
        <li>To protect our rights, privacy, safety, or property</li>
        <li>To enforce our Terms and Conditions</li>
        <li>To prevent fraud or illegal activity</li>
      </ul>

      <h3>6.6 With Your Consent</h3>
      <p>We may share information with third parties when you give explicit consent.</p>

      <h3>6.7 Aggregated and Anonymised Data</h3>
      <p>
        We may share aggregated, anonymised data that cannot reasonably identify you for
        research, analytics, and business purposes.
      </p>

      {/* Section 7 */}
      <h2>7. International Data Transfers</h2>
      <p>
        Your information is primarily stored in EU data centres (AWS eu-west-2, London region).
      </p>
      <p>
        Some service providers operate outside the UK and EU, including the United States.
        When we transfer data internationally, we ensure appropriate safeguards:
      </p>
      <ul>
        <li>Standard Contractual Clauses (SCCs) approved by the UK ICO</li>
        <li>Transfers to countries with adequacy decisions</li>
        <li>Provider-specific data protection agreements</li>
        <li>Additional technical and organisational measures</li>
      </ul>

      <p><strong>Specific transfers include:</strong></p>
      <ul>
        <li><strong>OpenAI (United States)</strong> — AI processing</li>
        <li><strong>Twilio (United States)</strong> — Communication services</li>
        <li><strong>Stripe (United States)</strong> — Payment processing</li>
        <li><strong>Google (United States)</strong> — Gmail integration and speech services</li>
      </ul>

      {/* Section 8 */}
      <h2>8. Data Retention</h2>
      <p>We retain personal data for as long as necessary to fulfil the purposes described in this policy.</p>

      <h3>8.1 Specific Retention Periods</h3>
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Account Data</td><td>While active + 90 days after deletion</td></tr>
          <tr><td>Billing Records</td><td>7 years (tax requirements)</td></tr>
          <tr><td>Audit Logs</td><td>2 years</td></tr>
          <tr><td>Communication Logs</td><td>2 years</td></tr>
          <tr><td>Staff Location Logs</td><td>90 days default (configurable 1-365 days)</td></tr>
          <tr><td>Call Recordings</td><td>As configured (default: 90 days)</td></tr>
          <tr><td>Chatbot Transcripts</td><td>Until deleted or 2 years</td></tr>
          <tr><td>Widget Analytics</td><td>Aggregated data retained indefinitely</td></tr>
          <tr><td>Session Data</td><td>Until expiry (7-30 days)</td></tr>
          <tr><td>Export Files</td><td>7 days after generation</td></tr>
          <tr><td>Automation Run History</td><td>1 year</td></tr>
          <tr><td>Webhook Event Logs</td><td>30-90 days</td></tr>
          <tr><td>Notifications</td><td>90 days after read</td></tr>
        </tbody>
      </table>

      <h3>8.2 Account Deletion</h3>
      <p>When you request account deletion:</p>
      <ul>
        <li>A 14-day grace period applies during which you can cancel</li>
        <li>After the grace period, personal data is anonymised or deleted</li>
        <li>Some data may be retained in backups temporarily</li>
        <li>Data required for legal compliance may be retained longer</li>
        <li>Aggregated, anonymised data derived from your usage may be retained</li>
      </ul>

      {/* Section 9 */}
      <h2>9. Your Rights</h2>
      <p>Under the UK GDPR and other applicable laws, you have the following rights:</p>

      <h3>9.1 Right of Access</h3>
      <p>Request a copy of the personal data we hold about you. We will respond within one month.</p>

      <h3>9.2 Right to Rectification</h3>
      <p>Request correction of inaccurate or incomplete personal data.</p>

      <h3>9.3 Right to Erasure (&quot;Right to be Forgotten&quot;)</h3>
      <p>Request deletion of your personal data when:</p>
      <ul>
        <li>The data is no longer necessary for its original purpose</li>
        <li>You withdraw consent (where consent was the legal basis)</li>
        <li>You object and there are no overriding legitimate grounds</li>
        <li>The data has been unlawfully processed</li>
      </ul>

      <h3>9.4 Right to Restrict Processing</h3>
      <p>Request that we restrict processing while we verify accuracy or assess your objection.</p>

      <h3>9.5 Right to Data Portability</h3>
      <p>
        Request your personal data in a structured, machine-readable format (CSV or JSON)
        and transmit it to another controller.
      </p>

      <h3>9.6 Right to Object</h3>
      <p>
        Object to processing based on legitimate interests or for direct marketing.
        We will stop processing unless we have compelling legitimate grounds.
      </p>

      <h3>9.7 Rights Related to Automated Decision-Making</h3>
      <p>You have rights related to automated decision-making, including profiling. See Section 11.</p>

      <h3>9.8 Right to Withdraw Consent</h3>
      <p>
        Where we process data based on consent, withdraw at any time without affecting
        the lawfulness of prior processing.
      </p>

      <h3>9.9 Exercising Your Rights</h3>
      <div className="contact-card">
        <p><strong>To exercise your rights:</strong></p>
        <ul>
          <li><strong>Email:</strong> privacy@zuviaone.com</li>
          <li>Through your account settings (for certain requests)</li>
          <li><strong>Support:</strong> {siteConfig.contact.email}</li>
        </ul>
        <p>
          We respond within one month. We may verify your identity. Complex requests may take
          up to three months (we will inform you of any extension).
        </p>
      </div>

      <h3>9.10 Right to Complain</h3>
      <p>
        You have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO)
        if you believe your data protection rights have been violated.
      </p>
      <div className="info-box">
        <p><strong>Information Commissioner&apos;s Office</strong></p>
        <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></p>
        <p>Phone: 0303 123 1113</p>
      </div>

      {/* Section 10 */}
      <h2>10. Data Security</h2>
      <p>We implement appropriate technical and organisational measures to protect your personal data.</p>

      <h3>10.1 Technical Measures</h3>
      <ul>
        <li>Encryption of data in transit (TLS 1.2+) and at rest</li>
        <li>AES-256-GCM encryption for sensitive tokens</li>
        <li>Secure password hashing (bcrypt with appropriate cost factor)</li>
        <li>CSRF protection on all state-changing operations</li>
        <li>Rate limiting to prevent abuse</li>
        <li>Regular security assessments</li>
      </ul>

      <h3>10.2 Organisational Measures</h3>
      <ul>
        <li>Role-based access controls (190+ granular permissions)</li>
        <li>Staff training on data protection</li>
        <li>Incident response procedures</li>
        <li>Regular security reviews</li>
        <li>Vendor security assessments</li>
      </ul>

      <h3>10.3 IP Address Anonymisation</h3>
      <p>For GDPR compliance, we anonymise IP addresses in session logs:</p>
      <ul>
        <li><strong>IPv4:</strong> Last octet set to zero (e.g., 192.168.1.100 → 192.168.1.0)</li>
        <li><strong>IPv6:</strong> Only first 64 bits retained</li>
      </ul>
      <p>
        While we take reasonable measures to protect your data, no method of transmission or
        storage is completely secure. We cannot guarantee absolute security.
      </p>

      {/* Section 11 */}
      <h2>11. Automated Decision-Making and Profiling</h2>
      <p>We use automated systems that may affect your experience or make decisions about content you see.</p>

      <h3>11.1 A/B Testing and Optimisation</h3>
      <p>We use Thompson Sampling algorithms to optimise widgets, forms, and quotes:</p>
      <ul>
        <li>Different users may see different variants of buttons, text, or layouts</li>
        <li>Variants are selected based on historical conversion data</li>
        <li>Contextual factors: device type, time of day, returning visitor status</li>
        <li><strong>Purpose:</strong> Improve conversion rates and user experience</li>
        <li><strong>Impact:</strong> Visual presentation differences; does not affect pricing or availability</li>
      </ul>

      <h3>11.2 Email Classification and Analysis</h3>
      <p>We automatically analyse inbound emails using AI to:</p>
      <ul>
        <li>Classify emails by type (inquiry, complaint, booking request, etc.)</li>
        <li>Detect sentiment (positive, negative, neutral)</li>
        <li>Identify intent and urgency</li>
        <li>Route emails to appropriate team members</li>
        <li><strong>Purpose:</strong> Improve response times and service quality</li>
        <li><strong>Impact:</strong> Affects email routing and suggested actions; human review always available</li>
      </ul>

      <h3>11.3 Recommendation Systems</h3>
      <p>We provide automated recommendations for:</p>
      <ul>
        <li>Upsell suggestions based on booking context</li>
        <li>Search results ranking based on query analysis</li>
        <li><strong>Purpose:</strong> Improve relevance and business outcomes</li>
        <li><strong>Impact:</strong> Order and visibility of suggestions; all options remain available</li>
      </ul>

      <h3>11.4 Your Rights Regarding Automated Decisions</h3>
      <p>You have the right to:</p>
      <ul>
        <li>Request human review of automated decisions that significantly affect you</li>
        <li>Express your point of view and contest decisions</li>
        <li>Obtain an explanation of the logic involved</li>
        <li>Opt out of certain automated processing where feasible</li>
      </ul>

      <p>For AI-powered features, you can:</p>
      <ul>
        <li>Disable AI email analysis in your settings</li>
        <li>Request that specific communications not be AI-processed</li>
        <li>Contact us to understand how automated decisions were made</li>
      </ul>

      <div className="info-box">
        <p><strong>Automated systems do not make decisions about:</strong></p>
        <ul>
          <li>Your eligibility for the Service</li>
          <li>Pricing (except where you configure dynamic pricing rules)</li>
          <li>Access to features included in your subscription</li>
          <li>Employment or credit decisions</li>
        </ul>
      </div>

      {/* Section 12 */}
      <h2>12. Location Tracking</h2>

      <h3>12.1 Staff Location Tracking</h3>
      <p>Location tracking for Staff Members is entirely optional and requires explicit consent.</p>

      <p><strong>How it works:</strong></p>
      <ul>
        <li>Tracking occurs only in the foreground (when app is actively in use)</li>
        <li>Triggered by job status changes, clock in/out, or configured intervals</li>
        <li>You choose which actions trigger location capture</li>
        <li>Enable/disable tracking at any time</li>
        <li>Control how long your data is retained (1-365 days)</li>
      </ul>

      <p><strong>Data collected:</strong></p>
      <ul>
        <li>GPS coordinates (latitude, longitude)</li>
        <li>Accuracy measurement and timestamp</li>
        <li>Associated job or booking information</li>
        <li>Device information</li>
      </ul>

      <p><strong>Your controls:</strong></p>
      <ul>
        <li>Master on/off switch</li>
        <li>Granular action-level controls</li>
        <li>Custom retention period</li>
        <li>View your own location history</li>
        <li>Delete your location data</li>
      </ul>

      <p><strong>Location data is shared with:</strong></p>
      <ul>
        <li>Your Business administrator and authorised managers</li>
        <li>LocationIQ (for reverse geocoding addresses only)</li>
      </ul>

      <h3>12.2 Customer Address Geocoding</h3>
      <p>We geocode customer addresses to provide:</p>
      <ul>
        <li>Map displays of service locations</li>
        <li>Route planning and optimisation</li>
        <li>Geographic analytics</li>
      </ul>
      <p>
        Addresses are sent to LocationIQ or Postcodes.io for coordinate lookup.
        Only the address text is shared; no personal identifiers.
      </p>

      {/* Section 13 */}
      <h2>13. Communication Services</h2>

      <h3>13.1 Email</h3>
      <p>When you connect your Gmail account:</p>
      <ul>
        <li>We access using OAuth authentication</li>
        <li>We can read, send, and manage emails on your behalf</li>
        <li>Email content may be analysed by AI for classification</li>
        <li>Disconnect Gmail at any time</li>
      </ul>
      <p>
        Emails sent through the Service are delivered via SendGrid or Resend.
        These providers receive recipient addresses and email content.
      </p>

      <h3>13.2 SMS</h3>
      <p>SMS messages are sent via Twilio. We share:</p>
      <ul>
        <li>Recipient phone numbers (E.164 format)</li>
        <li>Message content</li>
        <li>Sender identification</li>
      </ul>
      <p><strong>SMS consent requirements:</strong></p>
      <ul>
        <li>Marketing messages require explicit opt-in consent</li>
        <li>We provide opt-out management tools</li>
        <li>You are responsible for compliance with SMS regulations</li>
      </ul>

      <h3>13.3 Voice Calls</h3>
      <p>Voice calls are facilitated via Twilio:</p>
      <ul>
        <li>Call metadata is logged (participants, duration, timestamps)</li>
        <li>Calls may be recorded if enabled by the Business</li>
        <li>Recordings may be transcribed using AI (Google Cloud or OpenAI)</li>
      </ul>
      <p><strong>Recording consent:</strong></p>
      <ul>
        <li>You are responsible for informing call participants about recording</li>
        <li>Recordings are stored securely and accessible through the Service</li>
        <li>Retention period is configurable</li>
      </ul>

      {/* Section 14 */}
      <h2>14. Mobile Applications</h2>

      <h3>14.1 Permissions Requested</h3>
      <p>Our mobile apps may request access to:</p>
      <ul>
        <li><strong>Camera:</strong> Document scanning and photo uploads</li>
        <li><strong>Location:</strong> Staff tracking (opt-in only)</li>
        <li><strong>Notifications:</strong> Push notifications</li>
        <li><strong>Microphone:</strong> Voice calls</li>
      </ul>
      <p>Manage permissions through your device settings.</p>

      <h3>14.2 Push Notifications</h3>
      <p>If you enable push notifications:</p>
      <ul>
        <li>We collect your device token (APNs for iOS, FCM for Android)</li>
        <li>We send notifications about relevant Service events</li>
        <li>Configure preferences within the app</li>
        <li>Disable notifications via device settings</li>
      </ul>

      {/* Section 15 */}
      <h2>15. Children&apos;s Privacy</h2>
      <p>
        The Service is not intended for children under 18. We do not knowingly collect
        personal data from children. If we learn we have collected data from a child,
        we will delete it promptly.
      </p>
      <p>
        If you believe we have collected data from a child, contact privacy@zuviaone.com.
      </p>

      {/* Section 16 */}
      <h2>16. Business Customers - Data Processor Role</h2>
      <p>When you use the Service to store and process data about your customers:</p>

      <h3>16.1 Your Role as Data Controller</h3>
      <p>You are the data controller for your customers&apos; data. You are responsible for:</p>
      <ul>
        <li>Having a lawful basis to collect and process their data</li>
        <li>Providing appropriate privacy notices to your customers</li>
        <li>Responding to data subject requests from your customers</li>
        <li>Ensuring data accuracy</li>
        <li>Reporting data breaches to authorities where required</li>
      </ul>

      <h3>16.2 Our Role as Data Processor</h3>
      <p>We act as a data processor on your behalf. In this capacity, we:</p>
      <ul>
        <li>Process your customers&apos; data only according to your instructions</li>
        <li>Maintain appropriate security measures</li>
        <li>Assist you in responding to data subject requests</li>
        <li>Notify you of any data breaches affecting your customers&apos; data</li>
        <li>Delete or return your customers&apos; data upon termination</li>
      </ul>

      <h3>16.3 Data Processing Agreement</h3>
      <p>
        For Businesses subject to GDPR or similar regulations, we provide a Data Processing
        Agreement (DPA) upon request. Contact legal@zuviaone.com to request a DPA.
      </p>

      {/* Section 17 */}
      <h2>17. Widget Data Collection</h2>
      <p>When you embed our widgets (quote forms, chatbots, booking forms) on third-party websites:</p>

      <h3>17.1 Data Collected from Visitors</h3>
      <ul>
        <li>Form submissions (name, email, phone, address, service needs)</li>
        <li>Chatbot conversation transcripts</li>
        <li>IP address (for rate limiting and fraud prevention)</li>
        <li>Device and browser information</li>
        <li>Referrer URL and page context</li>
        <li>Marketing attribution data (UTM parameters, click IDs)</li>
      </ul>

      <h3>17.2 Your Responsibilities</h3>
      <p>As a Business embedding our widgets, you are responsible for:</p>
      <ul>
        <li>Disclosing data collection in your website&apos;s privacy policy</li>
        <li>Obtaining necessary consents from your website visitors</li>
        <li>Ensuring widget use complies with the host website&apos;s terms</li>
      </ul>

      <h3>17.3 Visitor Tracking</h3>
      <p>We use a visitor ID cookie (crm_visitor_id) to:</p>
      <ul>
        <li>Ensure consistent A/B test experiences</li>
        <li>Prevent duplicate form submissions</li>
        <li>Track conversion attribution</li>
      </ul>
      <p>This cookie is first-party and does not track users across unrelated websites.</p>

      {/* Section 18 */}
      <h2>18. Audit Logging and Activity Monitoring</h2>

      <h3>18.1 What We Log</h3>
      <p>For security and compliance, we maintain audit logs of:</p>
      <ul>
        <li>Account creation and modification</li>
        <li>Login and logout events</li>
        <li>Data access and changes</li>
        <li>Permission changes</li>
        <li>Financial transactions</li>
        <li>Communication activities</li>
        <li>Security events</li>
      </ul>

      <h3>18.2 Log Contents</h3>
      <p>Audit logs may include:</p>
      <ul>
        <li>User identifier (who performed the action)</li>
        <li>Action type and timestamp</li>
        <li>Affected entity and changes made</li>
        <li>IP address (anonymised)</li>
        <li>Request correlation ID</li>
      </ul>

      <h3>18.3 Retention and Access</h3>
      <ul>
        <li>Audit logs are retained for 2 years</li>
        <li>Logs are not shared except as required by law</li>
        <li>You can request access to logs related to your account</li>
      </ul>

      {/* Section 19 */}
      <h2>19. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. For material changes, we will notify you by:</p>
      <ul>
        <li>Email to your registered email address</li>
        <li>Notice within the Service</li>
        <li>Prominent posting on our website</li>
      </ul>
      <p>
        We provide at least 30 days&apos; notice before material changes take effect.
        Continued use after the effective date constitutes acceptance.
      </p>

      {/* Section 20 */}
      <h2>20. Contact Us</h2>
      <p>If you have questions about this Privacy Policy or our data practices:</p>

      <div className="contact-card">
        <p><strong>Data Protection Enquiries</strong></p>
        <ul>
          <li><strong>Email:</strong> privacy@zuviaone.com</li>
          <li><strong>Data Protection Officer:</strong> dpo@zuviaone.com</li>
        </ul>

        <p><strong>General Support</strong></p>
        <ul>
          <li><strong>Email:</strong> {siteConfig.contact.email}</li>
          <li><strong>Phone:</strong> {siteConfig.contact.phone}</li>
        </ul>

        <p><strong>Postal Address</strong></p>
        <p>
          {siteConfig.legalName}<br />
          Hyacinths, The Avenue<br />
          North Fambridge<br />
          CM3 6LZ<br />
          United Kingdom
        </p>
      </div>

      <hr />

      <p>
        <strong>By using the Service, you acknowledge that you have read and understood this Privacy Policy.</strong>
      </p>
    </LegalLayout>
  );
}
