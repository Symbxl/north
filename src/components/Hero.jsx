import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-h">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__trust" aria-label="Trust indicators">
            <span className="hero__stars" aria-hidden="true">★★★★★</span>
            <span className="hero__trust-text">
              <strong>4.9/5</strong> from 600+ Utah homeowners · Licensed & Insured
            </span>
          </div>
          <h1 id="hero-h">
            Roof installations & repairs that are hassle-free and{' '}
            <span className="hero__accent">done right</span> the first time.
          </h1>
          <p className="hero__lede">
            We're the first call you should make, and the last call you'll ever
            have to make. Licensed and insured local roofing contractor
            specializing in residential and commercial roof installation,
            replacement and maintenance.
          </p>
          <div className="hero__stats" aria-label="Company highlights">
            <div className="hero__stat"><strong>30+</strong><span>Years experience</span></div>
            <div className="hero__stat"><strong>10,000+</strong><span>Projects completed</span></div>
            <div className="hero__stat"><strong>6,000+</strong><span>Happy clients</span></div>
          </div>
        </div>

        <aside className="discovery-card" aria-label="Free estimate form">
          <header className="discovery-card__steps">
            <span className="discovery-step is-active">
              <span className="discovery-step__dot" aria-hidden="true" />
              Fill out the form
            </span>
            <span className="discovery-step">
              <span className="discovery-step__dot" aria-hidden="true" />
              Get your free estimate
            </span>
          </header>

          <div className="discovery-card__body">
            <h3>Free Discovery Call</h3>
            <p className="discovery-card__lead">
              Excited to speak with you about <a href="#services">your project</a>.
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
                Continue
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  )
}
