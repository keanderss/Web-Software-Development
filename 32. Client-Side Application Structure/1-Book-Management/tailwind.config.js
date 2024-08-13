/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

