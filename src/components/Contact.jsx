export default function Contact() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-h">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">Get In Touch</span>
          <h2 id="contact-h">
            True North Roofing is a name <span className="contact-accent">you can trust.</span>
          </h2>
          <p>
            We're the first call you should make, and the last call you'll ever have to make.
            Reach out for a free, no-pressure estimate.
          </p>

          <div className="contact-badge">
            <span className="contact-badge__icon" aria-hidden="true">⚡</span>
            <span>We respond within 24 hours · No obligation</span>
          </div>

          <div className="contact-info">
            <a className="contact-info__item contact-info__item--action" href="tel:+14352923638">
              <span className="contact-info__icon" aria-hidden="true">📞</span>
              <div className="contact-info__body">
                <strong>Phone</strong>
                <span className="contact-info__value">(435) 292-3638</span>
              </div>
              <span className="contact-info__arrow" aria-hidden="true">→</span>
            </a>
            <a className="contact-info__item contact-info__item--action" href="mailto:eric@truenorthroof.com">
              <span className="contact-info__icon" aria-hidden="true">✉</span>
              <div className="contact-info__body">
                <strong>Email</strong>
                <span className="contact-info__value">eric@truenorthroof.com</span>
              </div>
              <span className="contact-info__arrow" aria-hidden="true">→</span>
            </a>
            <div className="contact-info__item">
              <span className="contact-info__icon" aria-hidden="true">📍</span>
              <div className="contact-info__body">
                <strong>Office</strong>
                <span className="contact-info__value">1911 Southmoor Dr, Holladay, Utah 84117</span>
              </div>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__icon" aria-hidden="true">🕒</span>
              <div className="contact-info__body">
                <strong>Hours</strong>
                <span className="contact-info__value">Mon–Fri · 8:00am – 9:00pm</span>
                <span className="contact-info__value">Saturday · 9:00am – 5:00pm</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="hero__card">
          <h3>Request your free estimate</h3>
          <p className="small">Licensed & insured. 30 years experience. Financing available through Hearth.</p>
          <form className="form" onSubmit={(e) => { e.preventDefault(); alert("Thanks! Eric will reach out shortly."); }}>
            <div className="form__row">
              <input type="text" placeholder="First name" required aria-label="First name" />
              <input type="text" placeholder="Last name" required aria-label="Last name" />
            </div>
            <input type="email" placeholder="Email address" required aria-label="Email address" />
            <input type="tel" placeholder="Phone number" required aria-label="Phone number" />
            <select aria-label="Project type" defaultValue="">
              <option value="" disabled>Project type</option>
              <option>Residential roof replacement</option>
              <option>Roof repair</option>
              <option>Commercial roofing</option>
              <option>Siding installation</option>
              <option>Rain gutters & leaf guards</option>
              <option>Windows</option>
              <option>Storm damage</option>
            </select>
            <textarea placeholder="Tell us about your project" aria-label="Project description"></textarea>
            <button type="submit" className="btn btn--primary">Send My Request</button>
          </form>
        </aside>
      </div>
    </section>
  )
}
