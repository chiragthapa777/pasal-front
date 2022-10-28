/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    // fontFamily: {
    //   'sans': ['ui-sans-serif', 'system-ui'],
    //   'serif': ['ui-serif', 'Georgia'],
    //   'mono': ['ui-monospace', 'SFMono-Regular'],
    //   'display': ['Oswald'],
    //   'body': ['"Open Sans"'],
    // }
  },
  plugins: [require("daisyui")],
  daisyui: {
    
    // themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    themes: ["dark","light"],
    // themes: [{
    //   mytheme: {
    //     primary: "#ba68c8",
    //     secondary: "#f6d860",
    //     accent: "#37cdbe",
    //     neutral: "#3d4451",
    //     // "base-100": "#ffffff",
    //     // "base-200": "#ffffff",
    //     // "base-300": "#ffffff",
    //   },
    // },],
    // themes: ["winter"],
    // themes: ["cupcake"],
    // themes: ["wireframe"],
    // themes: ["dark"],

  },
}
