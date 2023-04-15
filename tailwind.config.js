/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      'regal-blue': 'rgb(41,68,193)',
      'white' : 'rgb(255 255 255);',
      'light-blue' : 'rgb(114,138,251)',
      'fair-blue' : 'rgb(45,67,121)',
      'red': 'rgb(223,60,49)',
      'grey' : 'rgb(239, 242, 249)'
    },
    screens: {
      'xsm': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      bigDesktop: { max: "3200px" }, //Big desktop
      semiBigDesktop: { max: "1920px" },
      bigScreen:{max: "1539"},
      bSemiBig: { max: "1440px" }, //1440
      bSemismall: { max: "1366px" }, //
      lgDesktop: { max: "1280px" }, //large desktop
      smDesktop: { max: "1024px" }, // small desktop
      smDesk: { max: "917px" }, // small desktop
      tabletAir: { max: "820px" }, // small desktop
      tablet: { max: "768px" },
      extraTab:{max:"540px"},
      mobile: { max: "480px" },
      Xmobile: { max: "360px" },
      smMobile: { max: "320px" },
    },
    extend: {},
  },
  plugins: [],
}
