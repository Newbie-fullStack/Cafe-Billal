import { motion } from 'framer-motion'
import './Team.css'

// SECTION EQUIPE START
// Profils des serveurs du Café Bilal — données réalistes inspirées du contexte
const TEAM_MEMBERS = [
  {
    name: 'Youssef',
    initials: 'Y',
    role: 'Chef de salle',
    years: 6,
    quote: 'Chaque client est un invité chez nous.',
    skills: ['Accueil VIP', 'Thé traditionnel', 'Gestion de salle'],
    rating: 5
  },
  {
    name: 'Fatima',
    initials: 'F',
    role: 'Serveuse senior',
    years: 4,
    quote: 'Un sourire, c\'est le meilleur des menus.',
    skills: ['Connaissances culinaires', 'FR / AR / ES', 'Speed service'],
    rating: 5
  },
  {
    name: 'Khalil',
    initials: 'K',
    role: 'Serveur café & snacks',
    years: 2,
    quote: 'Le café, c\'est toute une culture.',
    skills: ['Barista', 'Smoothies', 'Ambiance jeune'],
    rating: 4
  },
  {
    name: 'Samira',
    initials: 'S',
    role: 'Serveuse polyvalente',
    years: 1,
    quote: 'Ici, on sert avec le cœur.',
    skills: ['FR / EN', 'Gestion groupes', 'Dynamisme'],
    rating: 4
  }
]

// Ornement marocain : étoile à 8 branches (style zellige)
function MoroccanStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 6.6L21 9l-5 4.5 1.5 7L12 17l-5.5 3.5L8 13.5 3 9l6.6-.4L12 2z" />
    </svg>
  )
}

// Composant : Étoiles de notation
function StarRating({ rating }) {
  return (
    <span
      className="team-stars"
      role="img"
      aria-label={`Note : ${rating} étoiles sur 5`}
    >
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={i <= rating ? '' : 'team-star-empty'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
      <span className="team-stars-label">({rating}/5)</span>
    </span>
  )
}

// Variants d'animation Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

function Team() {
  return (
    <section
      id="equipe"
      className="team-section relative py-20 md:py-28"
      aria-label="Notre équipe de serveurs"
    >
      {/* Décoration de fond subtile */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          {/* Ornement marocain décoratif */}
          <div className="team-ornament" aria-hidden="true">
            <span className="team-ornament-line" />
            <MoroccanStar />
            <span className="team-ornament-line" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-ocre" />
            <span className="text-ocre font-body uppercase tracking-widest text-xs font-bold">
              Notre Équipe
            </span>
            <div className="h-px w-12 bg-ocre" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-forest leading-tight mb-4">
            Les visages de <span className="italic text-ocre">Bilal</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-wood/70 max-w-2xl mx-auto">
            Une équipe passionnée, accueillante et toujours prête à vous faire
            vivre une expérience mémorable au cœur d'Azrou.
          </p>
        </motion.div>

        {/* Grille des membres de l'équipe */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5"
        >
          {TEAM_MEMBERS.map((member, i) => (
            <motion.article
              key={member.name}
              variants={cardVariants}
              className="team-card team-card-mobile"
            >
              {/* Avatar */}
              <div className="team-avatar-wrapper">
                <div className="team-avatar-border">
                  <div className="team-avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                </div>
              </div>

              {/* Nom + poste */}
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>

              {/* Badge expérience */}
              <span className="team-badge">
                ★ {member.years} an{Number(member.years) > 1 ? 's' : ''} d'expérience
              </span>

              <div className="team-divider" aria-hidden="true" />

              {/* Citation */}
              <blockquote className="team-quote">
                {member.quote}
              </blockquote>

              {/* Compétences (liste sémantique) */}
              <ul className="team-skills" role="list">
                {member.skills.map((skill, j) => (
                  <li key={j} className="team-skill" role="listitem">
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Note étoiles */}
              <StarRating rating={member.rating} />
            </motion.article>
          ))}
        </motion.div>

        {/* Mention légale / signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-wood/50 text-sm mt-12 font-body italic"
        >
          « Une équipe, une famille, un café. »
        </motion.p>
      </div>
    </section>
  )
  // SECTION EQUIPE END
}

export default Team
