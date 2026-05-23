const steps = [
  { n: 1, t: 'Free Estimate', d: 'Call, email, or submit the form. We inspect your project and provide a clear, written quote with no pressure.' },
  { n: 2, t: 'Plan & Schedule', d: 'We help you choose the right materials and lock in a start date that fits your timeline.' },
  { n: 3, t: 'Install With Care', d: 'Our crews follow local building codes, protect your property, and clean up daily.' },
  { n: 4, t: 'Final Walkthrough', d: 'We inspect every detail with you and back the work with our workmanship guarantee.' },
]

export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="proc-h">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How We Work</span>
          <h2 id="proc-h">A hassle-free process, start to finish</h2>
          <p>From your first call to the final inspection, we keep it clear, on time, and on budget.</p>
        </div>
        <div className="process-grid">
          {steps.map((s) => (
            <div className="process-step" key={s.n}>
              <div className="process-step__num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
