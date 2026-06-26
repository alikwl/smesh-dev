/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,meta,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#4f46e5',
          hover: '#4338ca',
          accent: '#0d9488',
          dark: '#0f172a',
        },
        indigo: {
          650: '#4f46e5',
          755: '#4338ca',
          805: '#3730a3',
          850: '#312e81',
        },
        blue: {
          650: '#2563eb',
        },
        teal: {
          550: '#0d9488',
        },
        emerald: {
          650: '#059669',
        },
        slate: {
          705: '#334155',
        }
      }
    },
  },
  plugins: [],
}
