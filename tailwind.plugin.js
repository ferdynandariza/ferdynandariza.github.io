const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, addUtilities, theme }) {
  addBase({
    ':root': {
      '--color-custom-50': '#f9fafb',
      '--color-custom-100': '#f3f4f6',
      '--color-custom-200': '#e5e7eb',
      '--color-custom-300': '#d1d5db',
      '--color-custom-400': '#9ca3af',
      '--color-custom-500': '#6b7280',
      '--color-custom-600': '#4b5563',
      '--color-custom-700': '#374151',
      '--color-custom-800': '#1f2937',
      '--color-custom-900': '#111827',
      '--color-custom-950': '#030712',
      '--color-bg-primary': '#ffffff',
      '--color-text-primary': '#111827',
    },
    '.dark': {
      '--color-custom-50': '#111827',
      '--color-custom-100': '#1f2937',
      '--color-custom-200': '#374151',
      '--color-custom-300': '#4b5563',
      '--color-custom-400': '#6b7280',
      '--color-custom-500': '#9ca3af',
      '--color-custom-600': '#d1d5db',
      '--color-custom-700': '#e5e7eb',
      '--color-custom-800': '#f3f4f6',
      '--color-custom-900': '#f9fafb',
      '--color-custom-950': '#ffffff',
      '--color-bg-primary': '#030712',
      '--color-text-primary': '#f9fafb',
    },
  });
  addUtilities({
    '.bg-custom-primary': {
      backgroundColor: 'var(--color-bg-primary)',
    },
    '.text-custom-primary': {
      color: 'var(--color-text-primary)',
    },
    '.text-heading-h1': {
      '@apply fnr-text-[36px] fnr-leading-[40px] fnr-font-[600] sm:fnr-text-[48px] sm:fnr-leading-[48px] sm:fnr-font-[700] sm:fnr-tracking-tighter md:fnr-text-[60px] md:fnr-leading-[72px]':
        {},
    },
    '.text-heading-h2': {
      '@apply fnr-text-[18px] fnr-leading-[28px] fnr-font-[600] fnr-tracking-tighter md:fnr-text-[36px] md:fnr-leading-[40px]':
        {},
    },
    '.text-heading-h3': {
      '@apply fnr-text-[24px] fnr-leading-[32px] fnr-font-[600] fnr-tracking-tighter md:fnr-text-[30px] md:fnr-leading-[36px]':
        {},
      '&-bold': {
        '@apply fnr-text-heading-h3 fnr-font-[700]': {},
      },
    },
    '.text-subtitle': {
      '@apply fnr-text-[18px] fnr-leading-[28px] fnr-font-[400] md:fnr-text-[20px] md:fnr-leading-[28px]':
        {},
      '&-semibold': {
        '@apply fnr-text-subtitle fnr-font-[600]': {},
      },
    },
    '.text-body-1': {
      '@apply fnr-text-[16px] fnr-leading-[24px] fnr-font-[400] md:fnr-text-[16px] md:fnr-leading-[24px]':
        {},
    },
    '.text-body-2': {
      '@apply fnr-text-[16px] fnr-leading-[24px]': {},
      '&-normal': {
        '@apply fnr-text-body-2 fnr-font-[400]': {},
      },
      '&-underline': {
        '@apply fnr-text-body-2 fnr-font-[400] fnr-underline': {},
      },
      '&-medium': {
        '@apply fnr-text-body-2 fnr-font-[500]': {},
      },
      '&-semibold': {
        '@apply fnr-text-body-2 fnr-font-[600]': {},
      },
    },
    '.text-body-3': {
      '@apply fnr-text-[14px] fnr-leading-[20px]': {},
      '&-normal': {
        '@apply fnr-text-body-3 fnr-font-[400]': {},
      },
      '&-medium': {
        '@apply fnr-text-body-3 fnr-font-[500]': {},
      },
    },
  });
});
