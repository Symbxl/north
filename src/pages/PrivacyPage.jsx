import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy · True North Roofing'
    window.scrollTo(0, 0)
  }, [])

  const updated = 'May 23, 2026'

  return (
    <main id="main" className="legal-page">
      <div className="container legal-page__inner">
        <header className="legal-page__head">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="legal-page__updated">Last updated: {updated}</p>
        </header>

        <section className="legal-page__body">
          <p>
            True North Roofing ("True North Roofing," "we," "us," or "our") respects
            your privacy. This Privacy Policy explains what information we collect
            when you use truenorthroof.com (the "Site") or request services from us,
            how we use it, and the choices you have. By using the Site or contacting
            us, you agree to the practices described below.
          </p>

          <h2>Information we collect</h2>
          <p>We collect information that you provide to us directly, including:</p>
          <ul>
            <li>Name, phone number, email address, and project address when you fill out a form, call, text, or email us.</li>
            <li>Details about your roofing, siding, gutter, or related project (photos, measurements, scope, timing).</li>
            <li>Payment and financing details when you book a paid service (processed through our payment or financing partners).</li>
          </ul>
          <p>We also automatically collect limited technical information when you visit the Site, such as your IP address, browser type, device type, referring URL, pages viewed, and timestamps, using standard log files and cookies.</p>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your inquiry, schedule estimates, and complete work you've requested.</li>
            <li>To communicate with you about your project, including reminders, follow-ups, and warranty information.</li>
            <li>To send occasional service updates and promotions (you can opt out anytime).</li>
            <li>To improve the Site, our services, and customer experience.</li>
            <li>To meet legal, tax, insurance, and contracting requirements.</li>
          </ul>

          <h2>How we share your information</h2>
          <p>We do not sell your personal information. We share it only with:</p>
          <ul>
            <li><strong>Service providers</strong> who help us run the business (e.g., scheduling, CRM, email, hosting, analytics, payment, and financing partners such as Hearth).</li>
            <li><strong>Subcontractors and suppliers</strong> when needed to complete your project.</li>
            <li><strong>Authorities</strong> when required by law, subpoena, or to protect our rights and the safety of others.</li>
            <li><strong>Successors</strong> in the event of a sale, merger, or transfer of our business.</li>
          </ul>

          <h2>Text messages and calls</h2>
          <p>
            When you provide your phone number, you agree that we may call or text you
            about your inquiry, estimate, or project, including via automated systems.
            Message and data rates may apply. Reply STOP to opt out of texts at any time
            or ask us to remove you from call lists.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            The Site uses cookies and similar technologies to remember your preferences,
            measure traffic, and improve performance. You can disable cookies through
            your browser settings, but some parts of the Site may not work as expected.
          </p>

          <h2>Data retention</h2>
          <p>
            We keep your information only as long as needed for the purposes described
            above, to honor warranties, and to comply with our legal and accounting
            obligations. After that, we either delete it or anonymize it.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>You can ask us to access, correct, or delete the personal information we hold about you.</li>
            <li>You can opt out of marketing emails using the unsubscribe link, or out of texts by replying STOP.</li>
            <li>Utah residents and residents of other states with applicable privacy laws may have additional rights, contact us to exercise them.</li>
          </ul>

          <h2>Children</h2>
          <p>The Site is intended for adults. We do not knowingly collect information from children under 13.</p>

          <h2>Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to
            protect your information. No method of transmission or storage is 100%
            secure, so we cannot guarantee absolute security.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we'll
            revise the "Last updated" date above. Material changes will be posted on
            this page.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions or requests about your privacy? Reach out to us:
          </p>
          <p>
            True North Roofing<br />
            1911 Southmoor Dr, Holladay, UT 84117<br />
            <a href="mailto:eric@truenorthroof.com">eric@truenorthroof.com</a><br />
            <a href="tel:+14352923638">(435) 292-3638</a>
          </p>
        </section>

        <footer className="legal-page__foot">
          <Link to="/terms">Read our Terms of Service →</Link>
        </footer>
      </div>
    </main>
  )
}
