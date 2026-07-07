import { useState, useRef } from 'react'
import { caseStudies } from '../data/caseStudies.js'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudies.css'

export default function CaseStudies() {
  const ref = useRef(null)
  useReveal(ref)
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="cases section" id="cases" ref={ref}>
      <div className="container">
        <div className="cases__head reveal">
          <span className="cases__label">{caseStudies.label}</span>
          <h2 className="cases__title">{caseStudies.title}</h2>
          <p className="cases__intro">{caseStudies.intro}</p>
        </div>

        <div className="cases__grid">
          {caseStudies.items.map((cs, i) => {
            const open = expanded === i
            return (
              <div key={cs.id} className="cases__card reveal" style={{ '--i': i }}>
                <div className="cases__thumb" onClick={() => setExpanded(i)}>
                  <img className="cases__poster" src={cs.poster} alt={cs.brand} loading="lazy" />
                  <div className="cases__stat-chip">
                    <span className="cases__chip-val">{cs.stat}</span>
                    <span className="cases__chip-label">{cs.statLabel}</span>
                  </div>
                </div>

                {open && (
                  <div className="cases__overlay">
                    <button className="cases__overlay-close" onClick={() => setExpanded(null)} aria-label="Close">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </button>
                    <div className="cases__overlay-content">
                      <div className="cases__overlay-block">
                        <span className="cases__overlay-label">Problem</span>
                        <p className="cases__overlay-text">{cs.problem}</p>
                      </div>
                      <div className="cases__overlay-block">
                        <span className="cases__overlay-label cases__overlay-label--soln">Solution</span>
                        <p className="cases__overlay-text">{cs.solution}</p>
                      </div>
                      <div className="cases__overlay-block">
                        <span className="cases__overlay-label cases__overlay-label--result">Result</span>
                        <p className="cases__overlay-text cases__overlay-text--result">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
