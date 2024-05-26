/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        dark: "#171823",
        form: '#25273D',
        primary: "#5B5E7E",
        active: "#3A7CFD"
      }
    }
  },
  plugins: []
};