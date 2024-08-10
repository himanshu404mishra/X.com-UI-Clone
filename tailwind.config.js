/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      'tablet': '1023px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'custom1': {'max': '1025px'},
      'custom2': {'max': '1022px'},
      "custom3": {"max":"872px"},
      "custom4":"909px",
      "custom5": {"max":"718px"},
      "underline1":{"max":"575px"},
      "underline2":{"max":"390px"},
      "underline3":{"min":"1439px"},
      "underline4":{"min":"1280px"}
    },
  },
  plugins: [],
} 