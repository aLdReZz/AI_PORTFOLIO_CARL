import { useEffect } from 'react'
import { site } from '../data/site.js'

export default function HireModal({ open, onClose }) {
  const { links } = site

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="hire-overlay" onClick={onClose}>
      <div className="hire-modal" onClick={(e) => e.stopPropagation()}>
        <button className="hire-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <h3 className="hire-heading">Let's work together</h3>
        <p className="hire-intro">Pick the platform that works for you.</p>

        <div className="hire-options">
          <a href={links.upwork} target="_blank" rel="noreferrer" className="hire-option" onClick={onClose}>
            <span className="hire-option-icon">
              <img className="hire-option-logo" src="/assets/img/icon-upwork.png" alt="Upwork" />
            </span>
            <div className="hire-option-text">
              <span className="hire-option-title">Upwork</span>
              <span className="hire-option-desc">Hire me through Upwork with escrow protection</span>
            </div>
            <span className="hire-option-arrow">↗</span>
          </a>

          <a href={links.olj} target="_blank" rel="noreferrer" className="hire-option" onClick={onClose}>
            <span className="hire-option-icon">
              <img className="hire-option-logo" src="/assets/img/icon-olj.png" alt="OnlineJobs.ph" />
            </span>
            <div className="hire-option-text">
              <span className="hire-option-title">OnlineJobs.ph</span>
              <span className="hire-option-desc">Preferred by Philippine-based freelancers</span>
            </div>
            <span className="hire-option-arrow">↗</span>
          </a>

          <a href={`mailto:${links.email}`} className="hire-option" onClick={onClose}>
            <span className="hire-option-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </span>
            <div className="hire-option-text">
              <span className="hire-option-title">Email me</span>
              <span className="hire-option-desc">Work direct — no platform fees</span>
            </div>
            <span className="hire-option-arrow">↗</span>
          </a>
        </div>
      </div>
    </div>
  )
}
