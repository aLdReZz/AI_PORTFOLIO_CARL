import { useState, useEffect, useRef, useCallback } from 'react'
import { site } from '../data/site.js'
import HireModal from './HireModal.jsx'
import './Hero.css'

// Hero background reel cycles through AI-generated videos.
const reelClips = [
  { src: '/assets/work/clips/ai-video-01.mp4', poster: '/assets/work/posters/ai-video-01.jpg', caption: 'AI product showcase', label: 'Reel 01' },
  { src: '/assets/work/clips/ai-video-02.mp4', poster: '/assets/work/posters/ai-video-02.jpg', caption: 'AI Bootcamp wins', label: 'Reel 02' },
  { src: '/assets/work/clips/ai-video-03.mp4', poster: '/assets/work/posters/ai-video-03.jpg', caption: 'AI Bootcamp wins', label: 'Reel 03' },
  { src: '/assets/work/clips/ai-video-05.mp4', poster: '/assets/work/posters/ai-video-05.jpg', caption: 'AI Bootcamp competitions', label: 'Reel 04' },
  { src: '/assets/work/clips/ai-video-06.mp4', poster: '/assets/work/posters/ai-video-06.jpg', caption: 'AI Bootcamp feedback session', label: 'Reel 06' },
  { src: '/assets/work/clips/ai-video-07.mp4', poster: '/assets/work/posters/ai-video-07.jpg', caption: 'AI Bootcamp feedback', label: 'Reel 07' },
  { src: '/assets/work/clips/ai-video-08.mp4', poster: '/assets/work/posters/ai-video-08.jpg', caption: 'AI Bootcamp feedback', label: 'Reel 08' },
  { src: '/assets/work/clips/ai-video-09.mp4', poster: '/assets/work/posters/ai-video-09.jpg', caption: 'AI Bootcamp feedback', label: 'Reel 09' },
  { src: '/assets/work/clips/ai-video-10.mp4', poster: '/assets/work/posters/ai-video-10.jpg', caption: 'AI UGC testing', label: 'Reel 10' },
  { src: '/assets/work/clips/ai-video-11.mp4', poster: '/assets/work/posters/ai-video-11.jpg', caption: 'AI UGC testing', label: 'Reel 11' },
]

function pickIndex(avoid) {
  let next
  do { next = Math.floor(Math.random() * reelClips.length) } while (next === avoid && reelClips.length > 1)
  return next
}

const TYPING_PHRASES = [
  'No shoot day to coordinate',
  'No UGC creators to manage',
  'No waiting weeks for delivery',
  'No $1,000+ per UGC hire',
  'No studio rental costs',
  'No back-and-forth revisions',
  'No missed deadlines',
  'Scale on demand',
]

export default function Hero() {
  const { hero } = site
  const videoRef = useRef(null)
  const [clipIndex, setClipIndex] = useState(() => pickIndex(-1))
  const [switching, setSwitching] = useState(false)
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [hireOpen, setHireOpen] = useState(false)

  // Typewriter logic
  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIdx]
    let timeout

    if (!deleting && charIdx < phrase.length) {
      // typing
      timeout = setTimeout(() => setCharIdx(c => c + 1), 50)
    } else if (!deleting && charIdx === phrase.length) {
      // pause at full word
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      // erasing
      timeout = setTimeout(() => setCharIdx(c => c - 1), 40)
    } else if (deleting && charIdx === 0) {
      // move to next phrase
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % TYPING_PHRASES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  const clip = reelClips[clipIndex]

  const handleEnded = useCallback(() => {
    setSwitching(true)
    setTimeout(() => {
      setClipIndex(prev => pickIndex(prev))
      setSwitching(false)
    }, 400)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play?.().catch(() => {})
    }
  }, [clipIndex])

  return (
    <section className="hero" id="home">
      <div className="hero__pitch">
        <div className="hero__pitch-inner">
          <h1 className="hero__title hero__fade" style={{ '--d': '0.1s' }}>
            Scale your content without the overhead. <span className="hero__title-acc">Just AI that actually sells.</span>
          </h1>

          <p className="hero__typewrap hero__fade" style={{ '--d': '0.2s' }}>
            <span className="hero__type-phrase">{TYPING_PHRASES[phraseIdx].slice(0, charIdx)}</span>
            <span className="hero__type-cursor" aria-hidden="true">|</span>
          </p>

          <p className="hero__subhead hero__fade" style={{ '--d': '0.24s' }}>
            {hero.subhead}
          </p>

          <div className="hero__actions hero__fade" style={{ '--d': '0.38s' }}>
            <button className="btn btn--primary" onClick={() => setHireOpen(true)}>
              {hero.primaryCta.label}
            </button>
            <a href={hero.secondaryCta.href} className="btn btn--ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <div className="hero__stage">
        <video
          key={clipIndex}
          ref={videoRef}
          className={`hero__video${switching ? ' hero__video--exit' : ''}`}
          src={clip.src}
          poster={clip.poster}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={handleEnded}
        />
        <div className="hero__stage-fade" aria-hidden="true" />
        <div className="hero__stage-bar">
          <span className="hero__reelno">
            <span className="hero__rec" aria-hidden="true" />
            {clip.label}
          </span>
        </div>
      </div>

      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
    </section>
  )
}
