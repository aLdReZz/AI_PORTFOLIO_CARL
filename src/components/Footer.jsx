import { site } from '../data/site.js'
import './Footer.css'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const { links, name } = site
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a href="#home" className="footer__logo">{name}</a>

          <nav className="footer__nav">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="footer__link">{l.label}</a>
            ))}
          </nav>

          <div className="footer__social">
            <a href={links.upwork} target="_blank" rel="noreferrer" className="footer__link">Upwork</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {name}. All rights reserved.</span>
          <span className="footer__made">AI video ads for eCommerce</span>
        </div>
      </div>
    </footer>
  )
}
