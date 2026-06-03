import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Reservation from './components/Reservation.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'

// Composant racine : assemble toutes les sections du site Café Bilal
function App() {
  return (
    <div className="min-h-screen bg-offwhite text-wood font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App
