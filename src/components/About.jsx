export default function About() {
  return (
    <section className="section section--soft" id="about" aria-labelledby="about-h">
      <div className="container about">
        <div className="about__media">
          <img src="/media/siding-1.jpg" alt="True North Roofing crew at work in Utah" loading="lazy" />
          <div className="about__badge" aria-label="Established 2016">
            <strong>2016</strong>
            <span>Family Owned</span>
          </div>
        </div>
        <div>
          <span className="eyebrow">About True North Roofing</span>
          <h2 id="about-h">A name you can trust. Integrity built into every roof.</h2>
          <p>
            True North Roofing is a licensed and insured local Utah contractor
            specializing in residential and commercial roof installation,
            replacement, and maintenance. Don't leave your home to chance ,
            leave it to the experts.
          </p>
          <p>
            Owner Eric Schroff has worked in construction since 1994 and spent
            22 years working alongside his father in the roofing and siding
            trades before establishing True North Roofing in 2016. Since then,
            the team has completed approximately 10,000 roofs across the Salt
            Lake valley and beyond.
          </p>
          <div className="about__stats">
            <div className="about__stat">
              <strong>30+</strong>
              <span>Years experience</span>
            </div>
            <div className="about__stat">
              <strong>10,000+</strong>
              <span>Projects completed</span>
            </div>
            <div className="about__stat">
              <strong>6,000+</strong>
              <span>Happy clients</span>
            </div>
          </div>
          <div className="about__owner">
            <span>👷</span>
            <span>Eric Schroff · Owner · Holladay, UT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
