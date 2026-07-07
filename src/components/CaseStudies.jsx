import { useRef } from 'react'
import { caseStudies } from '../data/caseStudies.js'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudies.css'

export default function CaseStudies() {
  const ref = useRef(null)
  useReveal(ref)

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
            <div key={cs.id} className="cases__card reveal" style={{ '--i': i }}>
              <div className="cases__media">
                <img className="cases__poster" src={cs.poster} alt={cs.brand} loading="lazy" />
                <div className="cases__stat-chip">
                  <span className="cases__chip-val">{cs.stat}</span>
                  <span className="cases__chip-label">{cs.statLabel}</span>
                </div>
              </div>
              <div className="cases__body">
                <span className="cases__brand">{cs.brand}</span>
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
          ))}
        </div>
      </div>
    </section>
  )
}
