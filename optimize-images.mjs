// Script d'optimisation des images du Café Bilal
// Convertit les PNG originaux en WebP (95% qualité) + AVIF (80% qualité) pour des performances optimales
import sharp from 'sharp'
import { readdir, stat, mkdir } from 'fs/promises'
import { join, extname, basename } from 'path'

const INPUT_DIR = './public/img'
const OUTPUT_DIR = './public/img'

const FORMATS = [
  { ext: 'webp', options: { quality: 85, effort: 4 } },
  { ext: 'avif', options: { quality: 65, effort: 4 } }
]

// Tailles responsives générées (width en pixels)
const SIZES = {
  hero: [1920, 1280, 768],         // Hero background : très grand
  about: [800, 600, 400],          // About : portrait/medium
  menu: [1600, 1200, 800],         // Menu banner : paysage
  reservation: [1920, 1280, 768],  // Reservation bg : très grand
  boissons: [1200, 800, 500],      // Bannière boissons
  restaurant: [1600, 1200, 800]    // Bannière restaurant
}

const FILES_CONFIG = {
  'miniature2.png': 'hero',
  'photo1.png': 'about',
  'photo2.png': 'menu',
  'photo3.png': 'reservation',
  'menuBoiss.png': 'boissons',
  'menuRestaut.png': 'restaurant'
}

async function optimizeImage(inputPath, baseName) {
  const config = FILES_CONFIG[baseName]
  const sizes = config ? SIZES[config] : [1280, 800]
  const originalSize = (await stat(inputPath)).size

  console.log(`\n📷 ${baseName} (${(originalSize / 1024 / 1024).toFixed(2)} MB)`)

  const image = sharp(inputPath)
  const metadata = await image.metadata()
  console.log(`   ${metadata.width}x${metadata.height}px`)

  // Génère chaque format et chaque taille
  for (const format of FORMATS) {
    for (const width of sizes) {
      // Ne pas upscaler une image plus petite que la taille demandée
      if (width > metadata.width) continue

      const outputName = `${basename(baseName, '.png')}-${width}.${format.ext}`
      const outputPath = join(OUTPUT_DIR, outputName)

      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true, fit: 'inside' })
        [format.ext](format.options)
        .toFile(outputPath)

      const newSize = (await stat(outputPath)).size
      const reduction = ((1 - newSize / originalSize) * 100).toFixed(0)
      console.log(`   ✓ ${outputName} : ${(newSize / 1024).toFixed(0)} KB (-${reduction}%)`)
    }
  }
}

async function main() {
  console.log('🚀 Optimisation des images Café Bilal\n')

  try {
    const files = await readdir(INPUT_DIR)
    const pngFiles = files.filter(f => extname(f).toLowerCase() === '.png' && FILES_CONFIG[f])

    if (pngFiles.length === 0) {
      console.log('⚠️  Aucune image PNG à optimiser')
      return
    }

    for (const file of pngFiles) {
      await optimizeImage(join(INPUT_DIR, file), file)
    }

    console.log('\n✅ Optimisation terminée !')
  } catch (err) {
    console.error('❌ Erreur:', err)
    process.exit(1)
  }
}

main()
