import { useRef } from 'react'
import { services } from '../data/services.js'
import { useReveal } from '../hooks/useReveal.js'
import './Services.css'

export default function Services() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="container">
        <div className="services__head">
          <div className="services__head-left reveal">
            <span className="services__label">{services.label}</span>
            <h2 className="services__title">{services.title}</h2>
          </div>
          <p className="services__intro reveal">{services.intro}</p>
        </div>

        <ul className="services__list">
          {services.items.map((item, i) => (
            <li
              key={item.n}
              className="services__row reveal"
              style={{ '--i': i }}
            >
              <span className="services__n">{item.n}</span>
              <div className="services__body">
                <h3 className="services__name">{item.title}</h3>
                <p className="services__desc">{item.desc}</p>
              </div>
              <span className="services__arrow" aria-hidden="true">↗</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
