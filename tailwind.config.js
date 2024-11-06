import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{html,js,jsx,ts,tsx}',
    './src/pages/**/*.{html,js,jsx,ts,tsx}',
    './src/routes/**/*.{html,js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Pretendard', ...fontFamily.sans],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#1B1B1B',
        green: '#22CC55',
        blue: {
          50: '#ebf1ff',
          100: '#c2d4ff',
          200: '#a4bfff',
          300: '#7ba2fe',
          400: '#6190fe',
          500: '#3a74fe',
          600: '#356ae7',
          700: '#2952b4',
          800: '#20408c',
          900: '#18316b',
        },
        gray: {
          50: '#f7f7f7',
          100: '#e4e4e4',
          200: '#d7d7d7',
          300: '#c4c4c4',
          400: '#b9b9b9',
          500: '#a7a7a7',
          600: '#989898',
          700: '#777777',
          800: '#5c5c5c',
          900: '#1b1b1b',
        },
        red: {
          50: '#fdecec',
          100: '#ffdbdb',
          200: '#f8a9a9',
          300: '#f48282',
          400: '#f26969',
          500: '#ef4444',
          600: '#d93e3e',
          700: '#aa3030',
          800: '#832525',
          900: '#641d1d',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#3A74FE',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
