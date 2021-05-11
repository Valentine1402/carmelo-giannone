const defaultTheme = require('tailwindcss/defaultTheme')
const { colors: { teal, orange, yellow, indigo, purple, pink, red, blue, ...colors } } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      extend: {
        colors: {
          primary: '#4D3FD0',
          secondary: '#35A881',
          accent: '#E15447',
          headingBlue: '#041846',
          backgroundBlue: '#D7E1E5',
          aguaBlue: '#8ac4ce',
          gray: {
            ...colors.gray,
            darker: '#2F2F33',
            dark: '#636363',
            default: '#898989',
            light: '#A3A3A3',
            lighter: '#E6E8EC'
          },
          brown: {
            ...colors.yellow
          },
          info: '#3F99E5',
          success: '#4DAD58',
          warning: '#E7831E',
          error: '#ED5F43'
        },
        fontFamily: {
          primary: [
            'BW Modelica',
            ...defaultTheme.fontFamily.sans
          ]
        },
        fontSize: {
          '3xs': '0.625rem',
          '2xs': '0.6875rem'
        },
        gridTemplateRows: {
          layout: '1fr auto'
        },
        height: {
          72: '18rem',
          80: '20rem',
          96: '24rem'
        },
        spacing: {
          '1/2': '50%',
          '1/3': '33.333333%',
          '2/3': '66.666667%',
          '1/4': '25%',
          '2/4': '50%',
          '3/4': '75%',
          '1/5': '20%',
          '2/5': '40%',
          '3/5': '60%',
          '4/5': '80%'
        },
        strokeWidth: {
          3: '3',
          4: '4'
        },
        backgroundOpacity: {
          10: '0.1',
          20: '0.2',
          30: '0.3',
          40: '0.4',
          50: '0.5',
          55: '0.55',
          60: '0.60',
          65: '0.65',
          70: '0.70',
          75: '0.75',
          80: '0.80',
          85: '0.85',
          90: '0.90',
          95: '0.95'
        },
        minWidth: {
          1: '25%',
          2: '50%',
          3: '75%',
          full: '100%'
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}