import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MenuSection from './components/MenuSection.jsx'
import Story from './components/Story.jsx'
import Facilities from './components/Facilities.jsx'
import Marquee from './components/ui/Marquee.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'

export default function App() {
  useSmoothScroll()

  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <Story />
        <Marquee />
        <Facilities />
      </main>
      <ContactFooter />
    </div>
  )
}
