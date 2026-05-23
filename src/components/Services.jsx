const services = [
  {
    title: 'Roofing Installation & Repair',
    img: '/media/roof-1.jpg',
    desc: "We specialize in residential and commercial roof replacements and repairs. We'll ensure that your home or building receives a new, reliable, durable, and long-lasting roofing system.",
  },
  {
    title: 'Roofing Tear Off',
    img: '/media/roof-2.jpg',
    desc: 'We remove the existing layers of roofing down to the sheathing, then start fresh using the best products and following local building codes to provide quality and durability.',
  },
  {
    title: 'Roofing Products',
    img: '/media/roof-6.jpg',
    desc: 'We install all types of roofing materials including rubberized asphalt shingles, metal roofing, and low-slope products such as TPO and PVC.',
  },
  {
    title: 'Low-Slope Roof Installation',
    img: '/media/roof-4.jpg',
    desc: 'We are specialists when it comes to low slope applications for residential and commercial structures.',
  },
  {
    title: 'Roofing Recover',
    img: '/media/roof-5.jpg',
    desc: 'We can "recover" an existing roof if certain conditions are met to uphold local building codes, saving time and disposal cost.',
  },
  {
    title: 'Storm Damage Repair',
    img: '/media/roof-3.jpg',
    desc: 'Whether it be wind, hail, fire, or other damage, we can make repairs or replacements as needed to suit your situation.',
  },
  {
    title: 'Window Installation',
    img: '/media/siding-1.jpg',
    desc: 'We install all major manufacturers\' window lines including Cascade, Milgard, Andersen, Pella, and Sierra Pacific.',
  },
  {
    title: 'Window Repair',
    img: '/media/siding-2.jpg',
    desc: 'Interior and exterior finishes sometimes need repair or replacement after installing a new window. We can handle whatever needs to be done.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="svc-h">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Residential Services</span>
          <h2 id="svc-h">Our Services</h2>
          <p>
            Full-service residential roofing, siding, gutters, and windows ,
            backed by 30 years of trade experience and over 10,000 completed
            projects across Utah.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-card__media">
                <img className="service-card__img" src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a className="service-card__link" href="#contact">Get a Quote</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
