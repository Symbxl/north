import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service · True North Roofing'
    window.scrollTo(0, 0)
  }, [])

  const updated = 'May 23, 2026'

  return (
    <main id="main" className="legal-page">
      <div className="container legal-page__inner">
        <header className="legal-page__head">
          <span className="eyebrow">Legal</span>
          <h1>Terms of Service</h1>
          <p className="legal-page__updated">Last updated: {updated}</p>
        </header>

        <section className="legal-page__body">
          <p>
            These Terms of Service ("Terms") govern your use of truenorthroof.com
            (the "Site") and any estimates, quotes, communications, or services
            provided by True North Roofing ("True North Roofing," "we," "us," or
            "our"). By using the Site or engaging us for work, you agree to these Terms.
            If you do not agree, please do not use the Site or our services.
          </p>

          <h2>Who we are</h2>
          <p>
            True North Roofing is a Utah-based, licensed and insured roofing contractor
            providing residential and commercial roofing, siding, gutters, and related
            exterior services. Our office is located at 1911 Southmoor Dr, Holladay,
            UT 84117.
          </p>

          <h2>Use of the Site</h2>
          <ul>
            <li>You agree to use the Site only for lawful purposes and in a way that doesn't infringe on the rights of others.</li>
            <li>You will not attempt to disrupt, reverse-engineer, scrape, or gain unauthorized access to the Site or its systems.</li>
            <li>All content on the Site, text, images, logos, design, is owned by True North Roofing or its licensors and may not be copied or used without written permission.</li>
          </ul>

          <h2>Estimates and quotes</h2>
          <p>
            Any estimate or quote we provide is based on the information available to us
            at the time and is valid for 30 days unless stated otherwise. Final pricing
            may change if site conditions, materials, scope, or code requirements differ
            from what was originally assessed. We will discuss any changes with you and
            issue a written change order before performing additional work.
          </p>

          <h2>Scheduling and weather</h2>
          <p>
            Roofing and exterior work depends heavily on weather and material availability.
            We will keep you informed and reschedule as needed for safety. We are not
            liable for delays caused by weather, supplier shortages, permit timelines,
            or other circumstances outside our reasonable control.
          </p>

          <h2>Payment</h2>
          <ul>
            <li>Payment terms (deposit, progress payments, and final balance) will be set out in your written agreement or invoice.</li>
            <li>We accept check, ACH, and major credit cards. Financing may be available through Hearth or other partners, subject to their approval and terms.</li>
            <li>Late payments may accrue interest at the lower of 1.5% per month or the maximum permitted by Utah law, plus reasonable collection costs.</li>
          </ul>

          <h2>Warranty</h2>
          <p>
            We stand behind our workmanship. Specific warranty terms, including length,
            transferability, and exclusions, are provided in your project agreement.
            Manufacturer warranties on shingles, siding, gutters, and other materials are
            separate and governed by the manufacturer. Warranty claims may require an
            on-site inspection.
          </p>

          <h2>Insurance claims</h2>
          <p>
            For storm and insurance-related projects, you are responsible for your
            agreement with your insurance carrier. We can assist with documentation and
            inspections, but we do not act as a public adjuster and do not negotiate
            claims on your behalf.
          </p>

          <h2>Communications and consent</h2>
          <p>
            By providing your contact information, you consent to receive calls, texts,
            and emails from us related to your inquiry, estimate, or project, including
            via automated systems. Message and data rates may apply. You can opt out at
            any time as described in our <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The Site and any non-contracted content are provided "as is" and "as
            available," without warranties of any kind, express or implied, including
            merchantability, fitness for a particular purpose, and non-infringement.
            We do not warrant that the Site will be uninterrupted, error-free, or secure.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, True North Roofing's total liability
            arising out of or relating to the Site or these Terms is limited to one
            hundred dollars ($100) or the amount you paid us in the prior twelve months,
            whichever is greater. We are not liable for indirect, incidental, special,
            consequential, or punitive damages. Nothing in this section limits the
            warranty terms in your signed project agreement.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold True North Roofing harmless from any claims,
            losses, or expenses arising out of your misuse of the Site or your breach of
            these Terms.
          </p>

          <h2>Governing law and disputes</h2>
          <p>
            These Terms are governed by the laws of the State of Utah, without regard to
            conflict-of-law principles. Any dispute will be resolved in the state or
            federal courts located in Salt Lake County, Utah, and you consent to that
            jurisdiction and venue.
          </p>

          <h2>Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we'll revise the
            "Last updated" date above. Your continued use of the Site or engagement of
            our services after a change means you accept the updated Terms.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about these Terms? Reach out:
          </p>
          <p>
            True North Roofing<br />
            1911 Southmoor Dr, Holladay, UT 84117<br />
            <a href="mailto:eric@truenorthroof.com">eric@truenorthroof.com</a><br />
            <a href="tel:+14352923638">(435) 292-3638</a>
          </p>
        </section>

        <footer className="legal-page__foot">
          <Link to="/privacy">Read our Privacy Policy →</Link>
        </footer>
      </div>
    </main>
  )
}
