import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SelectedWork from './components/SelectedWork'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import UHNCaseStudy from './pages/UHNCaseStudy'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

// Scroll to top on every route change (instant, no smooth scroll)
function ScrollToTop() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto'
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
    // Restore after the frame so subsequent in-page scrolls can still be smooth
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = ''
    })
  }, [hash, pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/uhn" element={<UHNCaseStudy />} />
      </Routes>
    </>
  )
}
