var colors = require("tailwindcss/colors");
module.exports = {
	content: ["./app/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				interdimensional: {
					DEFAULT: "#8001FF",
					light: "#AA33FF",
					dark: "#4B14B8",
				},
				outrageous: {
					DEFAULT: "#FF6E4E",
					light: "#FF9933",
					dark: "#DA0B2E",
				},
				eletric: "#FA3889",
				mikado: "#FFCC33",
				neon: "#6EF76E",
				pacific: "#0CE9DB",
				vivid: "#3388FF",
				gray: colors.slate,
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
