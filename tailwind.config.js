/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,ts}'];
export const theme = {
  colors: {
    transparent: 'transparent',
    dark: {
      1: '#333333',
      2: '#242424',
      3: '#191919',
    },
    light: {
      1: '#F2F2F2',
      2: '#E3E3E3',
      3: '#D4D4D4',
    },
    green: '#98C379',
    blue: '#9CCED9',
    yellow: '#F8DE7E',
    red: '#FF6347',
    purple: '#CC9CD9',
  },
  fontFamily: {
    serif: 'Lexend, serif',
    title: 'Tourney, serif',
  },
  extend: {},
};
export const plugins = [];
