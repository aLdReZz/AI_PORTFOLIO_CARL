import { useEffect, useRef } from 'react'
import { site } from '../data/site.js'
import './Hero.css'

export default function Hero() {
  const { hero } = site
  const videoRef = useRef(null)

  // Force muted so autoplay is allowed across browsers.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play?.().catch(() => {})
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero__pitch">
        <div className="hero__pitch-inner">
          <h1 className="hero__title hero__fade" style={{ '--d': '0.1s' }}>
            {hero.headline}
          </h1>

          <p className="hero__subhead hero__fade" style={{ '--d': '0.24s' }}>
            {hero.subhead}
          </p>

          <div className="hero__actions hero__fade" style={{ '--d': '0.38s' }}>
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
        </div>
      </div>

      <div className="hero__stage">
        <video
          ref={videoRef}
          className="hero__video"
          src={hero.reel.src}
          poster={hero.reel.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="hero__stage-fade" aria-hidden="true" />
        <div className="hero__stage-bar">
          <span className="hero__caption">{hero.reel.caption}</span>
          <span className="hero__reelno">
            <span className="hero__rec" aria-hidden="true" />
            {hero.reel.label}
          </span>
        </div>
      </div>
    </section>
  )
}
