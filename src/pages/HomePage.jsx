import Hero from '../components/Hero'
import FinancingCalculator from '../components/FinancingCalculator'
import Services from '../components/Services'
import About from '../components/About'
import Commercial from '../components/Commercial'
import SidingGutters from '../components/SidingGutters'
import Process from '../components/Process'
import Gallery from '../components/Gallery'
import Areas from '../components/Areas'
import Faq from '../components/Faq'
import CtaBanner from '../components/CtaBanner'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <div className="masthead">
        <Hero />
      </div>
      <main id="main">
        <FinancingCalculator />
        <Services />
        <About />
        <Commercial />
        <SidingGutters />
        <Process />
        <Gallery />
        <Areas />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
    </>
  )
}
