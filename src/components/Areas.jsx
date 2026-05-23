const areas = [
  'Salt Lake City', 'Holladay', 'Sandy', 'Draper', 'Murray', 'Millcreek',
  'Salt Lake County', 'Utah County', 'Davis County', 'Summit County',
]

export default function Areas() {
  return (
    <section className="section" id="areas" aria-labelledby="areas-h">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Service Area</span>
          <h2 id="areas-h">Proudly serving the greater Salt Lake valley</h2>
          <p>If you're nearby and don't see your city listed — give us a call. We likely cover you too.</p>
        </div>
        <div className="areas-grid">
          {areas.map((a) => <div key={a} className="area-chip">{a}, UT</div>)}
        </div>
      </div>
    </section>
  )
}
