import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Solutions from './components/Solutions.jsx'
import Services from './components/Services.jsx'
import Partners from './components/Partners.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Services />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
