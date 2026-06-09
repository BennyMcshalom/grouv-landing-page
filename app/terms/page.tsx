import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'How Grouv works, and what we ask of you.',
};

export default function TermsPage() {
  return (
    <LegalShell>
      <main>
        <div className="page-wrap">
          <div className="page-eyebrow">Legal · Terms of Service</div>
          <h1 className="page-title">How Grouv <em>works</em>, and what we ask of you.</h1>
          <div className="page-meta">Last updated: June 2026 &nbsp;·&nbsp; By using Grouv, you agree to these terms</div>

          <p className="lead">
            Grouv is built around a simple premise: honest people, sharing real chapters, without performance or pretence.
            These terms exist to protect that — for you and everyone else on the platform. We&apos;ve written them to be read, not filed away.
          </p>

          <div className="section-block">
            <h2>1. Acceptance of terms</h2>
            <p>By creating an account, accessing, or using Grouv in any way, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, do not use the platform. These terms form a binding legal agreement between you and Grouv.</p>
            <p>If you are using Grouv on behalf of an organisation, you represent that you have the authority to bind that organisation to these terms, and that the organisation accepts them.</p>
          </div>

          <div className="section-block">
            <h2>2. Eligibility</h2>
            <p>Grouv is available to anyone aged 18 and over. By creating an account, you confirm that you are at least 18 years old and that the information you provide during onboarding is truthful. If we discover that a user is under 18, we will terminate the account and delete all associated data immediately.</p>
            <p>You must not be prohibited from using the service under the laws of any applicable jurisdiction. You may not create an account if a previous account of yours was terminated for a breach of these terms.</p>
          </div>

          <div className="section-block">
            <h2>3. Your account</h2>
            <p>You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must not share your account with others or transfer it to another person.</p>
            <p>You agree to provide accurate and current information when creating your account, including a truthful representation of your life stage. Misrepresenting yourself to manipulate matching or connections is a violation of these terms.</p>
            <p>If you suspect your account has been compromised or accessed without authorisation, you must notify us immediately at <a href="mailto:hello@grouv.app" className="contact-link">hello@grouv.app</a>. We are not liable for any loss resulting from unauthorised access to your account caused by your failure to keep your credentials secure.</p>
            <p>We reserve the right to suspend or terminate accounts that we believe, at our reasonable discretion, have been abandoned, are being used fraudulently, or are in violation of these terms.</p>
          </div>

          <div className="section-block">
            <h2>4. What Grouv is</h2>
            <p>Grouv is a social platform organised around life stages, not identities or audiences. It is designed for honest, stage-based connection — sharing what you&apos;re actually doing in a chapter of your life, finding people nearby or globally who are in a similar one, and building real relationships without the mechanics of performance.</p>
            <p>Spaces are organised around life domains: Career, Spiritual, Wealth, Adventure, Health, Creative, Learning, and Relationships. You can be active in up to four spaces at once. Nearby lets you discover people in your geographical area in a similar chapter. Bonds are the closest tier of connection on Grouv — intentionally capped to protect depth.</p>
            <p>Posts on Grouv can be set to be visible to your circle only, to people in a similar life stage in your vicinity, or to the wider Grouv community. You control this at the time of posting and can adjust it at any time. No content on Grouv is indexed by search engines or accessible to non-users.</p>
          </div>

          <div className="section-block">
            <h2>5. Your content</h2>
            <p>You own the content you create on Grouv — your posts, your Life Archive, your profile, and anything you share in conversations. By posting content, you grant Grouv a limited, non-exclusive, royalty-free licence to store, display, and deliver that content solely for the purpose of operating the platform and making it available to the users you have chosen to share it with. This licence ends when you delete the content or your account.</p>
            <p>We do not use your content to train machine learning models, sell to third parties, surface in advertising, or for any purpose beyond operating the service you have signed up for.</p>
            <p>You are solely responsible for the content you post. By posting, you represent that you have the right to share that content and that it does not violate the rights of any third party, including intellectual property rights, privacy rights, or applicable law.</p>
            <p>Conversations — including text messages, voice notes, voice calls, and video calls — are private between participants. Content shared in a private conversation may not be shared outside of Grouv without the explicit consent of the other person. Doing so may violate applicable privacy laws and these terms.</p>
          </div>

          <div className="section-block">
            <h2>6. Conversations and calls</h2>
            <p>Grouv supports private conversations in multiple forms: text chat, voice notes, voice calls, and video calls. All of these are end-to-end encrypted in transit. We do not listen to, record, store the content of, transcribe, or analyse your calls or private messages.</p>
            <p>You may not use Grouv&apos;s conversation features to harass, threaten, solicit, or send unsolicited commercial messages to any user. You may not record or capture the content of a call with another user without their explicit knowledge and consent. Doing so may violate applicable wiretapping or recording laws in your jurisdiction.</p>
            <p>We may retain limited metadata — such as whether a conversation or call occurred and its approximate duration — for a limited period for technical, safety, and legal compliance purposes. This metadata is handled in accordance with our Privacy Policy.</p>
          </div>

          <div className="section-block">
            <h2>7. Prohibited conduct</h2>
            <p>Grouv is built on honesty and respect. The following conduct is strictly prohibited and will result in immediate account suspension or permanent removal, depending on severity:</p>
            <ul className="never-list">
              <li>Creating a fake identity, impersonating any person or organisation, or misrepresenting your life stage</li>
              <li>Harassing, threatening, bullying, or targeting another user through any feature of the platform</li>
              <li>Sharing another person&apos;s private content, personal information, or conversation content outside of Grouv without their explicit consent</li>
              <li>Posting, sharing, or distributing content that is defamatory, obscene, or incites hatred or violence against any person or group</li>
              <li>Posting content that sexualises, exploits, or endangers minors in any way</li>
              <li>Using Grouv to distribute spam, unsolicited commercial communications, or pyramid scheme content</li>
              <li>Attempting to reverse-engineer, scrape, copy, or extract user data, content, or any part of the platform&apos;s infrastructure</li>
              <li>Using automated means (bots, scripts, crawlers) to access, interact with, or collect data from Grouv</li>
              <li>Attempting to circumvent any intentional product limitation, including connection caps or Bond limits</li>
              <li>Using Anonymous Ask to harass, intimidate, or cause distress to another user</li>
              <li>Uploading malware, viruses, or any code designed to interfere with the platform or its users</li>
              <li>Coordinating on Grouv for activities that are illegal in your jurisdiction or in the jurisdiction of the person you are communicating with</li>
            </ul>
            <p>We reserve the right to remove any content, suspend any account, or report activity to relevant authorities where we believe these prohibitions have been violated.</p>
          </div>

          <div className="section-block">
            <h2>8. Content moderation and enforcement</h2>
            <p>Grouv reviews reported content and accounts in response to user reports and, where technically possible, through automated detection of clearly prohibited material such as child sexual abuse material (CSAM). We do not proactively monitor private conversations.</p>
            <p>If your account is suspended or content is removed, you will be notified where legally permitted. You may appeal a moderation decision by contacting <a href="mailto:hello@grouv.app" className="contact-link">hello@grouv.app</a>. We will review appeals in good faith, but our decision on enforcement is final.</p>
            <p>Accounts permanently removed for serious violations — including harassment, CSAM, or repeated breaches — will not be eligible for reinstatement.</p>
          </div>

          <div className="section-block">
            <h2>9. Subscriptions and billing</h2>
            <p>Grouv is a paid product. After a 14-day free trial, a subscription of $10/month or $84/year is required for full access. Payment is processed securely by Stripe. We never see or store your payment card details.</p>
            <p>Your subscription renews automatically at the end of each billing period unless you cancel. You can cancel at any time from your account settings — before your next renewal date. Cancellation takes effect at the end of your current paid period; you retain full access until then.</p>
            <p>We do not offer prorated refunds for unused time in a billing period. If you believe you have been charged in error or experienced a service failure on our end that warrants a refund, contact us at <a href="mailto:hello@grouv.app" className="contact-link">hello@grouv.app</a> and we will review your case fairly.</p>
            <p>We reserve the right to change our subscription pricing with at least 30 days&apos; advance notice to existing subscribers. If you do not agree with a price change, you may cancel before it takes effect without penalty.</p>
            <p>In the event of a failed payment, we will attempt to notify you and provide a grace period before suspending access. We will not delete your account or data solely due to a payment failure without reasonable prior notice.</p>
            <div className="highlight-box">
              <p><strong>Grouv for Teams:</strong> Organisational subscriptions are governed by a separate agreement between Grouv and the purchasing organisation. Individual users on a team plan are subject to these personal terms for their own use of the platform.</p>
            </div>
          </div>

          <div className="section-block">
            <h2>10. Intellectual property</h2>
            <p>Grouv and its original content — including the product design, branding, logo, interface elements, and written materials — are the intellectual property of Grouv and are protected by applicable copyright, trademark, and other laws. You may not copy, reproduce, distribute, or create derivative works from any part of Grouv without our written permission.</p>
            <p>You retain full ownership of the content you create. Nothing in these terms transfers your intellectual property rights to us.</p>
            <p>If you believe that content on Grouv infringes your intellectual property rights, please contact us at <a href="mailto:hello@grouv.app" className="contact-link">hello@grouv.app</a> with details of the alleged infringement and we will investigate promptly.</p>
          </div>

          <div className="section-block">
            <h2>11. Third-party links and services</h2>
            <p>Grouv may contain links to third-party websites or services that are not owned or controlled by us. We have no control over the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any third-party services you access.</p>
            <p>The inclusion of any link on Grouv does not constitute endorsement of the linked site or its content.</p>
          </div>

          <div className="section-block">
            <h2>12. Closing your account</h2>
            <p>You can delete your account at any time from your settings. When you do, your content — posts, conversations, Life Archive, and all personal data — is permanently removed from our systems within 30 days, including from backups. This action is irreversible.</p>
            <p>The Chapter Closing Ritual is a product feature, not a legal requirement. You can delete your account without completing it. We built it because we think it matters — but the choice is yours.</p>
            <p>If your account is terminated by Grouv for a violation of these terms, we may retain certain records for a reasonable period as necessary for safety, legal, or dispute resolution purposes before permanent deletion.</p>
          </div>

          <div className="section-block">
            <h2>13. Grouv&apos;s commitments to you</h2>
            <ul className="rule-list">
              <li>We will never sell advertising space on Grouv — ever</li>
              <li>We will never sell your personal data to third parties</li>
              <li>We will never introduce infinite scroll, algorithmic ranking by engagement, or public follower counts</li>
              <li>We will give you at least 30 days&apos; notice before any price change takes effect</li>
              <li>We will notify you before making any change to these terms that materially affects your rights</li>
              <li>We will act in good faith in all disputes and take moderation decisions seriously</li>
              <li>We will keep the product honest about what it is — a place for real chapters, not a performance platform</li>
            </ul>
          </div>

          <div className="section-block">
            <h2>14. Disclaimers</h2>
            <p>Grouv is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties, express or implied, regarding the reliability, accuracy, or fitness for purpose of the platform. We do not guarantee that the service will be uninterrupted, error-free, or free from harmful components.</p>
            <p>We are not responsible for the accuracy, completeness, or appropriateness of any user-generated content on the platform. Interactions between users — including connections, conversations, and meetings facilitated by Nearby — are the responsibility of the users involved. Grouv is not liable for any harm arising from those interactions.</p>
          </div>

          <div className="section-block">
            <h2>15. Limitation of liability</h2>
            <p>To the maximum extent permitted by applicable law, Grouv and its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of or inability to use the platform.</p>
            <p>Our total liability to you for any claim arising from these terms or your use of Grouv shall not exceed the amount you paid to us in the 12 months preceding the event giving rise to the claim.</p>
            <p>Nothing in these terms limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.</p>
          </div>

          <div className="section-block">
            <h2>16. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Grouv and its officers, directors, and employees from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of the platform, your content, your conduct toward other users, or your breach of these terms.</p>
          </div>

          <div className="section-block">
            <h2>17. Governing law and disputes</h2>
            <p>These terms are governed by and construed in accordance with applicable law. If a dispute arises in connection with these terms or your use of Grouv, we encourage you to contact us first at <a href="mailto:hello@grouv.app" className="contact-link">hello@grouv.app</a> so we can try to resolve it informally.</p>
            <p>If a dispute cannot be resolved informally, it shall be subject to the exclusive jurisdiction of the courts of the territory in which Grouv is incorporated, unless applicable consumer protection law in your jurisdiction provides otherwise.</p>
          </div>

          <div className="section-block">
            <h2>18. Changes to these terms</h2>
            <p>We may update these terms from time to time. If we make a change that materially affects your rights or obligations, we will notify you by email at least 14 days before the change takes effect. Continued use of Grouv after that date constitutes acceptance of the updated terms.</p>
            <p>Minor changes — such as clarifications, corrections, or updates that do not affect your rights — may be made without prior notice, but the &ldquo;Last updated&rdquo; date at the top of this page will always reflect the most recent revision.</p>
          </div>

          <div className="section-block">
            <h2>19. Contact</h2>
            <p>For questions about these terms, to report a violation, or for anything else, reach us at <a href="mailto:hello@grouv.app" className="contact-link">hello@grouv.app</a>. We&apos;re a small team and we read everything.</p>
          </div>
        </div>
      </main>
    </LegalShell>
  );
}
