import { useMemo, useRef, useState } from 'react'
import { work } from '../data/work.js'
import { useReveal } from '../hooks/useReveal.js'
import './Work.css'

export default function Work() {
  const ref = useRef(null)
  useReveal(ref)

  const [filter, setFilter] = useState('all')
  const [playing, setPlaying] = useState(null)

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

  const selectFilter = (key) => {
    setFilter(key)
    setPlaying(null)
  }

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

        <ul className="work__grid">
          {items.map((item) => {
            const isPlaying = playing === item.id
            return (
              <li key={item.id} className="work__card">
                <div
                  className="work__frame"
                  onClick={() => setPlaying(isPlaying ? null : item.id)}
                >
                  {isPlaying ? (
                    <video
                      className="work__video"
                      src={item.src}
                      poster={item.poster}
                      autoPlay
                      loop
                      playsInline
                    />
                  ) : (
                    <>
                      <img
                        className="work__poster"
                        src={item.poster}
                        alt={item.title}
                        loading="lazy"
                      />
                      <span className="work__play" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </>
                  )}
                </div>
                <div className="work__meta">
                  <span className="work__name">{item.title}</span>
                  <span className="work__tag">{catLabel[item.category] || item.category}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
