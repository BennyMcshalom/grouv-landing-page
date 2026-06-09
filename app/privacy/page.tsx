import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "We built this app to not harvest you. Here's exactly what we collect and why.",
};

export default function PrivacyPage() {
  return (
    <LegalShell>
      <main>
        <div className="page-wrap">
          <div className="page-eyebrow">Legal · Privacy</div>
          <h1 className="page-title">We built this app to <em>not</em> harvest you.</h1>
          <div className="page-meta">Last updated: June 2026 &nbsp;·&nbsp; Effective immediately upon account creation</div>

          <p className="lead">
            Grouv is funded by subscriptions, not by selling your attention or your data. This policy exists to be honest with you about exactly what we collect, what we don&apos;t, and why.
            If something here ever changes, we&apos;ll tell you directly — not bury it in a paragraph you&apos;d never read.
          </p>

          <div className="section-block">
            <h2>What we collect</h2>
            <p>When you create an account, we collect your email address, a display name, a display image, and the life stage information you choose to share during onboarding. That&apos;s how we bring up people in a similar chapter and give you a tailored experience that you deserve.</p>
            <p>When you use Grouv, we store the content you post — your Roots updates, conversations sent, and anything you save to your Life Archive. We also record basic account activity like when you joined and when your chapters opened and closed.</p>
            <p>If you enable Nearby, we briefly access your device location to show you people in the same chapter around you. We don&apos;t log this location, store it, or build any kind of movement history. It&apos;s used in the moment and dropped.</p>
            <p>For payments, Stripe handles everything. We never see or store your card details.</p>
          </div>

          <div className="section-block">
            <h2>What we deliberately do not collect</h2>
            <ul className="never-list">
              <li>Engagement tracking on Wander or Curio cards — we don&apos;t know which ones you read, saved, or ignored</li>
              <li>Behavioral profiles — no model of your habits, preferences, or patterns is built or stored</li>
              <li>Read receipts — no one can tell whether you&apos;ve seen their post or message</li>
              <li>Background location — location is only accessed when Nearby is actively on</li>
              <li>Ad targeting data — we have no advertisers, so we have no reason to build this</li>
              <li>Call or conversation content — we do not listen to, record, or analyse your calls or chats</li>
              <li>Third-party tracking pixels or analytics SDKs that phone home to external platforms</li>
            </ul>
          </div>

          <div className="section-block">
            <h2>Who can see what you post</h2>
            <p>Every post on Grouv has a visibility setting that you control. When you publish, you choose who sees it — your circle only, people in a similar life stage in your vicinity, or the wider Grouv community. You can change this setting at any time, and you can make any post private retroactively.</p>
            <p>Posts set to circle-only are visible only to the people directly connected to you. Posts set to life stage or nearby are visible to users in a matching chapter within your geographical area. Posts set to world are visible to all Grouv users. No post on Grouv is indexed by search engines or accessible without an account.</p>
            <p>Your Life Archive is entirely private to you. No other user can see it, and we cannot read its contents. It lives in your account and belongs to you entirely.</p>
            <p>Anonymous Ask posts are sent without attribution. We don&apos;t reveal who asked even if legally compelled to, because we don&apos;t store that link in a retrievable way.</p>
          </div>

          <div className="section-block">
            <h2>Conversations and calls</h2>
            <p>All private conversations on Grouv — whether text chat, voice notes, voice calls, or video calls — are end-to-end encrypted in transit. This means the content of your conversations is protected between you and the person you&apos;re communicating with, and cannot be intercepted or read by us or any third party during transmission.</p>
            <p>We store message content only as long as it is needed to deliver and display it within the app. You can delete any conversation or individual message at any time, and deletion is permanent — not soft-deleted or archived on our end.</p>
            <p>Call metadata (such as the fact that a call took place and its duration) may be retained for a limited period for technical and safety purposes, but the content of calls is never recorded, stored, transcribed, or analysed.</p>
            <p>We do not use your conversations to train models, improve recommendations, or serve any commercial purpose. What you say on Grouv stays between the people in the conversation.</p>
          </div>

          <div className="section-block">
            <h2>Analytics</h2>
            <p>We use Posthog to understand how the product is used at an aggregate level — things like how many posts are made per day, how often chapters are closed, or how features are performing. This data is not tied to individual identity in any way that we export or act on individually. It helps us build a better product, nothing else.</p>
            <p>We do not use Google Analytics, Facebook Pixel, or any other third-party tracker.</p>
          </div>

          <div className="section-block">
            <h2>Data sharing</h2>
            <p>We don&apos;t sell your data. We don&apos;t share it with advertisers. The only third-party services that touch your data are the infrastructure tools we use to operate Grouv: Supabase (database and storage), Stripe (payments), and Resend (transactional email such as password resets and account notifications). Each is contractually bound by data processing obligations, and we have chosen them with your privacy in mind.</p>
            <p>We do not share data with data brokers, marketing platforms, social networks, or any analytics companies beyond what is described above.</p>
            <div className="highlight-box">
              <p><strong>On legal requests:</strong> If we ever receive a valid legal order requiring us to disclose user data, we will comply with what the law strictly requires — and nothing more. We will notify you before complying if we are legally permitted to do so, and we will push back on requests we consider overly broad.</p>
            </div>
          </div>

          <div className="section-block">
            <h2>Security</h2>
            <p>We take the security of your data seriously. All data is encrypted at rest and in transit. Access to production systems is restricted to a small number of authorised team members and requires multi-factor authentication. We conduct regular security reviews and will notify affected users promptly in the event of a breach that impacts their personal data.</p>
            <p>If you discover a potential security vulnerability in Grouv, please report it responsibly to <a href="mailto:privacy@grouv.app" className="contact-link">privacy@grouv.app</a>.</p>
          </div>

          <div className="section-block">
            <h2>Children&apos;s privacy</h2>
            <p>Grouv is not intended for anyone under the age of 18. We do not knowingly collect personal data from minors. If we become aware that a user is under 18, we will close the account and delete all associated data promptly.</p>
          </div>

          <div className="section-block">
            <h2>Your rights</h2>
            <ul className="promise-list">
              <li>You can export your data — your posts, Life Archive, and account information — at any time from your settings</li>
              <li>You can delete your account and all associated data permanently. Deletion is complete within 30 days and is irreversible.</li>
              <li>You can correct or update any information in your profile at any time</li>
              <li>You can request a copy of all personal data we hold about you</li>
              <li>You can request that we restrict processing of your data while a dispute is being resolved</li>
              <li>You can withdraw consent for optional data uses at any time without affecting your account</li>
            </ul>
            <p>These rights apply regardless of where you are. We don&apos;t gate them behind regional legislation. To exercise any of them, contact us at <a href="mailto:privacy@grouv.app" className="contact-link">privacy@grouv.app</a>.</p>
          </div>

          <div className="section-block">
            <h2>Data retention</h2>
            <p>We keep your data for as long as your account is active. When you delete your account, your personal data — including your posts, profile, conversations, and Life Archive — is permanently removed from all systems, including backups, within 30 days. Aggregate, anonymised analytics data that cannot be traced back to you may be retained beyond this period.</p>
            <p>If your account is suspended for a breach of our Terms of Service, we may retain certain records for a reasonable period to support safety and legal obligations before permanent deletion.</p>
          </div>

          <div className="section-block">
            <h2>Cookies and device data</h2>
            <p>Grouv uses only essential cookies and local storage necessary to keep you signed in and maintain your preferences. We do not use advertising cookies, tracking cookies, or third-party cookies of any kind. You can clear these at any time through your browser or device settings without affecting your account data.</p>
            <p>We may collect basic device information — such as operating system, app version, and crash reports — to diagnose technical issues. This information is used solely for product stability and is not linked to your identity or content.</p>
          </div>

          <div className="section-block">
            <h2>Changes to this policy</h2>
            <p>If we make a meaningful change to how we collect or use your data, we&apos;ll notify you by email before it takes effect — not after. We won&apos;t bury changes in a revision history and call it done. Minor clarifications may be made without notice, but we&apos;ll always keep the &ldquo;Last updated&rdquo; date current.</p>
          </div>

          <div className="section-block">
            <h2>Questions</h2>
            <p>If something here isn&apos;t clear, or you want to know something specific about your data, reach us at:</p>
            <div className="contact-row">
              <a href="mailto:privacy@grouv.app" className="contact-link">privacy@grouv.app</a>
            </div>
          </div>
        </div>
      </main>
    </LegalShell>
  );
}
