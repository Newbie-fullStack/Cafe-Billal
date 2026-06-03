import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Numéro WhatsApp placeholder pour le bouton "Réserver"
const PHONE_NUMBER = '+212600000000'
const WHATSAPP_NUMBER = '212600000000'

// Liens de navigation principaux
const NAV_LINKS = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Menu', href: '#menu' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'À Propos', href: '#about' },
  { label: 'Contact', href: '#location' }
]

// Logo SVG : feuille stylisée évoquant la nature d'Azrou
function LeafLogo({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A9E5F" />
          <stop offset="100%" stopColor="#2D5016" />
        </linearGradient>
      </defs>
      <path
        d="M16 2C9 4 4 10 4 18c0 5 3 9 7 11 0-7 2-13 8-18 0 8-3 14-7 18 2 0 4 0 6-1 6-3 10-9 10-16 0-3-1-6-3-8-3 1-6 1-9-2z"
        fill="url(#leafGrad)"
      />
      <path
        d="M11 22c2-5 5-10 10-13"
        stroke="#FDFAF5"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Icône hamburger animée
function MenuIcon({ isOpen }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center relative">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
        transition={{ duration: 0.3 }}
        className="absolute w-6 h-0.5 bg-current rounded-full"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute w-6 h-0.5 bg-current rounded-full"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
        transition={{ duration: 0.3 }}
        className="absolute w-6 h-0.5 bg-current rounded-full"
      />
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Détecter le scroll pour activer le style sticky avec blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Lien WhatsApp pré-rempli pour la réservation
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Bonjour, je voudrais réserver une table au Café Bilal'
  )}`

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ rotate: -15, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <LeafLogo className="w-9 h-9" />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className={`font-display text-xl sm:text-2xl font-bold transition-colors ${
                scrolled ? 'text-forest' : 'text-offwhite'
              }`}>
                Café Bilal
              </span>
              <span className={`text-[10px] sm:text-xs font-body tracking-widest uppercase transition-colors ${
                scrolled ? 'text-sage' : 'text-ocre'
              }`}>
                Azrou • Maroc
              </span>
            </div>
          </a>

          {/* Liens desktop */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`link-underline font-body font-semibold transition-colors ${
                    scrolled
                      ? 'text-wood hover:text-forest'
                      : 'text-offwhite hover:text-ocre'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-forest text-offwhite px-5 py-2.5 rounded-full font-body font-semibold text-sm hover:bg-sage transition-all hover:shadow-lg hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse-dot" />
            Réserver
          </a>

          {/* Bouton hamburger mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-forest hover:bg-cream'
                : 'text-offwhite hover:bg-offwhite/10'
            }`}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
          >
            <MenuIcon isOpen={mobileOpen} />
          </button>
        </nav>
      </motion.header>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-offwhite shadow-2xl flex flex-col"
            >
              {/* Header du panel */}
              <div className="flex items-center justify-between p-6 border-b border-cream">
                <div className="flex items-center gap-2">
                  <LeafLogo className="w-8 h-8" />
                  <span className="font-display text-xl font-bold text-forest">
                    Café Bilal
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-wood p-2"
                  aria-label="Fermer le menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Liens */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-2">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block px-4 py-4 rounded-xl font-display text-2xl font-semibold text-wood hover:bg-cream hover:text-forest transition-all"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA mobile */}
              <div className="p-6 border-t border-cream">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-3 w-full bg-forest text-offwhite px-6 py-4 rounded-full font-body font-semibold hover:bg-sage transition-colors"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-sage animate-pulse-dot" />
                  Réserver une Table
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 w-full mt-3 border-2 border-forest text-forest px-6 py-3 rounded-full font-body font-semibold hover:bg-forest hover:text-offwhite transition-colors"
                >
                  📞 Appeler
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
