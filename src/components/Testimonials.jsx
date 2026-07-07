import { useRef } from 'react'
import { testimonials } from '../data/testimonials.js'
import { useReveal } from '../hooks/useReveal.js'
import './Testimonials.css'

export default function Testimonials() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="testimonials section" id="testimonials" ref={ref}>
      <div className="container">
        <div className="testimonials__head reveal">
          <span className="testimonials__label">{testimonials.label}</span>
          <h2 className="testimonials__heading">{testimonials.heading}</h2>
        </div>

        <ul className="testimonials__grid">
          {testimonials.items.map((t, i) => (
            <li
              key={t.name}
              className="testimonials__card reveal"
              style={{ '--i': i }}
            >
              <p className="testimonials__quote">“{t.quote}”</p>
              <div className="testimonials__person">
                <img
                  className="testimonials__avatar"
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                />
                <span className="testimonials__name">{t.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
