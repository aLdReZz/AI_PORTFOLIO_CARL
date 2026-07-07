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
              <div
                key={cs.id}
                className={`cases__card reveal ${open ? 'cases__card--open' : ''}`}
                style={{ '--i': i }}
              >
                <div className="cases__thumb" onClick={() => setExpanded(open ? null : i)}>
                  <img className="cases__poster" src={cs.poster} alt={cs.brand} loading="lazy" />
                  <div className="cases__stat-chip">
                    <span className="cases__chip-val">{cs.stat}</span>
                    <span className="cases__chip-label">{cs.statLabel}</span>
                  </div>
                  {!open && (
                    <div className="cases__thumb-hover">
                      <span>Click to view</span>
                    </div>
                  )}
                </div>

                <div className="cases__body" onClick={(e) => e.stopPropagation()}>
                  <button className="cases__close" onClick={() => setExpanded(null)} aria-label="Close">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                  <div className="cases__block">
                    <span className="cases__block-label">Problem</span>
                    <p className="cases__block-text">{cs.problem}</p>
                  </div>
                  <div className="cases__block">
                    <span className="cases__block-label cases__block-label--soln">Solution</span>
                    <p className="cases__block-text">{cs.solution}</p>
                  </div>
                  <div className="cases__block">
                    <span className="cases__block-label cases__block-label--result">Result</span>
                    <p className="cases__block-text cases__block-text--result">{cs.result}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
