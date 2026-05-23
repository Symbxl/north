import { useMemo, useState } from 'react'

const TERM_MONTHS = 60

const CREDIT_TIERS = [
  { id: 'excellent', label: 'Excellent (760+)', apr: 0.0799 },
  { id: 'very-good', label: 'Very good (720–759)', apr: 0.0999 },
  { id: 'good', label: 'Good (680–719)', apr: 0.1299 },
  { id: 'fair', label: 'Fair (640–679)', apr: 0.1799 },
  { id: 'building', label: 'Building (below 640)', apr: 0.2499 },
]

const fmtUSD = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Math.round(n))

function monthlyPayment(principal, apr, months) {
  if (!principal || principal <= 0) return 0
  const r = apr / 12
  if (r === 0) return principal / months
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

export default function FinancingCalculator() {
  const [cost, setCost] = useState(15000)
  const [tierId, setTierId] = useState('very-good')

  const tier = CREDIT_TIERS.find((t) => t.id === tierId) ?? CREDIT_TIERS[1]
  const monthly = useMemo(() => monthlyPayment(cost, tier.apr, TERM_MONTHS), [cost, tier])
  const totalCost = monthly * TERM_MONTHS
  const totalInterest = Math.max(0, totalCost - cost)
  const rangeFill = Math.min(100, Math.max(0, ((cost - 1000) / (75000 - 1000)) * 100))

  return (
    <section className="section financing" id="financing" aria-labelledby="fin-h">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Financing Calculator</span>
          <h2 id="fin-h">Estimate your monthly payment</h2>
          <p>
            Get a quick estimate for your roofing or exterior project. Financing is
            available through Hearth — quotes won't affect your credit score.
          </p>
        </div>

        <div className="financing__card">
          <div className="financing__inputs">
            <div className="financing__group">
              <div className="financing__group-head">
                <label htmlFor="fin-cost" className="financing__label">Project cost</label>
                <span className="financing__value">{fmtUSD(cost)}</span>
              </div>
              <input
                id="fin-cost"
                type="range"
                min="1000"
                max="75000"
                step="500"
                value={cost}
                onChange={(e) => setCost(Number(e.target.value))}
                className="financing__range"
                style={{ '--range-fill': `${rangeFill}%` }}
                aria-label="Project cost"
              />
              <div className="financing__scale">
                <span>$1k</span>
                <span>$25k</span>
                <span>$50k</span>
                <span>$75k</span>
              </div>
              <input
                type="number"
                min="1000"
                max="200000"
                step="100"
                value={cost}
                onChange={(e) => setCost(Number(e.target.value) || 0)}
                className="financing__number"
                aria-label="Enter project cost"
              />
            </div>

            <div className="financing__group">
              <label className="financing__label">Your credit score</label>
              <div className="financing__tiers" role="radiogroup" aria-label="Credit score range">
                {CREDIT_TIERS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="radio"
                    aria-checked={tierId === t.id}
                    className={`financing__tier${tierId === t.id ? ' is-active' : ''}`}
                    onClick={() => setTierId(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="financing__result">
            <span className="financing__result-label">Estimated monthly payment</span>
            <div className="financing__amount">
              <span className="financing__currency">$</span>
              <span className="financing__number-big">{fmtUSD(monthly).replace('$', '')}</span>
              <span className="financing__per">/mo</span>
            </div>
            <div className="financing__meta">
              <div>
                <strong>{TERM_MONTHS} months</strong>
                <span>Fixed term</span>
              </div>
              <div>
                <strong>{(tier.apr * 100).toFixed(2)}%</strong>
                <span>Est. APR</span>
              </div>
              <div>
                <strong>{fmtUSD(totalInterest)}</strong>
                <span>Total interest</span>
              </div>
            </div>
            <a
              className="financing__cta"
              href="https://www.gethearth.com"
              target="_blank"
              rel="noreferrer"
            >
              Check your rate with Hearth
              <span aria-hidden="true">→</span>
            </a>
            <p className="financing__disclaimer">
              Estimates only. Actual rate, term, and monthly payment depend on Hearth lender
              approval, credit profile, and project details. Checking offers will not affect
              your credit score.
            </p>
            <span className="financing__powered">
              Powered by <strong>Hearth</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
