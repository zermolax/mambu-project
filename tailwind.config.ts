module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'kids-primary': 'var(--kids-primary)',
        'kids-secondary': 'var(--kids-secondary)',
        'kids-background': 'var(--kids-background)',
        'kids-text': 'var(--kids-text)',
        'roma-primary': 'var(--roma-primary)',
        'roma-secondary': 'var(--roma-secondary)',
        'roma-background': 'var(--roma-background)',
        'roma-text': 'var(--roma-text)',
      },
      fontFamily: {
        lora: ['var(--font-lora)', 'serif'],
        chilanka: ['var(--font-chilanka)', 'cursive'],
        'balsamiq-sans': ['var(--font-balsamiq-sans)', 'sans-serif'],
        abeezee: ['var(--font-abeezee)', 'sans-serif'],
        trajan: ['Trajan Pro', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 25s linear infinite',
      },
    },
  },
  plugins: [],
};