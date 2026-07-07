import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { work } from '../data/work.js'
import { useReveal } from '../hooks/useReveal.js'
import HireModal from './HireModal.jsx'
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
  const [hireOpen, setHireOpen] = useState(false)

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
    // Start preloading the video immediately
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'video'
    link.href = item.src
    document.head.appendChild(link)
    setTimeout(() => link.remove(), 5000)
  }, [])

  const close = useCallback(() => {
    setPhase('exiting')
    setTimeout(() => {
      setActive(null)
      setOriginRect(null)
      setPhase('closed')
    }, 550)
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
          <div className="work__overlay-scroll">
            <MorphingModal
              active={active}
              phase={phase}
              setPhase={setPhase}
              originRect={originRect}
              catLabel={catLabel}
              close={close}
              onHire={() => { close(); setTimeout(() => setHireOpen(true), 400) }}
            />
          </div>
        </div>
      )}

      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
    </section>
  )
}

/* ---- Custom minimalist video player ---- */
function CustomVideo({ src, poster }) {
  const videoRef = useRef(null)
  const barRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = false
    el.play?.().catch(() => {
      // Browser blocked autoplay with sound — fall back to muted
      el.muted = true
      setMuted(true)
      el.play?.().catch(() => {})
    })
  }, [src])

  const toggle = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) { el.play(); setPlaying(true) }
    else { el.pause(); setPlaying(false) }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const el = videoRef.current
    if (!el) return
    el.muted = !el.muted
    setMuted(el.muted)
  }

  const handleTime = () => {
    const el = videoRef.current
    if (!el || !el.duration || dragging) return
    setProgress(el.currentTime / el.duration)
  }

  const calcProgress = (e) => {
    const rect = barRef.current.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
  }

  const seek = (e) => {
    const x = calcProgress(e)
    const el = videoRef.current
    if (el && el.duration) el.currentTime = x * el.duration
    setProgress(x)
  }

  const onDragStart = (e) => {
    e.stopPropagation()
    setDragging(true)
    seek(e)
    const onMove = (ev) => { ev.preventDefault(); seek(ev) }
    const onUp = (ev) => {
      seek(ev)
      setDragging(false)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
  }

  return (
    <div className="cvideo" onClick={(e) => e.stopPropagation()}>
      <video
        ref={videoRef}
        className="cvideo__el"
        src={src}
        poster={poster}
        autoPlay
        loop
        playsInline
        muted
        preload="metadata"
        onTimeUpdate={handleTime}
        onEnded={() => setPlaying(false)}
      />
      <div className="cvideo__overlay" onClick={toggle}>
        {!playing && (
          <span className="cvideo__play-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        )}
      </div>
      <div className="cvideo__controls">
        <button className="cvideo__mute" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
          {muted ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
        <div className="cvideo__bar" ref={barRef} onMouseDown={onDragStart} onTouchStart={onDragStart}>
          <div className="cvideo__track">
            <div className="cvideo__fill" style={{ width: `${progress * 100}%` }} />
            <div className="cvideo__thumb" style={{ left: `${progress * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MorphingModal({ active, phase, originRect, catLabel, close, setPhase, onHire }) {
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
      el.style.transition = 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease'
      el.style.transform = ''
      el.style.opacity = '1'
    })

    const timer = setTimeout(() => setPhase('open'), 800)
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

    el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease'
    el.style.transformOrigin = '0 0'
    el.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`
    el.style.opacity = '0'
  }, [phase, originRect])

  return (
    <>
      <div className="work__modal" ref={innerRef} onClick={(e) => e.stopPropagation()}>
        <button className="work__modal-close" onClick={close} aria-label="Close">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>

        <div className="work__modal-body">
          <div className="work__modal-inner">
            <div className="work__modal-video-wrap">
              <CustomVideo src={active.src} poster={active.poster} />
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
