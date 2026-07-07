import { useRef } from 'react'
import { tools } from '../data/tools.js'
import { useReveal } from '../hooks/useReveal.js'
import './Tools.css'

const LOGO_MAP = {
  'Veo 3.1': '/assets/img/logo-google.png',
  'Kling': '/assets/img/logo-kling.png',
  'Higgsfield': '/assets/img/logo-higgsfield.png',
  'Nano Banana': '/assets/img/logo-google.png',
  'CapCut': '/assets/img/logo-capcut.png',
}

export default function Tools() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="tools section" id="tools" ref={ref}>
      <div className="container">
        <div className="tools__head reveal">
          <span className="tools__label">{tools.label}</span>
          <h2 className="tools__title">{tools.title}</h2>
        </div>

        <ul className="tools__grid">
          {tools.items.map((item, i) => (
            <li key={item.name} className="tools__item reveal" style={{ '--i': i }}>
              <div className="tools__icon">
                <img
                  className="tools__logo"
                  src={LOGO_MAP[item.name]}
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <div className="tools__info">
                <span className="tools__name">{item.name}</span>
                <span className="tools__role">{item.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
