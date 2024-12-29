/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-50': 'var(--color-custom-50)',
        'custom-100': 'var(--color-custom-100)',
        'custom-200': 'var(--color-custom-200)',
        'custom-300': 'var(--color-custom-300)',
        'custom-400': 'var(--color-custom-400)',
        'custom-500': 'var(--color-custom-500)',
        'custom-600': 'var(--color-custom-600)',
        'custom-700': 'var(--color-custom-700)',
        'custom-800': 'var(--color-custom-800)',
        'custom-900': 'var(--color-custom-900)',
        'custom-950': 'var(--color-custom-950)',
      },
    },
  },
  plugins: [require('./tailwind.plugin.js')],
  prefix: 'fnr-',
  darkMode: 'class',
};
