export default function TrustBar() {
  const items = [
    'Licensed & Insured',
    '30+ Years Experience',
    '10,000+ Roofs Installed',
    'Residential & Commercial',
    'Financing Available',
    'Free Estimates',
  ]
  return (
    <div className="trustbar" aria-label="Trust badges">
      <div className="container trustbar__row">
        {items.map((t) => (
          <span key={t}><span className="trustbar__dot" />{t}</span>
        ))}
      </div>
    </div>
  )
}
