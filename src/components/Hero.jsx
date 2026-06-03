import { motion } from 'framer-motion'

// Numéro WhatsApp placeholder pour la réservation
const WHATSAPP_NUMBER = '212600000000'
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Bonjour, je voudrais réserver une table au Café Bilal'
)}`

// Variants Framer Motion pour l'animation staggerée
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

// Décoration feuille SVG flottante
function FloatingLeaf({ className, delay = 0 }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.25, scale: 1 }}
      transition={{ duration: 1.5, delay }}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 5C25 15 10 35 10 60c0 15 8 28 22 33 1-22 8-40 25-55-2 25-11 42-22 55 6 0 12-1 18-3 18-7 30-25 30-48 0-9-3-17-7-22-9 3-18 3-26-15z"
        fill="currentColor"
      />
    </motion.svg>
  )
}

// Icône scroll indicator
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/70"
    >
      <span className="text-xs uppercase tracking-widest font-body">Découvrir</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-1.5"
      >
        <div className="w-1 h-2 bg-cream/70 rounded-full" />
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  // Scroll fluide vers la section Menu
  const scrollToMenu = (e) => {
    e.preventDefault()
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden texture-grain"
    >
      {/* Image de fond du Café Bilal — <img> avec object-cover évite les problèmes de zoom CSS */}
      <picture aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none">
        <source
          type="image/webp"
          srcSet="/img/miniature2-768.webp 768w"
          sizes="100vw"
        />
        <img
          src="/img/miniature2-768.webp"
          alt=""
          width="1271"
          height="1238"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Overlay sombre pour assurer la lisibilité du texte par-dessus la photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest/90 pointer-events-none" />
      <div className="absolute inset-0 bg-wood/30 pointer-events-none" />

      {/* Décorations feuilles flottantes */}
      <div className="absolute top-24 left-4 sm:left-12 text-sage leaf-float pointer-events-none">
        <FloatingLeaf className="w-24 h-24 sm:w-40 sm:h-40" delay={0.5} />
      </div>
      <div
        className="absolute bottom-32 right-4 sm:right-16 text-ocre leaf-float pointer-events-none"
        style={{ animationDelay: '3s' }}
      >
        <FloatingLeaf className="w-20 h-20 sm:w-32 sm:h-32 rotate-180" delay={0.8} />
      </div>
      <div
        className="absolute top-40 right-8 sm:right-32 text-sage/60 leaf-float pointer-events-none hidden md:block"
        style={{ animationDelay: '1.5s' }}
      >
        <FloatingLeaf className="w-16 h-16 rotate-45" delay={1.1} />
      </div>

      {/* Contenu central */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20"
      >
        {/* Badge "Ouvert maintenant" */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 bg-offwhite/10 backdrop-blur-sm border border-sage/40 rounded-full px-5 py-2 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sage" />
          </span>
          <span className="text-cream text-xs sm:text-sm font-body font-semibold tracking-wider uppercase">
            Ouvert maintenant
          </span>
        </motion.div>

        {/* Sous-ligne décorative */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-offwhite/50" />
          <span className="text-offwhite font-arabic text-xl tracking-widest drop-shadow-lg">
            بسم الله
          </span>
          <div className="h-px w-12 bg-offwhite/50" />
        </motion.div>

        {/* Headline principal */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-offwhite leading-[1.05] mb-6"
        >
          Saveurs Authentiques
          <span className="block mt-2 text-sage italic font-medium">
            au Cœur d'Azrou
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          variants={itemVariants}
          className="font-body text-base sm:text-lg md:text-xl text-cream/90 mb-3 max-w-2xl mx-auto"
        >
          Restaurant <span className="text-ocre">•</span> Café{' '}
          <span className="text-ocre">•</span> Grillades{' '}
          <span className="text-ocre">•</span> Tacos
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="font-body text-sm sm:text-base text-cream/70 mb-10 max-w-xl mx-auto"
        >
          Une cuisine généreuse et familiale, inspirée par la forêt de cèdres
          et la chaleur de la montagne marocaine.
        </motion.p>

        {/* Boutons CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#menu"
            onClick={scrollToMenu}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ocre text-offwhite px-8 py-4 rounded-full font-body font-bold text-base shadow-natural hover:shadow-natural-lg transition-shadow"
          >
            <span className="text-xl group-hover:rotate-12 transition-transform">📋</span>
            Voir le Menu
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-offwhite/10 backdrop-blur-sm border-2 border-offwhite/40 text-offwhite px-8 py-4 rounded-full font-body font-bold text-base hover:bg-offwhite hover:text-forest transition-colors btn-pulse"
          >
            <span className="text-xl">📞</span>
            Réserver une Table
          </motion.a>
        </motion.div>

        {/* Mini stats / réassurance */}
        <motion.div
          variants={itemVariants}
          className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '★ 4.5', label: 'Clients satisfaits' },
            { value: '8h-23h', label: 'Tous les jours' },
            { value: 'Azrou', label: 'Cœur de la ville' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-ocre">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-cream/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}

export default Hero
