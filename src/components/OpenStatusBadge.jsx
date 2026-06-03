import { motion, AnimatePresence } from 'framer-motion'
import useOpenStatus from '../hooks/useOpenStatus'

// Badge animé : affiche "Ouvert maintenant" (vert pulsant) ou "Fermé" (rouge statique)
// selon l'heure locale du Maroc
function OpenStatusBadge() {
  const { isOpen, hour, minute } = useOpenStatus()
  const moroccoTime = `${String(hour).padStart(2, '0')}h${String(minute).padStart(2, '0')}`

  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          key="open"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 bg-emerald-500/15 backdrop-blur-sm border border-emerald-400/50 rounded-full px-5 py-2 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-emerald-50 text-xs sm:text-sm font-body font-semibold tracking-wider uppercase">
            Ouvert maintenant
          </span>
          <span className="hidden sm:inline-block text-emerald-200/70 text-xs font-body ml-1">
            • {moroccoTime}
          </span>
        </motion.div>
      ) : (
        <motion.div
          key="closed"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 bg-red-600/25 backdrop-blur-sm border-2 border-red-500/70 rounded-full px-5 py-2 mb-8 shadow-[0_0_20px_rgba(239,68,68,0.35)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <span className="text-red-100 text-xs sm:text-sm font-body font-bold tracking-wider uppercase">
            Fermé
          </span>
          <span className="hidden sm:inline-block text-red-200/80 text-xs font-body ml-1">
            • Ouvre à 08h00
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OpenStatusBadge
