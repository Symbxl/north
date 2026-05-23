import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src="/media/logo.png" alt="True North Roofing" />
        </div>
        <div className="footer__cols">
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Residential Roofing</a></li>
              <li><a href="#commercial">Commercial Roofing</a></li>
              <li><a href="#siding">Siding</a></li>
              <li><a href="#siding">Rain Gutters & Leaf Guards</a></li>
              <li><a href="#services">Windows</a></li>
              <li><a href="#services">Storm Damage</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#areas">Service Area</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+14352923638">(435) 292-3638</a></li>
              <li><a href="mailto:eric@truenorthroof.com">eric@truenorthroof.com</a></li>
              <li>1911 Southmoor Dr</li>
              <li>Holladay, UT 84117</li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>© {new Date().getFullYear()} True North Roofing. All rights reserved.</span>
          <span><Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link></span>
        </div>
      </div>
    </footer>
  )
}
