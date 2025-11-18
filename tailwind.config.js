/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-soft': '#fdf2f8',
        'pink-light': '#fce7f3',
        'pink-medium': '#f9a8d4',
        'purple-soft': '#f3e8ff',
        'purple-light': '#e9d5ff',
        'purple-medium': '#c084fc',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'typing': 'typing 2s steps(40, end)',
        'stagger-fade': 'stagger-fade 0.6s ease-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'stagger-fade': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(219, 39, 119, 0.1)',
        'soft-hover': '0 8px 30px rgba(219, 39, 119, 0.2)',
        'purple-soft': '0 4px 20px rgba(147, 51, 234, 0.1)',
        'purple-hover': '0 8px 30px rgba(147, 51, 234, 0.2)',
      },
    },
  },
  plugins: [],
}