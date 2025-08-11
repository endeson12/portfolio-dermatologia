/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fcd9c0',
          300: '#f9b896',
          400: '#f5946d',
          500: '#e67e45',
          600: '#d16638',
          700: '#b54d2a',
          800: '#933d23',
          900: '#7a331f',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          gold: '#d4af37',
          success: '#10b981',
          trust: '#3b82f6',
          warning: '#f59e0b',
          error: '#ef4444',
        },
        medical: {
          light: '#f0f9ff',
          blue: '#0ea5e9',
          green: '#22c55e',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'medical': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1' }],
        'subhero': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
        'section': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'medical': '0 20px 25px -5px rgba(230, 126, 69, 0.1), 0 10px 10px -5px rgba(230, 126, 69, 0.04)',
        'medical-lg': '0 25px 50px -12px rgba(230, 126, 69, 0.25)',
        'glow': '0 0 20px rgba(230, 126, 69, 0.3)',
        'glow-lg': '0 0 40px rgba(230, 126, 69, 0.4)',
      },
      gradientColorStops: {
        'medical-start': '#fef7f0',
        'medical-end': '#fcd9c0',
      },
    },
  },
  plugins: [],
}
