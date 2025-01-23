/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,ts}'];
export const theme = {
  colors: {
    transparent: 'transparent',
    dark: {
      1: '#222222',
      2: '#3d3d3d',
    },
    light: '#f3f3f3',
    green: '#126716',
  },
  fontFamily: {
    serif: 'Lexend, serif',
    title: 'Tourney, serif',
  },
  extend: {},
};
export const plugins = [];
