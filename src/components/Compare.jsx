import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import HireModal from './HireModal.jsx'
import './Compare.css'

const rows = [
  { label: 'UGC creator fees', traditional: { main: '$500 — $2,000+', note: '1-2 output' }, ai: { main: '10 — 15 content', note: 'for price of 2 UGC hires' } },
  { label: 'Studio rental', traditional: { main: '$300 — $800 / day', note: 'self setup + studio not always available' }, ai: { main: 'Studio-quality photo', note: 'without the hassle + no advance booking' } },
  { label: 'Turnaround time', traditional: '2 — 4 weeks', ai: 'Days' },
  { label: 'Revision cycles', traditional: 'Multiple rounds', ai: 'Minimal' },
  { label: 'Scalability', traditional: 'Per-hire bottleneck', ai: 'Scale on demand' },
]

export default function Compare() {
  const ref = useRef(null)
  useReveal(ref)
  const [hireOpen, setHireOpen] = useState(false)

  return (
    <section className="compare section" id="compare" ref={ref}>
      <div className="container">
        <div className="compare__head reveal">
          <span className="compare__label">Why AI</span>
          <h2 className="compare__title">Traditional vs. AI content creation.</h2>
          <p className="compare__intro">
            No UGC creators to manage, no studios to book, no waiting weeks.
            Just faster, cheaper, scalable content.
          </p>
        </div>

        <div className="compare__table reveal">
          <div className="compare__row compare__row--header">
            <span className="compare__cell compare__cell--label" />
            <span className="compare__cell compare__cell--head compare__cell--traditional">Traditional</span>
            <span className="compare__cell compare__cell--head compare__cell--ai">Work with me</span>
          </div>

          {rows.map((r) => (
            <div key={r.label} className="compare__row">
              <span className="compare__cell compare__cell--label">{r.label}</span>

              <span className="compare__cell compare__cell--traditional">
                {typeof r.traditional === 'string' ? r.traditional : (
                  <span className="compare__cell-wrap">
                    <span className="compare__val">{r.traditional.main}</span>
                    <span className="compare__note">{r.traditional.note}</span>
                  </span>
                )}
              </span>

              <span className="compare__cell compare__cell--ai">
                <svg className="compare__check" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                </svg>
                {typeof r.ai === 'string' ? (
                  <span className="compare__ai-text">{r.ai.split('\n').map((line, i) => <span key={i}>{line}{i < r.ai.split('\n').length - 1 ? <br /> : null}</span>)}</span>
                ) : (
                  <span className="compare__cell-wrap">
                    <span className="compare__val">{r.ai.main}</span>
                    <span className="compare__note">{r.ai.note}</span>
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="compare__cta reveal">
          <p className="compare__cta-text">Ready to scale your content without the overhead?</p>
          <button className="compare__cta-btn" onClick={() => setHireOpen(true)}>Start scaling</button>
        </div>
      </div>

      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
    </section>
  )
}
