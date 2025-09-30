import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] },
      colors: { brand: {50:'#eef6ff',100:'#dbeafe',200:'#bedbfe',300:'#93c5fd',400:'#60a5fa',500:'#2e6ad6',600:'#2554aa',700:'#1e4291',800:'#152c5b',900:'#0e1e3b'} },
      boxShadow: { glow: '0 0 0 2px rgba(46,106,214,0.35), 0 10px 40px -10px rgba(46,106,214,0.6)' },
      animation: { float:'float 6s ease-in-out infinite', gradient:'gradient 8s ease infinite', marquee:'marquee 24s linear infinite' },
      keyframes: {
        float:{'0%,100%':{transform:'translateY(0px)'},'50%':{transform:'translateY(-10px)'}},
        gradient:{'0%,100%':{backgroundPosition:'0% 50%'},'50%':{backgroundPosition:'100% 50%'}},
        marquee:{'0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'}}
      }
    }
  },
  plugins: []
}
export default config
