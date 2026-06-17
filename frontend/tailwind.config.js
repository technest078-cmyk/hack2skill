/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0080',      // Hot Pink - Primary brand
        secondary: '#0080FF',    // Electric Blue - Secondary
        accent: '#FF6B9D',       // Light Pink - Accent
        danger: '#FF1744',       // Bright Red for high emissions
        success: '#00E676',      // Bright Green for good results
        warning: '#FFC107',      // Bright Amber
        bgDark: '#0F0518',       // Deep purple-black
        bgDarker: '#070210',     // Ultra dark
        cardDark: '#1A0B2E',     // Purple-black card
        cardLight: '#2D1544',    // Lighter purple card
        textLight: '#FFFFFF',
        textMuted: '#E0B3FF',    // Light purple
        pink: {
          light: '#FFB3D9',
          DEFAULT: '#FF0080',
          dark: '#CC0066',
        },
        blue: {
          light: '#66B3FF',
          DEFAULT: '#0080FF',
          dark: '#0066CC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF0080 0%, #FF6B9D 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0080FF 0%, #0066CC 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF6B9D 0%, #FFB3D9 100%)',
        'gradient-analytics': 'linear-gradient(135deg, #FF0080 0%, #0080FF 50%, #FF6B9D 100%)',
        'gradient-carbon': 'linear-gradient(135deg, #0080FF 0%, #FF0080 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F0518 0%, #070210 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #FF0080 0%, transparent 50%), radial-gradient(at 80% 80%, #0080FF 0%, transparent 50%), radial-gradient(at 0% 50%, #FF6B9D 0%, transparent 50%)',
        'gradient-instagram': 'linear-gradient(45deg, #FF0080, #FF6B9D, #0080FF, #66B3FF)',
        'gradient-hero': 'linear-gradient(135deg, #FF0080 0%, #0080FF 50%, #FF6B9D 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255, 0, 128, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%)',
        'gradient-shine': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(0, 128, 255, 0.6), 0 0 60px rgba(0, 128, 255, 0.4)',
        'glow-purple': '0 0 30px rgba(255, 0, 128, 0.6), 0 0 60px rgba(255, 0, 128, 0.4)',
        'glow-orange': '0 0 30px rgba(255, 107, 157, 0.6), 0 0 60px rgba(255, 107, 157, 0.4)',
        'glow-analytics': '0 0 40px rgba(255, 0, 128, 0.4), 0 0 80px rgba(0, 128, 255, 0.3), 0 0 120px rgba(255, 107, 157, 0.2)',
        'glow-multi': '0 0 20px rgba(255, 0, 128, 0.5), 0 0 40px rgba(0, 128, 255, 0.4), 0 0 60px rgba(255, 107, 157, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255, 0, 128, 0.3)',
        'neon': '0 0 5px rgba(255, 0, 128, 0.6), 0 0 10px rgba(255, 0, 128, 0.5), 0 0 20px rgba(0, 128, 255, 0.4), 0 0 40px rgba(0, 128, 255, 0.3)',
        'instagram': '0 8px 32px rgba(255, 0, 128, 0.2), 0 16px 64px rgba(0, 128, 255, 0.15)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'data-flow': 'dataFlow 3s ease-in-out infinite',
        'gradient-xy': 'gradientXY 15s ease infinite',
        'shine': 'shine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientXY: {
          '0%, 100%': { 
            backgroundSize: '400% 400%',
            backgroundPosition: 'left center'
          },
          '50%': { 
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center'
          },
        },
        dataFlow: {
          '0%, 100%': { opacity: 0.3, transform: 'translateY(0)' },
          '50%': { opacity: 1, transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
      },
      letterSpacing: {
        tighter: '-0.03em',
      },
    },
  },
  plugins: [],
}
