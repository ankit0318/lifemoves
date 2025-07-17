module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5758A6', // Deep Indigo
          light: '#BDB4F1',   // Light Indigo
          background: '#E5E7FF', // Soft Lavender
        },
        secondary: {
          DEFAULT: '#B5E1BE', // Soft Green
        },
        accent: {
          DEFAULT: '#BDB4F1', // Light Purple
        },
        neutral: {
          DEFAULT: '#FDFDFD', // White
          light: '#F3F5F7',   // Light Gray
        },
      },
      fontFamily: {
        heading: [
          'Poppins',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'Fira Mono',
          'Menlo',
          'Monaco',
          'monospace',
        ],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }], // 40px
        'h2': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],   // 32px
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],  // 24px
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],  // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }], // 14px
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        'section': '5rem', // 80px for section padding
        'container': '2rem', // 32px for container padding
      },
    },
  },
  plugins: [],
}; 