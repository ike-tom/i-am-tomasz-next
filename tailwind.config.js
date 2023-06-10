/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      boxShadow: {
        '3xl':
          '5px 5px rgba(246, 235, 20, 0.4), 10px 10px rgba(246, 235, 20, 0.3), 15px 15px rgba(246, 235, 20, 0.2), 20px 20px rgba(246, 235, 20, 0.1), 25px 25px rgba(246, 235, 20, 0.05)',
      },
      fontFamily: {
        pixel: ['pixel', 'sans-serif'],
        pacman: ['pacman', 'sans-serif'],
      },
      animation: {
        blink: 'blink 0.8s linear infinite',
      },
    },
  },
  plugins: [],
}
