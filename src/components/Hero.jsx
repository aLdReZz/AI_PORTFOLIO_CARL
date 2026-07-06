import { site } from '../data/site.js'
import './Hero.css'

export default function Hero() {
  const { hero } = site

  return (
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner container">
        <p className="eyebrow hero__kicker hero__fade" style={{ '--d': '0.05s' }}>
          {hero.kicker}
        </p>

        <h1 className="hero__title">
          <span className="hero__fade" style={{ '--d': '0.15s' }}>
            {hero.headlineLead}
          </span>{' '}
          <span className="hero__accent hero__fade" style={{ '--d': '0.28s' }}>
            {hero.headlineAccent}
          </span>
        </h1>

        <p className="hero__subhead hero__fade" style={{ '--d': '0.42s' }}>
          {hero.subhead}
        </p>

        <div className="hero__actions hero__fade" style={{ '--d': '0.55s' }}>
          <a
            href={hero.primaryCta.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            {hero.primaryCta.label}
            <span className="hero__arrow" aria-hidden="true">↗</span>
          </a>
          <a href={hero.secondaryCta.href} className="btn btn--ghost">
            {hero.secondaryCta.label}
          </a>
        </div>

        <div className="hero__meta hero__fade" style={{ '--d': '0.7s' }}>
          <span className="hero__dot" aria-hidden="true" />
          Available for select eCommerce brands
        </div>
      </div>

      <a href="#services" className="hero__scroll" aria-label="Scroll to services">
        <span className="hero__scroll-line" aria-hidden="true" />
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  )
}
