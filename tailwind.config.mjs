/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        bg:     '#0a0a0a',
        bg2:    '#111111',
        bg3:    '#1a1a1a',
        accent: '#378ADD',
        amber:  '#EF9F27',
        text:   '#f0ede8',
        muted:  '#888780',
        hint:   '#444441',
      },
      fontFamily: {
        serif: ['Syne', 'sans-serif'],
        mono:  ['"Space Mono"', 'monospace'],
        sans:  ['"Instrument Sans"', 'sans-serif'],
      },
      maxWidth: {
        layout: '960px',
      },
    },
  },
  plugins: [],
};
