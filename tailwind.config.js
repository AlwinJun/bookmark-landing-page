/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "345px",
        "lg-900": "900px",
      },
      maxWidth: {
        "8xl": "1420px",
      },
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": " hsl(0, 94%, 66%)",
        "grayish-blue": " hsl(229, 8%, 60%)",
        "dark-blue": "hsl(229, 31%, 21%)",
      },
      fontSize: {
        primary: "1.125rem",
      },
      fontFamily: {
        rubic: "'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
}

