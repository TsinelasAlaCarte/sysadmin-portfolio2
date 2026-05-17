/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crust: '#11111b',
        mantle: '#181825',
        base: '#1e1e2e',
        surface0: '#313244',
        surface1: '#45475a',
        surface2: '#585b70',
        text: '#cdd6f4',
        subtext0: '#a6adc8',
        subtext1: '#bac2de',
        lavender: '#b4befe',
        blue: '#8caaee',
        sapphire: '#85c1dc',
        sky: '#99d1db',
        teal: '#81c8be',
        green: '#a6d189',
        yellow: '#e5c890',
        peach: '#ef9f76',
        maroon: '#ea999c',
        red: '#e78284',
        mauve: '#ca9ee6',
        pink: '#f4b8e4',
        flamingo: '#eebebe',
        rosewater: '#f2d5cf',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        pixel: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
}
