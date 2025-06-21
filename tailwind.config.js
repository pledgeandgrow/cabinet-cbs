/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1E3A8A',
        'secondary': '#2563EB',
        'tertiary': '#93C5FD',
        'light': '#EFF6FF',
        'primary-dark': '#172554',
        'secondary-dark': '#1D4ED8',
        'tertiary-light': '#BFDBFE',
      },
      backgroundColor: {
        'dark': '#0a0a0a',
        'light': '#ffffff',
      },
      textColor: {
        'dark': '#ededed',
        'light': '#171717',
      },
      borderColor: {
        'dark': '#374151',
        'light': '#e5e7eb',
      },
    },
  },
  plugins: [],
}
