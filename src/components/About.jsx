import { motion } from 'framer-motion'

// Caractéristiques mises en avant
const FEATURES = [
  {
    icon: '🌿',
    title: 'Produits Frais',
    text: 'Sélection rigoureuse de produits locaux du Moyen Atlas chaque matin.'
  },
  {
    icon: '🔥',
    title: 'Grillades Maison',
    text: 'Viandes marinées avec soin et grillées au charbon de bois selon la tradition.'
  },
  {
    icon: '☕',
    title: 'Café Traditionnel',
    text: 'Savourez un café authentique dans une ambiance chaleureuse et conviviale.'
  }
]

// Variants pour l'animation au scroll
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-offwhite overflow-hidden"
    >
      {/* Décoration de fond : forme organique subtile */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ocre/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Colonne gauche : texte */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-ocre" />
              <span className="text-ocre font-body uppercase tracking-widest text-xs font-bold">
                À Propos
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-forest leading-tight mb-6"
            >
              Une maison <br />
              <span className="text-ocre italic">familiale</span> au cœur de la forêt
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-lg text-wood/80 leading-relaxed mb-5"
            >
              Niché dans la magnifique ville d'<strong className="text-forest">Azrou</strong>,
              entouré des cèdres millénaires du Moyen Atlas, le Café Restaurant Bilal
              vous accueille dans une atmosphère chaleureuse et authentique.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-base text-wood/70 leading-relaxed mb-8"
            >
              Depuis nos débuts, nous mettons un point d'honneur à offrir une cuisine
              généreuse mêlant saveurs marocaines traditionnelles et inspirations
              internationales. Pâtes, tacos, grillades, sandwichs ou salades —
              chaque plat est préparé avec passion.
            </motion.p>

            {/* Lien Google Maps */}
            <motion.a
              variants={fadeUp}
              href="https://maps.app.goo.gl/j4L9ooJ4vKoo2KR98"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 text-forest font-body font-semibold hover:text-ocre transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-forest text-offwhite flex items-center justify-center group-hover:bg-ocre transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
              </span>
              <span className="link-underline">Voir sur Google Maps</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>

          {/* Colonne droite : photo principale + features */}
          <div className="relative">
            {/* Photo principale du restaurant */}
            <motion.div
              variants={fadeUp}
              className="relative mb-6 rounded-[2rem] overflow-hidden shadow-natural-lg ring-1 ring-sage/20"
            >
              <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full overflow-hidden">
                <picture>
                  <source
                    type="image/webp"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    srcSet="/img/photo1-400.webp 400w, /img/photo1-600.webp 600w, /img/photo1-800.webp 800w"
                  />
                  <img
                    src="/img/photo1-600.webp"
                    alt="Ambiance du Café Restaurant Bilal à Azrou"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    width="1023"
                    height="1537"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Overlay gradient en bas de la photo */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent pointer-events-none" />

              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-5 left-5 inline-flex items-center gap-2 bg-offwhite/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-sage animate-pulse-dot" />
                <span className="text-xs font-bold uppercase tracking-wider text-forest">
                  Notre maison
                </span>
              </motion.div>

              {/* Texte sur la photo en bas */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="font-display text-2xl sm:text-3xl font-bold text-offwhite leading-tight drop-shadow-lg">
                  Bienvenue chez <span className="text-ocre italic">Bilal</span>
                </div>
                <div className="text-cream/90 text-sm mt-1 drop-shadow">
                  Au cœur de la forêt de cèdres d'Azrou
                </div>
              </div>

              {/* Petit accent décoratif ocre */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-ocre/80 rounded-[2rem] -z-10 hidden lg:block" />
            </motion.div>

            {/* Stack des features */}
            <div className="relative space-y-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, x: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-cream border border-sage/20 rounded-2xl p-5 flex items-start gap-4 shadow-natural hover:shadow-natural-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sage to-forest flex items-center justify-center text-xl shadow-md">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-forest mb-1">
                      {f.title}
                    </h3>
                    <p className="font-body text-sm text-wood/70 leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
