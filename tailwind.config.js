/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.preserve-3d': {
      transformStyle: 'preserve-3d'
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    }
  })
})

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3031D9',
          secondary: '#F97E4E'
        }
      }
    ]
  },
  theme: {
    fontSize: {
      xs: [
        '12px',
        {
          lineHeight: '1.5'
        }
      ],
      sm: [
        '14px',

        {
          lineHeight: '1.57'
        }
      ],
      md: [
        '16px',
        {
          lineHeight: '1.5'
        }
      ],
      base: [
        '18px',
        {
          lineHeight: '1.5'
        }
      ],
      lg: [
        '24px',
        {
          lineHeight: '1.42'
        }
      ],
      xl: [
        '28px',
        {
          lineHeight: '1.43'
        }
      ],
      '2xl': [
        '30px',
        {
          neHeight: '1.43'
        }
      ],
      '3xl': [
        '32px',
        {
          neHeight: '1.43'
        }
      ]
    },
    extend: {
      colors: {
        primary: {
          100: '#3031D9',
          200: '#333299',
          300: 'rgba(48, 49, 217, 0.11)'
        },
        secondary: {
          100: '#F97E4E',
          200: '#905B46'
        },
        success: {
          100: '#2CDDC7',
          200: '#63B967'
        },
        warning: {
          100: '#F3D32C'
        },
        error: {
          100: '#C51205',
          200: '#FD483C',
          300: '#FF3131'
        },
        light: {
          100: '#E9E9FF',
          200: '#F0F2F5',
          300: '#3031D91A',
          400: '#EFEFEF'
        },
        dark: {
          100: '#0E0F14',
          200: '#1B1B1C',
          300: '#5E5E5E',
          400: '#ffffff78',
          500: '#797979',
          600: '#c4c4c4',
          700: 'rgba(48, 48, 48, 0.77)'
        }
      },
      screens: {
        // NOTE  max effect on the same screen to lower screens
        xs: { max: '426px' }
      }
    }
  },
  plugins: [require('tailwindcss-rtl'), require('daisyui'), Myclass]
}
