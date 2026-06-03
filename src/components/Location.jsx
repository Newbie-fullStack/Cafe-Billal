import { motion } from 'framer-motion'

// URL Google Maps short link et version embed pour Azrou
// Note : Google Maps short links ne fonctionnent pas en iframe, on utilise donc une URL embed standard pointant sur Azrou
const MAPS_SHORT_LINK = 'https://maps.app.goo.gl/j4L9ooJ4vKoo2KR98'
const MAPS_EMBED_URL = 'https://www.google.com/maps?q=Azrou,Maroc&t=&z=15&ie=UTF8&iwloc=&output=embed'

// Informations pratiques sur le restaurant
const INFO_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
      </svg>
    ),
    label: 'Adresse',
    value: 'Azrou, Maroc',
    sub: 'Moyen Atlas'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
      </svg>
    ),
    label: 'Horaires',
    value: 'Tous les jours',
    sub: '8h00 — 23h00'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
      </svg>
    ),
    label: 'Téléphone',
    value: '+212 600 00 00 00',
    sub: 'Réservations & info'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

function Location() {
  return (
    <section
      id="location"
      className="relative py-20 md:py-28 bg-offwhite overflow-hidden"
    >
      {/* Décoration de fond */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* En-tête */}
          <motion.div variants={fadeUp} className="text-center mb-12 md:mb-14">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-ocre" />
              <span className="text-ocre font-body uppercase tracking-widest text-xs font-bold">
                Localisation
              </span>
              <div className="h-px w-12 bg-ocre" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-forest leading-tight mb-4">
              Venez nous <span className="italic text-ocre">rendre visite</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-wood/70 max-w-2xl mx-auto">
              Nous sommes situés au cœur d'Azrou, dans le magnifique Moyen Atlas.
              Une étape gourmande au pied des cèdres.
            </p>
          </motion.div>

          {/* Layout : carte + infos */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Carte Google Maps */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-natural-lg border-4 border-offwhite ring-1 ring-sage/20"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[500px] w-full bg-cream">
                <iframe
                  title="Café Bilal sur Google Maps"
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Overlay avec bouton "Ouvrir dans Maps" */}
              <a
                href={MAPS_SHORT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 sm:right-auto inline-flex items-center justify-center gap-2 bg-offwhite text-forest font-body font-semibold px-5 py-3 rounded-full shadow-natural-lg hover:bg-forest hover:text-offwhite transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
                Ouvrir dans Google Maps
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>

            {/* Colonne infos pratiques */}
            <motion.div variants={fadeUp} className="space-y-4">
              {INFO_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-cream border border-sage/20 rounded-2xl p-5 flex items-start gap-4 hover:shadow-natural transition-shadow"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-forest to-sage text-offwhite flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-ocre font-bold font-body mb-1">
                      {item.label}
                    </div>
                    <div className="font-display text-lg font-bold text-forest leading-tight">
                      {item.value}
                    </div>
                    <div className="text-sm text-wood/60 mt-0.5">
                      {item.sub}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Carte spéciale : itinéraire */}
              <motion.a
                href={MAPS_SHORT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="block bg-gradient-to-br from-forest to-sage text-offwhite rounded-2xl p-5 group hover:shadow-natural-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-offwhite/15 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-lg font-bold leading-tight">
                      Obtenir l'itinéraire
                    </div>
                    <div className="text-sm text-cream/80 mt-0.5 group-hover:text-cream transition-colors">
                      Lancer la navigation →
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Location
