import { useRef } from 'react'
import { tools } from '../data/tools.js'
import { useReveal } from '../hooks/useReveal.js'
import './Tools.css'

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
              <span className="tools__name">{item.name}</span>
              <span className="tools__role">{item.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
