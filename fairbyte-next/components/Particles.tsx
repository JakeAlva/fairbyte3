'use client'
import { useEffect, useRef } from 'react'

export default function Particles(){
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let w=0,h=0,px=1, dots:{x:number,y:number,vx:number,vy:number,r:number}[]=[]
    function resize(){ px = window.devicePixelRatio || 1; w = canvas.width = window.innerWidth*px; h = Math.max(500, window.innerHeight*0.9)*px; canvas.height = h; canvas.style.width = window.innerWidth+'px'; canvas.style.height = (h/px)+'px' }
    function init(){ dots=[]; for(let i=0;i<120;i++){ dots.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,r:Math.random()*2*px}) } }
    let anim=0
    function tick(){ ctx.clearRect(0,0,w,h); const link=120*px
      for(const d of dots){ d.x+=d.vx; d.y+=d.vy; if(d.x<0||d.x>w) d.vx*=-1; if(d.y<0||d.y>h) d.vy*=-1; ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2); ctx.fillStyle='rgba(46,106,214,0.45)'; ctx.fill() }
      for(let i=0;i<dots.length;i++){ for(let j=i+1;j<dots.length;j++){ const a=dots[i],b=dots[j]; const dx=a.x-b.x,dy=a.y-b.y,dist=Math.hypot(dx,dy); if(dist<link){ ctx.strokeStyle=`rgba(46,106,214,${(1-dist/link)*0.25})`; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke() } } }
      anim = requestAnimationFrame(tick)
    }
    resize(); init(); tick(); window.addEventListener('resize', ()=>{resize(); init()});
    return ()=> cancelAnimationFrame(anim)
  },[])
  return <canvas ref={ref} className="absolute inset-0" />
}
