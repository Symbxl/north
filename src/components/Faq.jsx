const faqs = [
  { q: 'What areas does True North Roofing serve?', a: 'We serve Salt Lake City, Holladay, Sandy, Draper, Murray, Millcreek, and surrounding Salt Lake, Utah, Davis, and Summit counties.' },
  { q: 'Is True North Roofing licensed and insured?', a: 'Yes. We are fully licensed and insured in the state of Utah, with over 30 years of combined trade experience.' },
  { q: 'What roofing materials do you install?', a: 'We install rubberized asphalt shingles, metal roofing, and low-slope products including TPO and PVC for residential and commercial buildings.' },
  { q: 'Do you offer financing?', a: 'Yes, financing is available through Hearth for qualifying customers. Ask us for details when you request your estimate.' },
  { q: 'Can you handle storm or hail damage?', a: 'Absolutely. Whether wind, hail, fire, or other damage, we can make repairs or full replacements to suit your situation and work with your insurer when needed.' },
  { q: 'How do I get a free estimate?', a: 'Call (435) 292-3638, email eric@truenorthroof.com, or submit the free estimate form on this page. We respond fast.' },
]

export default function Faq() {
  return (
    <section className="section section--soft" id="faq" aria-labelledby="faq-h">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-h">Frequently asked questions</h2>
          <p>Quick answers to the questions homeowners and property managers ask us most.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
