import { useRef } from 'react'
import { site } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'
import './About.css'

export default function About() {
  const ref = useRef(null)
  useReveal(ref)
  const { about } = site

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <div className="about__media reveal">
            <img src={about.photo} alt="Carl Sanchez" loading="lazy" />
          </div>

          <div className="about__content">
            <span className="about__label reveal">{about.label}</span>
            <h2 className="about__heading reveal">{about.heading}</h2>
            {about.body.map((p, i) => (
              <p key={i} className="about__p reveal">{p}</p>
            ))}

            <ul className="about__facts reveal">
              {about.facts.map((f) => (
                <li key={f.k} className="about__fact">
                  <span className="about__fact-k">{f.k}</span>
                  <span className="about__fact-v">{f.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
