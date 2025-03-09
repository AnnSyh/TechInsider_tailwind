/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js}",
		"./src/*.{html,js}",
	],
	theme: {
		extend: {
		  gridTemplateColumns: {
			'24': 'repeat(24, minmax(0, 1fr))', // Определяем 24 колонки
		  },
		  gridColumn: {
			'span-24': 'span 24 / span 24', // Добавляем кастомный класс col-span-18
			'span-18': 'span 18 / span 18', // Добавляем кастомный класс col-span-18
			'span-12': 'span 12 / span 12', // Добавляем кастомный класс col-span-9
			'span-9': 'span 9 / span 9', // Добавляем кастомный класс col-span-9
		  },
		}
	  },
	  
  	plugins: [],
}
