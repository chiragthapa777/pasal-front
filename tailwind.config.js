/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			xs: "440px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
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
		// themes: ["dark","light"],
		themes: [
			{
				pastelCustom: {
					"color-scheme": "light",
					primary: "#a482af", //a482af c6b1cd
					"primary-content": "#fff",
					secondary: "#f6cbd1",
					accent: "#b4e9d6",
					neutral: "#70acc7",
					"base-100": "#ffffff",
					"base-200": "#f9fafb",
					"base-300": "#d1d5db",
					// "--rounded-btn": "1.01rem",
				},
			},
			"dark",
		],
		// themes: ["winter"],
		// themes: ["cupcake"],
		// themes: ["wireframe"],
		// themes: ["dark"],
	},
};
