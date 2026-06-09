import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Contact',
  description: "We're a small team. We read everything.",
};

export default function ContactPage() {
  return (
    <LegalShell>
      <main>
        <div className="page-wrap">
          <div className="page-eyebrow">Get in touch</div>
          <h1 className="page-title">We&apos;re a small team.<br /><em>We read everything.</em></h1>
          <p className="page-sub">
            No ticket system. No bot. Just an inbox we check. If you&apos;re writing in, something matters to you — that matters to us.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-card-label">General</div>
              <div className="contact-card-title">Hello</div>
              <div className="contact-card-desc">Questions about Grouv, feedback, ideas, or just something you wanted to say.</div>
              <a href="mailto:hello@grouv.app" className="contact-email">hello@grouv.app</a>
            </div>

            <div className="contact-card">
              <div className="contact-card-label">Your Account</div>
              <div className="contact-card-title">Support</div>
              <div className="contact-card-desc">Billing issues, account access, subscription questions, or anything that&apos;s not working right.</div>
              <a href="mailto:support@grouv.app" className="contact-email">support@grouv.app</a>
            </div>

            <div className="contact-card">
              <div className="contact-card-label">Data &amp; Privacy</div>
              <div className="contact-card-title">Privacy</div>
              <div className="contact-card-desc">Data requests, deletion, questions about what we store, or anything related to your privacy.</div>
              <a href="mailto:privacy@grouv.app" className="contact-email">privacy@grouv.app</a>
            </div>

            <div className="contact-card">
              <div className="contact-card-label">Organizations</div>
              <div className="contact-card-title">Grouv for Teams</div>
              <div className="contact-card-desc">Interested in Grouv for your company or a group of people? We&apos;d like to hear about it.</div>
              <a href="mailto:teams@grouv.app" className="contact-email">teams@grouv.app</a>
            </div>
          </div>

          <p className="honest-note">
            We don&apos;t have a support SLA or a 24-hour response guarantee. We&apos;re honest about that. What we can promise is that we&apos;ll actually read what you send and respond like a person.
          </p>
        </div>
      </main>
    </LegalShell>
  );
}
