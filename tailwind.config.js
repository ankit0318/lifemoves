/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          text: 'var(--color-brand-text)',
          textSecondary: 'var(--color-brand-text-secondary)',
          bg: 'var(--color-brand-bg)',
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)',
          hero: 'var(--color-brand-hero)',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'hero-mobile': 'var(--text-hero-mobile)',
        'hero-desktop': 'var(--text-hero-desktop)',
        'subheading-mobile': 'var(--text-subheading-mobile)',
        'subheading-desktop': 'var(--text-subheading-desktop)',
        'highlight-mobile': 'var(--text-highlight-mobile)',
        'highlight-desktop': 'var(--text-highlight-desktop)',
        'scene-heading-desktop': 'var(--text-scene-heading-desktop)',
        'scene-heading-mobile': 'var(--text-scene-heading-mobile)',
        'scene-desc-desktop': 'var(--text-scene-desc-desktop)',
        'scene-desc-mobile': 'var(--text-scene-desc-mobile)',
      },
     
    },
  },
  plugins: [],
};
