import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact True North Roofing'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="main" className="contact-page">
      <div className="contact-page__bg" aria-hidden="true" />
      <div className="container contact-page__grid">
        <div className="contact-page__intro">
          <span className="eyebrow">Get In Touch</span>
          <h1>Let's talk about your project.</h1>
          <p className="contact-page__lead">
            Tell us a little about the work you need done and we'll get back to you
            within 24 hours with a clear, no-pressure plan.
          </p>

          <ul className="contact-page__points">
            <li>
              <span className="contact-page__bullet" aria-hidden="true">✓</span>
              Free, no-obligation estimates
            </li>
            <li>
              <span className="contact-page__bullet" aria-hidden="true">✓</span>
              Licensed & insured · 30+ years of experience
            </li>
            <li>
              <span className="contact-page__bullet" aria-hidden="true">✓</span>
              Financing available through Hearth
            </li>
            <li>
              <span className="contact-page__bullet" aria-hidden="true">✓</span>
              Owner Eric responds personally
            </li>
          </ul>

          <div className="contact-page__direct">
            <a className="contact-page__direct-row" href="tel:+14352923638">
              <span className="contact-page__direct-icon" aria-hidden="true">📞</span>
              <div>
                <span className="contact-page__direct-label">Call directly</span>
                <strong>(435) 292-3638</strong>
              </div>
            </a>
            <a className="contact-page__direct-row" href="mailto:eric@truenorthroof.com">
              <span className="contact-page__direct-icon" aria-hidden="true">✉</span>
              <div>
                <span className="contact-page__direct-label">Email Eric</span>
                <strong>eric@truenorthroof.com</strong>
              </div>
            </a>
            <div className="contact-page__direct-row contact-page__direct-row--static">
              <span className="contact-page__direct-icon" aria-hidden="true">📍</span>
              <div>
                <span className="contact-page__direct-label">Office</span>
                <strong>1911 Southmoor Dr, Holladay, UT 84117</strong>
              </div>
            </div>
          </div>
        </div>

        <aside className="discovery-card" aria-label="Contact form">
          <header className="discovery-card__steps">
            <span className="discovery-step is-active">
              <span className="discovery-step__dot" aria-hidden="true" />
              Fill out the form
            </span>
            <span className="discovery-step">
              <span className="discovery-step__dot" aria-hidden="true" />
              We follow up within 24 hours
            </span>
          </header>

          <div className="discovery-card__body">
            <h3>Request your free estimate</h3>
            <p className="discovery-card__lead">
              Excited to speak with you about <a href="#contact">your project</a>.
            </p>
            <p className="discovery-card__sub">
              Contact <a href="mailto:eric@truenorthroof.com">eric@truenorthroof.com</a> to reach the owner directly or call <a href="tel:+14352923638">(435) 292-3638</a>.
            </p>

            <form
              className="discovery-form"
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! Eric will reach out shortly at the contact info you provided.') }}
            >
              <div className="discovery-phone">
                <span className="discovery-phone__flag" aria-hidden="true">🇺🇸</span>
                <span className="discovery-phone__code">+1</span>
                <span className="discovery-phone__sep" aria-hidden="true" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  required
                  aria-label="Phone number"
                />
              </div>

              <div className="discovery-form__row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name * *"
                  required
                  aria-label="First name"
                  className="discovery-input"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name * *"
                  required
                  aria-label="Last name"
                  className="discovery-input"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email address *"
                required
                aria-label="Email address"
                className="discovery-input"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Briefly describe your project"
                aria-label="Project details"
                className="discovery-input discovery-input--textarea"
              />

              <div className="discovery-trust">
                <span className="discovery-trust__check" aria-hidden="true">✓</span>
                <span className="discovery-trust__label">Spam protected</span>
                <span className="discovery-trust__meta">Privacy · Help</span>
              </div>

              <label className="discovery-consent">
                <input type="checkbox" defaultChecked />
                <span>
                  By entering your information, you consent to your data being saved in
                  accordance with our <Link to="/terms">Terms</Link> &amp; <Link to="/privacy">Privacy Policy</Link>.
                </span>
              </label>

              <button type="submit" className="discovery-submit">
                Send Message
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  )
}
