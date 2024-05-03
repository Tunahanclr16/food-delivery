/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   colors:{
      primary:"#ffbe33",
      secondary:"#222831",
   },
   fontFamily:{
    dancing:["Dancing Script", "cursive"],
    open:["Open Sans", "sans-serif"],
   },
   screens: {
    xs: "375px",
    sm: "646px",
    md: "768px",
    lg: "1024px",
    xl: "1140px",
    "2xl": "1140px",
  },
    },
  },
  plugins: [],
};
