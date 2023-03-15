/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // добавляем собственные цвета

        'custom_gray': '#6B7280',
        'custom_dark-gray': '#4D5562',
        'custom_light-gray': '#F3F4F6',
        'custom_blue': '#5D5FEF',
        'custom_light-blue':'#F0F9FF',
      },
    },
  },
  plugins: [],
}
