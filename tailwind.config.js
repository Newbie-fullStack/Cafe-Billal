/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      // Palette nature marocaine personnalisée
      colors: {
        forest: '#2D5016',      // Vert forêt profond
        sage: '#7A9E5F',        // Vert sauge doux
        ocre: '#C8873A',        // Terre ocre chaud
        cream: '#F5F0E8',       // Crème naturel
        wood: '#6B4226',        // Brun bois
        offwhite: '#FDFAF5'     // Blanc cassé
      },
      // Typographie : titres serif élégants, corps chaleureux
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Nunito"', 'sans-serif'],
        arabic: ['"Amiri"', 'serif']
      },
      // Animations personnalisées
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.2)' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' }
        }
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite'
      },
      // Texture grain subtile
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
}
