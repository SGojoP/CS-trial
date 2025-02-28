/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
			  DEFAULT: "hsl(var(--primary))",
			  foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
			  DEFAULT: "hsl(var(--secondary))",
			  foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
			  DEFAULT: "hsl(var(--destructive))",
			  foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
			  DEFAULT: "hsl(var(--muted))",
			  foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
			  DEFAULT: "hsl(var(--accent))",
			  foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
			  DEFAULT: "hsl(var(--popover))",
			  foreground: "hsl(var(--popover-foreground))",
			},
			card: {
			  DEFAULT: "hsl(var(--card))",
			  foreground: "hsl(var(--card-foreground))",
			},
			//Existing colors are preserved below.  They could be removed if not needed.
			primary: {
			  DEFAULT: "#006D77",
			  50: "#E6F3F4",
			  100: "#CCE7E9",
			  200: "#99CFD3",
			  300: "#66B7BD",
			  400: "#339FA7",
			  500: "#006D77",
			  600: "#005761",
			  700: "#00414B",
			  800: "#002B32",
			  900: "#001519",
			  foreground: "#FFFFFF",
			},
			obsedian:{
				default: "#0b1215",
				900: "#0b1215",
				foreground: "#FFFFFF",
			},
			secondary: {
			  DEFAULT: "#E29578",
			  50: "#FCF4F1",
			  100: "#F9E9E3",
			  200: "#F3D3C7",
			  300: "#EDBDAB",
			  400: "#E7A78F",
			  500: "#E29578",
			  600: "#D96F47",
			  700: "#B84D26",
			  800: "#8A3A1C",
			  900: "#5C2713",
			  foreground: "#FFFFFF",
			},
			accent: {
			  DEFAULT: "#FFDDD2",
			  50: "#FFFFFF",
			  100: "#FFFFFF",
			  200: "#FFFFFF",
			  300: "#FFFFFF",
			  400: "#FFEEE9",
			  500: "#FFDDD2",
			  600: "#FFB39B",
			  700: "#FF8964",
			  800: "#FF5F2D",
			  900: "#F53A00",
			  foreground: "#006D77",
			},
			background: "#FFFFFF",
			foreground: "#083344",
		  },
		  borderRadius: {
        		lg: "var(--radius)",
        		md: "calc(var(--radius) - 2px)",
        		sm: "calc(var(--radius) - 4px)",
      	 },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}