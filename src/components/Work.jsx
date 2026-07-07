import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { work } from '../data/work.js'
import { useReveal } from '../hooks/useReveal.js'
import './Work.css'

function useMediaQuery(q) {
  const [match, setMatch] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(q)
    setMatch(mq.matches)
    const handler = (e) => setMatch(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [q])
  return match
}

export default function Work() {
  const ref = useRef(null)
  useReveal(ref)
  const isDesktop = useMediaQuery('(min-width: 960px)')

  const [filter, setFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [active, setActive] = useState(null)
  const [originRect, setOriginRect] = useState(null)
  const [phase, setPhase] = useState('closed')

  const catLabel = useMemo(
    () => Object.fromEntries(work.filters.map((f) => [f.key, f.label])),
    []
  )

  const items = useMemo(
    () =>
      work.items.filter(
        (i) => i.enabled && (filter === 'all' || i.category === filter)
      ),
    [filter]
  )

  const initialLimit = isDesktop ? 8 : 9
  const visible = showAll ? items : items.slice(0, initialLimit)
  const hasMore = items.length > initialLimit

  const selectFilter = (key) => {
    setFilter(key)
    setShowAll(false)
    if (phase !== 'closed') {
      setActive(null)
      setOriginRect(null)
      setPhase('closed')
    }
  }

  const handleShowMore = () => {
    setAnimating(true)
    setShowAll(true)
    setTimeout(() => setAnimating(false), 450)
  }

  const handleShowLess = () => {
    setAnimating(true)
    // Scroll to the work section first
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Then collapse items after scroll is underway
    setTimeout(() => {
      setShowAll(false)
      setTimeout(() => setAnimating(false), 300)
    }, 400)
  }

  const open = useCallback((item, e) => {
    const card = e.currentTarget.closest('.work__card') || e.currentTarget
    const rect = card.getBoundingClientRect()
    setOriginRect(rect)
    setActive(item)
    setPhase('entering')
  }, [])

  const close = useCallback(() => {
    setPhase('exiting')
    setTimeout(() => {
      setActive(null)
      setOriginRect(null)
      setPhase('closed')
    }, 380)
  }, [])

  const closeRef = useRef(close)
  closeRef.current = close

  useEffect(() => {
    if (phase !== 'open') return
    const handler = (e) => { if (e.key === 'Escape') closeRef.current() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [phase])

  useEffect(() => {
    if (phase === 'entering' || phase === 'open') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [phase])

  const isVisible = phase !== 'closed'

  return (
    <section className="work section" id="work" ref={ref}>
      <div className="container">
        <div className="work__head">
          <div className="work__head-left reveal">
            <span className="work__label">{work.label}</span>
            <h2 className="work__title">{work.title}</h2>
          </div>
          <p className="work__intro reveal">{work.intro}</p>
        </div>

        <div className="work__filters reveal" role="tablist" aria-label="Filter work">
          {work.filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={`work__filter ${filter === f.key ? 'is-active' : ''}`}
              onClick={() => selectFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="work__grid" style={{ '--total': items.length, '--limit': initialLimit }}>
          {visible.map((item, i) => (
            <li
              key={item.id}
              className={`work__card ${!showAll && i >= initialLimit ? 'work__card--hidden' : ''} ${
                animating && !showAll && i >= initialLimit ? 'work__card--exiting' :
                animating && showAll && i >= initialLimit ? 'work__card--entering' : ''
              }`}
            >
              <div className="work__frame" onClick={(e) => open(item, e)}>
                <img
                  className="work__poster"
                  src={item.poster}
                  alt={item.title}
                  loading="lazy"
                />
                <span className="work__badge">{catLabel[item.category] || item.category}</span>
                <span className="work__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>

        {hasMore && !showAll && (
          <div className="work__more-wrap">
            <button className="work__more" onClick={handleShowMore}>
              <span>See more work</span>
              <svg className="work__more-arrow" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
        )}

        {hasMore && showAll && (
          <div className="work__more-wrap">
            <button className="work__more work__more--less" onClick={handleShowLess}>
              <svg className="work__more-arrow work__more-arrow--back" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M8 13V3M3 8l5-5 5 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <span>Show less</span>
            </button>
          </div>
        )}
      </div>

      {isVisible && (
        <div
          className={`work__overlay ${phase === 'exiting' ? 'work__overlay--exit' : ''}`}
          onClick={close}
        >
          <MorphingModal
            active={active}
            phase={phase}
            setPhase={setPhase}
            originRect={originRect}
            catLabel={catLabel}
            close={close}
          />
        </div>
      )}
    </section>
  )
}

function MorphingModal({ active, phase, originRect, catLabel, close, setPhase }) {
  const innerRef = useRef(null)

  useEffect(() => {
    if (phase !== 'entering') return
    const el = innerRef.current
    if (!el || !originRect) return

    el.style.transition = 'none'
    el.style.opacity = '0'

    const raf = requestAnimationFrame(() => {
      const modalRect = el.getBoundingClientRect()

      const scaleX = originRect.width / modalRect.width
      const scaleY = originRect.height / modalRect.height
      const translateX = originRect.left - modalRect.left
      const translateY = originRect.top - modalRect.top

      el.style.transformOrigin = '0 0'
      el.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`

      el.getBoundingClientRect()
      el.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease'
      el.style.transform = ''
      el.style.opacity = '1'
    })

    const timer = setTimeout(() => setPhase('open'), 500)
    return () => { cancelAnimationFrame(raf); clearTimeout(timer) }
  }, [phase, originRect, setPhase])

  useEffect(() => {
    if (phase !== 'exiting') return
    const el = innerRef.current
    if (!el || !originRect) return

    const modalRect = el.getBoundingClientRect()
    const scaleX = originRect.width / modalRect.width
    const scaleY = originRect.height / modalRect.height
    const translateX = originRect.left - modalRect.left
    const translateY = originRect.top - modalRect.top

    el.style.transition = 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease'
    el.style.transformOrigin = '0 0'
    el.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`
    el.style.opacity = '0'
  }, [phase, originRect])

  return (
    <>
      <div className="work__modal" ref={innerRef}>
        <button className="work__modal-close" onClick={close} aria-label="Close">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>

        <div className="work__modal-body">
          <div className="work__modal-inner">
            <div className="work__modal-video-wrap">
              <video
                className="work__modal-video"
                src={active.src}
                poster={active.poster}
                autoPlay
                loop
                playsInline
                controls
            />
          </div>

          <div className="work__modal-footer">
            {active.stats && (
              <div className="work__modal-stats">
                {Object.entries(active.stats).map(([key, val]) => (
                  <div key={key} className="work__stat">
                    <span className="work__stat-value">{val}</span>
                    <span className="work__stat-label">{key === 'ctr' ? 'CTR' : key === 'convRate' ? 'Conv. Rate' : key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
