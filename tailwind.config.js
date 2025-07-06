/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Include if you have a `pages` directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Include if you have a `components` directory
  ],
  theme: {
    extend: {
      colors: {
        "obl-red": "#e7042d",
        "obl-blue": "#003091",
        "obl-dark-blue": "#010123",
      },
    },
  },
  plugins: [],
};
