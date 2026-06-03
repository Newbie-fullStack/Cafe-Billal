import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Structure complète du menu organisée par catégories
const MENU_DATA = {
  entrees: {
    label: 'Entrées Froides',
    icon: '🥗',
    groups: [
      {
        title: 'Salades',
        items: [
          { name: 'Salade Niçoise', price: 28 },
          { name: 'Salade Bérbère', price: 25 },
          { name: 'Salade Riche', price: 45 },
          { name: 'Salade Bilal', price: 52, signature: true },
          { name: 'Salade Mexicaine', price: 62 }
        ]
      }
    ]
  },
  pates: {
    label: 'Pâtes & Tacos',
    icon: '🌮',
    groups: [
      {
        title: 'Pâtes',
        items: [
          { name: 'Spaghetti à la Provençale', price: 52 },
          { name: 'Spaghetti Bolonaise', price: 58 }
        ]
      },
      {
        title: 'Tacos',
        items: [
          { name: 'Tacos Dinde', price: 37 },
          { name: 'Tacos Viande Hachée', price: 37 },
          { name: 'Tacos Nuggets', price: 37 },
          { name: 'Tacos Fruit de Mer', price: 62 },
          { name: 'Tacos Mix', price: 43 },
          { name: 'Tacos Mix F.M', price: 58 }
        ]
      }
    ]
  },
  sandwichs: {
    label: 'Sandwichs & Panini',
    icon: '🥪',
    note: 'Accompagné avec frite',
    groups: [
      {
        title: 'Panini',
        items: [
          { name: 'Panini Fromage', price: 27 },
          { name: 'Panini Viande Hachée', price: 33 },
          { name: 'Panini Dinde', price: 33 },
          { name: 'Panini Chef', price: 33 },
          { name: 'Panini Fruit de Mer', price: 45 }
        ]
      },
      {
        title: 'Pastitsio',
        items: [
          { name: 'Pastitsio Dinde', price: 37 },
          { name: 'Pastitsio Viande Hachée', price: 37 },
          { name: 'Pastitsio Fruit de Mer', price: 58 },
          { name: 'Pastitsio Mix', price: 42 }
        ]
      },
      {
        title: 'Chawarma',
        items: [
          { name: 'Chawarma Dinde', price: 37 },
          { name: 'Chawarma Viande', price: 43 }
        ]
      },
      {
        title: 'Hamburger',
        items: [
          { name: 'Fromage', price: 32 },
          { name: 'Dinde Fromage', price: 32 },
          { name: 'Fromage Œuf', price: 43 },
          { name: 'Fruit de Mer', price: 47 }
        ]
      },
      {
        title: 'Nuggets',
        items: [
          { name: 'Nuggets x4', price: 33 },
          { name: 'Nuggets x8', price: 57 },
          { name: 'Nuggets x16', price: 70 }
        ]
      }
    ]
  },
  grillades: {
    label: 'Grillades',
    icon: '🔥',
    groups: [
      {
        title: 'Brochettes & Émincés',
        items: [
          { name: 'Brochette de Dinde', price: 48 },
          { name: 'Brochette de Veau', price: 60 },
          { name: 'Émincé de Dinde Asiatique', price: 60 },
          { name: 'Émincé de Veau Charlotte', price: 90, signature: true }
        ]
      },
      {
        title: 'Entrecôtes',
        items: [
          { name: "Entrecôte Maître d'Hôtel", price: 75 },
          { name: 'Entrecôte au Poivre Vert', price: 75 },
          { name: 'Entrecôte à la Crème Champignons', price: 75 }
        ]
      }
    ]
  }
}

// Variants d'animation pour le contenu du tab
const tabContentVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.04, ease: 'easeOut' }
  })
}

// Carte individuelle d'un plat
function MenuCard({ item, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-offwhite border border-sage/20 rounded-2xl p-5 hover:border-ocre/50 hover:shadow-natural-lg transition-all cursor-default overflow-hidden"
    >
      {/* Badge signature pour les plats spéciaux */}
      {item.signature && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 bg-ocre text-offwhite text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
            ★ Signature
          </span>
        </div>
      )}

      {/* Décoration de fond au hover */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-sage/0 group-hover:bg-sage/10 rounded-full transition-all duration-500 pointer-events-none" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-lg sm:text-xl font-bold text-forest leading-snug mb-1 group-hover:text-ocre transition-colors">
            {item.name}
          </h4>
          <div className="flex items-center gap-2 mt-2">
            <span className="h-px w-6 bg-sage/40 group-hover:w-10 transition-all" />
            <span className="text-xs uppercase tracking-wider text-wood/50 font-semibold">
              Plat
            </span>
          </div>
        </div>

        {/* Badge prix */}
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-forest to-sage text-offwhite px-3 py-2 rounded-xl shadow-md group-hover:from-ocre group-hover:to-wood transition-all">
            <div className="font-display text-lg sm:text-xl font-bold leading-none">
              {item.price}
              <span className="text-[10px] ml-1 opacity-90">DH</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Menu() {
  const [activeTab, setActiveTab] = useState('entrees')
  const activeCategory = MENU_DATA[activeTab]

  return (
    <section
      id="menu"
      className="relative py-20 md:py-28 bg-gradient-to-b from-offwhite via-cream to-offwhite overflow-hidden"
    >
      {/* Décorations de fond */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-forest/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-ocre/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-ocre" />
            <span className="text-ocre font-body uppercase tracking-widest text-xs font-bold">
              Notre Carte
            </span>
            <div className="h-px w-12 bg-ocre" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-forest leading-tight mb-4">
            Le <span className="italic text-ocre">Menu</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-wood/70 max-w-2xl mx-auto">
            Découvrez nos spécialités préparées avec passion, des entrées aux
            grillades, en passant par nos célèbres tacos et paninis.
          </p>
        </motion.div>

        {/* Bandeau visuel : photo des plats du restaurant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 rounded-3xl overflow-hidden shadow-natural-lg ring-1 ring-sage/20"
        >
          <div className="aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] w-full">
            <img
              src="/img/photo2.png"
              alt="Spécialités du Café Bilal — pâtes, tacos, grillades"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </div>

          {/* Overlay vert pour lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/30 to-transparent pointer-events-none" />

          {/* Texte sur le bandeau */}
          <div className="absolute inset-y-0 left-0 flex items-center p-6 sm:p-10 lg:p-14 max-w-xl">
            <div>
              <div className="inline-flex items-center gap-2 bg-ocre/90 backdrop-blur-sm rounded-full px-3 py-1 mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-offwhite" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-offwhite">
                  Spécialités de la maison
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-offwhite leading-tight drop-shadow-lg">
                Des saveurs <span className="italic text-ocre">généreuses</span>
              </h3>
              <p className="font-body text-sm sm:text-base text-cream/90 mt-2 sm:mt-3 drop-shadow hidden sm:block">
                Une cuisine variée, préparée chaque jour avec des produits frais.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs de navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sticky top-20 z-30 py-3 -mx-4 px-4"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-offwhite/80 backdrop-blur-md border border-sage/20 rounded-2xl p-2 shadow-natural">
            {Object.entries(MENU_DATA).map(([key, cat]) => {
              const isActive = activeTab === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-body font-semibold text-sm sm:text-base transition-all ${
                    isActive
                      ? 'text-offwhite'
                      : 'text-wood/70 hover:text-forest hover:bg-cream/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-bg"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-forest to-sage rounded-xl -z-10 shadow-md"
                    />
                  )}
                  <span className="text-lg">{cat.icon}</span>
                  <span className="whitespace-nowrap">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Contenu du tab actif */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* Note éventuelle de la catégorie */}
            {activeCategory.note && (
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 bg-ocre/10 text-ocre border border-ocre/30 rounded-full px-4 py-2 text-sm font-semibold">
                  <span>ℹ️</span>
                  {activeCategory.note}
                </span>
              </div>
            )}

            {/* Groupes de la catégorie */}
            <div className="space-y-12">
              {activeCategory.groups.map((group, gi) => (
                <div key={gi}>
                  {/* Titre du sous-groupe (uniquement s'il y a plus d'un groupe) */}
                  {activeCategory.groups.length > 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: gi * 0.05 }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-forest whitespace-nowrap">
                        {group.title}
                      </h3>
                      <div className="flex-1 h-px bg-gradient-to-r from-sage/40 via-sage/20 to-transparent" />
                      <span className="text-sm text-wood/40 font-body">
                        {group.items.length} plats
                      </span>
                    </motion.div>
                  )}

                  {/* Grille des plats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                    {group.items.map((item, i) => (
                      <MenuCard key={`${item.name}-${i}`} item={item} index={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pied de section : CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-wood/70 mb-5">
            Une envie particulière ? Notre équipe est à votre écoute.
          </p>
          <a
            href="#reservation"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-forest text-offwhite px-6 py-3 rounded-full font-semibold hover:bg-ocre transition-colors shadow-natural"
          >
            Réserver une table
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
