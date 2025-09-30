'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar(){
  const [dark, setDark] = useState<boolean>(false)
  useEffect(()=>{
    const saved = (typeof window!=='undefined' && localStorage.getItem('theme')) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setDark(saved==='dark')
    document.documentElement.classList.toggle('dark', saved==='dark')
  },[])
  function toggle(){ const mode = dark ? 'light' : 'dark'; setDark(!dark); document.documentElement.classList.toggle('dark', mode==='dark'); localStorage.setItem('theme', mode) }
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl glass px-4 py-3 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
          <Link href="#" className="flex items-center gap-3">
            <Image src="/assets/logo.png" alt="Fairbyte logo" width={32} height={32} className="rounded-lg shadow"/>
            <span className="text-lg font-extrabold tracking-tight">Fairbyte</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#work" className="hover:text-brand-500">Work</a>
            <a href="#services" className="hover:text-brand-500">Services</a>
            <a href="#process" className="hover:text-brand-500">Process</a>
            <a href="#pricing" className="hover:text-brand-500">Pricing</a>
            <a href="#contact" className="hover:text-brand-500">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggle} className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-900" aria-label="Toggle theme">{dark ? 'Light' : 'Dark'}</button>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400">Get a quote</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
