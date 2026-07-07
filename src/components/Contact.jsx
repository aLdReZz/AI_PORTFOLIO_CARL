import { useRef } from 'react'
import { site } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  useReveal(ref)
  const { contact, links } = site

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className="contact__inner">
          <span className="contact__label reveal">{contact.label}</span>
          <h2 className="contact__heading reveal">{contact.heading}</h2>
          <p className="contact__intro reveal">{contact.intro}</p>

          <div className="contact__actions reveal">
            <a
              href={links.upwork}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              Work with me on Upwork
              <span aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${links.email}`} className="btn btn--ghost">
              Email
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              WhatsApp
            </a>
          </div>

          <div className="contact__meta reveal">
            <a href={`mailto:${links.email}`} className="contact__detail">
              {links.email}
            </a>
            <span className="contact__dot" aria-hidden="true">·</span>
            <span className="contact__detail">{links.phone}</span>
            <span className="contact__dot" aria-hidden="true">·</span>
            <a
              href={links.cv}
              download
              className="contact__detail contact__detail--link"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
