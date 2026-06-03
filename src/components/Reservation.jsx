import { motion } from 'framer-motion'

// Numéros de contact placeholder
const PHONE_NUMBER = '+212600000000'
const WHATSAPP_NUMBER = '212600000000'
const WHATSAPP_MESSAGE = 'Bonjour, je voudrais réserver une table au Café Bilal'

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// Icône WhatsApp SVG
function WhatsAppIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
    </svg>
  )
}

// Icône téléphone SVG
function PhoneIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}

function Reservation() {
  return (
    <section
      id="reservation"
      className="relative py-20 md:py-28 texture-grain overflow-hidden"
    >
      {/* Image de fond : ambiance du restaurant — <img> en absolute pour éviter bg-fixed (cassé sur iOS) */}
      <picture aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none">
        <source
          type="image/webp"
          sizes="100vw"
          srcSet="/img/photo3-768.webp 768w, /img/photo3-1280.webp 1280w"
        />
        <img
          src="/img/photo3-1280.webp"
          alt=""
          width="1438"
          height="1093"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Overlay vert foncé pour assurer la lisibilité par-dessus la photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest/95 via-forest/85 to-wood/90 pointer-events-none" />

      {/* Décorations de fond */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-sage/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocre/10 rounded-full blur-3xl pointer-events-none" />

      {/* Motif feuilles décoratif en arrière-plan */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%23F5F0E8'%3E%3Cpath d='M50 10C30 20 20 40 25 60c8-15 18-25 28-30-5 15-12 28-22 38 5 2 12 2 18 0 12-5 20-18 18-32-1-10-5-18-10-25-2 3-5 4-7-1z'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* En-tête */}
          <motion.div variants={fadeUp} className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-ocre" />
              <span className="text-ocre font-body uppercase tracking-widest text-xs font-bold">
                Réservation
              </span>
              <div className="h-px w-12 bg-ocre" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-offwhite leading-tight mb-5">
              Réservez votre <br className="sm:hidden" />
              <span className="italic text-ocre">table</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-cream/80 max-w-2xl mx-auto">
              Une table vous attend chez Bilal. Contactez-nous directement,
              nous serons ravis de vous accueillir.
            </p>
          </motion.div>

          {/* Cartes des deux options de contact */}
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-12">
            {/* Option WhatsApp */}
            <motion.a
              variants={fadeUp}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-[#25D366] to-[#128C7E] text-offwhite rounded-3xl p-8 sm:p-10 overflow-hidden shadow-natural-lg transition-shadow hover:shadow-2xl"
            >
              {/* Effet décoratif */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-offwhite/10 rounded-full blur-2xl group-hover:bg-offwhite/20 transition-all duration-500" />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-offwhite/15 backdrop-blur-sm rounded-2xl items-center justify-center mb-6"
                >
                  <WhatsAppIcon className="w-9 h-9 sm:w-11 sm:h-11" />
                </motion.div>

                <div className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">
                  Option 1 — Le plus rapide
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  Réserver via WhatsApp
                </h3>
                <p className="font-body text-sm sm:text-base opacity-90 mb-6 leading-relaxed">
                  Envoyez-nous un message directement. Réponse rapide garantie.
                </p>

                <div className="inline-flex items-center gap-2 font-body font-bold border-b-2 border-offwhite/40 pb-1 group-hover:border-offwhite group-hover:gap-3 transition-all">
                  Démarrer la conversation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>

            {/* Option téléphone */}
            <motion.a
              variants={fadeUp}
              href={`tel:${PHONE_NUMBER}`}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-ocre to-wood text-offwhite rounded-3xl p-8 sm:p-10 overflow-hidden shadow-natural-lg transition-shadow hover:shadow-2xl"
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-offwhite/10 rounded-full blur-2xl group-hover:bg-offwhite/20 transition-all duration-500" />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-offwhite/15 backdrop-blur-sm rounded-2xl items-center justify-center mb-6"
                >
                  <PhoneIcon className="w-9 h-9 sm:w-11 sm:h-11" />
                </motion.div>

                <div className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">
                  Option 2 — Direct & humain
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  Appeler le restaurant
                </h3>
                <p className="font-body text-sm sm:text-base opacity-90 mb-6 leading-relaxed">
                  Parlez directement à notre équipe pour une réservation personnalisée.
                </p>

                <div className="inline-flex items-center gap-2 font-body font-bold border-b-2 border-offwhite/40 pb-1 group-hover:border-offwhite group-hover:gap-3 transition-all">
                  {PHONE_NUMBER}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Informations supplémentaires */}
          <motion.div
            variants={fadeUp}
            className="bg-offwhite/5 backdrop-blur-sm border border-offwhite/10 rounded-2xl p-6 sm:p-8 text-cream"
          >
            <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <div className="text-ocre text-2xl mb-2">🕐</div>
                <h4 className="font-display text-lg font-bold mb-1">Horaires</h4>
                <p className="text-sm text-cream/70">
                  Tous les jours<br />8h00 — 23h00
                </p>
              </div>
              <div>
                <div className="text-ocre text-2xl mb-2">👥</div>
                <h4 className="font-display text-lg font-bold mb-1">Groupes</h4>
                <p className="text-sm text-cream/70">
                  Accueil de groupes<br />sur réservation
                </p>
              </div>
              <div>
                <div className="text-ocre text-2xl mb-2">📍</div>
                <h4 className="font-display text-lg font-bold mb-1">Adresse</h4>
                <p className="text-sm text-cream/70">
                  Azrou, Maroc<br />Moyen Atlas
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reservation
