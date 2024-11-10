/** @type {import('tailwindcss').Config} */
export default {
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/flowbite/**/*.js"
  ],
	theme: {
		extend: {
      colors: {
        zeniaBlanco: '#fcf7f7',  
        zeniaRosaClaro: '#edaeb9',
        zeniaRosaOscuro: '#f68ea2',
        zeniaMarronClaro: '#b6adaa',
        zeniaMarronOscuro: '#736460',
      },
    },
	},
  plugins: [
    require('flowbite/plugin')
  ]
}
