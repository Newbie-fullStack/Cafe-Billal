import { useState, useEffect } from 'react'

// Hook qui retourne l'état d'ouverture du restaurant en fonction de l'heure locale du Maroc
// Met à jour automatiquement chaque minute pour basculer à l'heure pile
function useOpenStatus() {
  // Horaires du restaurant (peuvent être ajustés ici)
  const OPEN_HOUR = 8    // 8h00
  const CLOSE_HOUR = 23  // 23h00 (fermé à partir de 23h00 pile)

  const computeStatus = () => {
    // Récupère l'heure actuelle au fuseau du Maroc (Africa/Casablanca)
    // Intl gère automatiquement l'heure d'été/hiver du Maroc
    const formatter = new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Africa/Casablanca',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    })
    const parts = formatter.formatToParts(new Date())
    const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10)
    const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10)

    const now = hour + minute / 60
    const isOpen = now >= OPEN_HOUR && now < CLOSE_HOUR
    return { isOpen, hour, minute }
  }

  const [status, setStatus] = useState(computeStatus)

  useEffect(() => {
    // Re-vérifie toutes les 30 secondes pour basculer à l'heure pile
    const interval = setInterval(() => {
      setStatus(computeStatus())
    }, 30 * 1000)
    return () => clearInterval(interval)
  }, [])

  return status
}

export default useOpenStatus
