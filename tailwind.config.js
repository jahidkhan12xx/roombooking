/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'lora': ['Lora', 'serif'],
      },
      backgroundImage: {
        'bg-1': "url('/curve.svg')",
        'bg-2': "url('/1.jpg')",
        'bg-3': "url('/2.jpg')",
        'bg-4': "url('/3.jpg')",
        'bg-5': "url('/circle.svg')",
        'bg-6': "url('/shinyw.svg')",
        'bg-7': "url('/grid.svg')",
        'bg-8': "url('/sa.png')",
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
}