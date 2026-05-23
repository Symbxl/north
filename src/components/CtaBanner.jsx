export default function CtaBanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-h">
      <div className="container cta-banner__inner">
        <div>
          <span className="cta-banner__eyebrow">Free Download</span>
          <h2 id="cta-h">Don't get caught off-guard.</h2>
          <p>Get your free copy of our top 7 questions to ask your roofer before you hire them.</p>
        </div>
        <div className="cta-banner__actions">
          <a className="btn btn--white" href="#contact">Get the Free Report</a>
          <a className="btn btn--dark" href="tel:+14352923638">📞 (435) 292-3638</a>
        </div>
      </div>
    </section>
  )
}
