/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6D28D9', // Violet-700
        'primary-light': '#EDE9FE', // Violet-100
        'secondary': '#8B5CF6', // Violet-500
        'tertiary': '#C4B5FD', // Violet-300
        'accent': '#4C1D95', // Violet-900
        'light': '#F5F3FF', // Violet-50
      },
      backgroundColor: {
        'light': '#ffffff',
      },
      textColor: {
        'light': '#171717',
      },
      borderColor: {
        'light': '#e5e7eb',
      },
    },
  },
  plugins: [],
}
