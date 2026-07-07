import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Compare from './components/Compare.jsx'
import Work from './components/Work.jsx'
import Tools from './components/Tools.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Compare />
        <Work />
        <Tools />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
