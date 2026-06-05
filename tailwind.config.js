// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: 'hsl(220, 80%, 35%)', // adjust as needed
        electricPurple: 'hsl(260, 80%, 55%)',
        softGray: 'hsl(210, 10%, 93%)',
        neonGradient: {
          from: 'hsl(260, 80%, 55%)',
          to: 'hsl(220, 80%, 35%)',
        },
      },
      backgroundImage: (theme) => ({
        'neon-gradient': `linear-gradient(135deg, ${theme('colors.neonGradient.from')}, ${theme('colors.neonGradient.to')})`,
      }),
    },
  },
  // No plugins required

};
