import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sectionHref = (id) => (onHome ? `#${id}` : `/#${id}`)
  const compact = !onHome || scrolled

  return (
    <header className={compact ? 'nav nav--compact' : 'nav nav--full'}>
      <div className="container nav__inner">
        <Link className="nav__brand" to="/" aria-label="True North Roofing home">
          <img src="/media/logo.png" alt="True North Roofing logo" />
        </Link>
        <nav className="nav__links" aria-label="Primary">
          <a href={sectionHref('services')}>Residential</a>
          <a href={sectionHref('commercial')}>Commercial</a>
          <a href={sectionHref('siding')}>Siding & Gutters</a>
          <a href={sectionHref('gallery')}>Gallery</a>
          <a href={sectionHref('areas')}>Service Area</a>
          <div className="nav__contact">
            <Link to="/contact" className="nav__contact-link">Contact</Link>
            <div className="nav__contact-menu" role="menu" aria-label="Contact options">
              <div className="nav__contact-header">Reach Eric directly</div>
              <a href="mailto:eric@truenorthroof.com" role="menuitem" className="nav__contact-item">
                <span className="nav__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <div className="nav__contact-text">
                  <span className="nav__contact-label">Email</span>
                  <strong>eric@truenorthroof.com</strong>
                </div>
              </a>
              <a href="tel:+14352923638" role="menuitem" className="nav__contact-item">
                <span className="nav__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <div className="nav__contact-text">
                  <span className="nav__contact-label">Phone</span>
                  <strong>(435) 292-3638</strong>
                </div>
              </a>
              <Link to="/contact" className="nav__contact-footer" role="menuitem">
                Visit the contact page
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="nav__cta">
          <Link className="btn btn--primary" to="/contact">Get a Free Quote</Link>
        </div>
      </div>
    </header>
  )
}
