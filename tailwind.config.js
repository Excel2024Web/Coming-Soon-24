/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'custom-wide': '0.75rem',
        'custom-wider': '0.75em',
      },
      borderWidth: {

        '0.125rem': '0.125rem', // 2px
        '0.25rem': '0.25rem',   // 4px
        '0.375rem': '0.375rem', // 6px
        '0.5rem': '0.5rem',     // 8px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-blue': {
          textShadow: '2px 2px 4px rgba(59, 130, 246, 0.5)', // Blue shadow
        },
      }, ['responsive', 'hover']);
    },
  ],
};
