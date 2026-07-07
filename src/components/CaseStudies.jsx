import { useState, useRef } from 'react'
import { caseStudies } from '../data/caseStudies.js'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudies.css'

export default function CaseStudies() {
  const ref = useRef(null)
  useReveal(ref)
  const [expanded, setExpanded] = useState(null)

  const openCase = (i) => setExpanded(i)
  const closeCase = () => setExpanded(null)

  return (
    <section className="cases section" id="cases" ref={ref}>
      <div className="container">
        <div className="cases__head reveal">
          <span className="cases__label">{caseStudies.label}</span>
          <h2 className="cases__title">{caseStudies.title}</h2>
          <p className="cases__intro">{caseStudies.intro}</p>
        </div>

        <div className="cases__grid">
          {caseStudies.items.map((cs, i) => (
            <div
              key={cs.id}
              className={`cases__card reveal`}
              style={{ '--i': i }}
            >
              <div className="cases__thumb" onClick={() => openCase(i)}>
                <img className="cases__poster" src={cs.poster} alt={cs.brand} loading="lazy" />
                <div className="cases__stat-chip">
                  <span className="cases__chip-val">{cs.stat}</span>
                  <span className="cases__chip-label">{cs.statLabel}</span>
                </div>
                <div className="cases__thumb-hover">
                  <span>Click to view</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen modal for case study detail */}
      {expanded !== null && (
        <div className="cases__modal" onClick={closeCase}>
          <div className="cases__modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="cases__close" onClick={closeCase} aria-label="Close">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            {(() => {
              const cs = caseStudies.items[expanded]
              return (
                <>
                  <div className="cases__modal-block">
                    <span className="cases__modal-label">Problem</span>
                    <p className="cases__modal-text">{cs.problem}</p>
                  </div>
                  <div className="cases__modal-block">
                    <span className="cases__modal-label cases__modal-label--soln">Solution</span>
                    <p className="cases__modal-text">{cs.solution}</p>
                  </div>
                  <div className="cases__modal-block">
                    <span className="cases__modal-label cases__modal-label--result">Result</span>
                    <p className="cases__modal-text cases__modal-text--result">{cs.result}</p>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}
