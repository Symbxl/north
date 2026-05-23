export default function Commercial() {
  return (
    <section className="section" id="commercial" aria-labelledby="comm-h">
      <div className="container split split--reverse">
        <div className="split__media">
          <img src="/media/commercial-1.jpg" alt="Large commercial roof replacement project" loading="lazy" />
        </div>
        <div>
          <span className="eyebrow">Commercial Roofing</span>
          <h2 id="comm-h">The commercial roofing partner contractors actually enjoy working with.</h2>
          <p>
            General contractors and property owners rely on True North Roofing
            for accurate bids, responsive project management, and proven
            results across every type of commercial roof system.
          </p>
          <ul>
            <li>Roofing tear-off & full re-roofs on schedule</li>
            <li>TPO, PVC, modified bitumen & metal roofing systems</li>
            <li>Tenant improvements for new & existing space</li>
            <li>Roofing recover where code permits</li>
            <li>Manufacturer-backed commercial warranties</li>
            <li>Work completed without disrupting business operations</li>
          </ul>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#contact">Request a Bid</a>
            <a className="btn btn--ghost" href="tel:+14352923638">Talk to Eric</a>
          </div>
        </div>
      </div>
    </section>
  )
}
