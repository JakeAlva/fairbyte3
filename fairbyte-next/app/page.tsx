import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Particles from '@/components/Particles'

export default function Home() {
  return (
    <main>
      <Navbar/>

      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute -top-48 left-1/2 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 via-sky-400 to-indigo-500 opacity-30 blur-3xl animate-gradient bg-[length:200%_200%]"/>
          <Particles/>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800/80 dark:text-slate-300 mb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Now booking October builds
              </div>
              <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
                Websites & apps that feel <span className="bg-gradient-to-r from-brand-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent">fast, premium, and alive</span>.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
                Fairbyte ships modern products—crafted UIs, robust backends, and clean devops. Built to scale, delightful to use.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">See our work</a>
                <a href="#contact" className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900">Start a project</a>
              </div>
              <div className="relative mt-10 overflow-hidden rounded-xl border border-slate-200/60 p-4 dark:border-slate-800/80">
                <div className="flex whitespace-nowrap animate-marquee gap-10 will-change-transform">
                  {['React','Next.js','TypeScript','Tailwind','Node','Postgres','Supabase','Stripe','Auth','iOS','Android'].map(t => (
                    <span key={t} className="font-semibold text-slate-500">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-600/20 to-sky-400/10 blur-2xl"></div>
              <div className="relative rounded-3xl border border-slate-200/60 bg-white/70 p-2 shadow-2xl dark:border-slate-800/80 dark:bg-slate-900/70">
                <div className="rounded-2xl bg-slate-900 p-6 text-white">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="h-3 w-3 rounded-full bg-rose-400"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                    <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                    <span className="ml-auto">/apps/quote.tsx</span>
                  </div>
                  <pre className="mt-4 overflow-auto rounded-xl bg-slate-950/70 p-4 text-[11px] leading-relaxed ring-1 ring-white/10"><code>{`const Quote = () => (
  <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <input placeholder="Name" className="input" />
    <input placeholder="Email" className="input" />
    <input placeholder="Company" className="input sm:col-span-2" />
    <textarea placeholder="Tell us about your idea" className="input sm:col-span-2 h-28"></textarea>
    <button className="rounded-lg bg-brand-600 px-4 py-2 font-semibold hover:bg-brand-700">Get estimate</button>
  </form>
)`}</code></pre>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 top-6 hidden h-28 w-28 rotate-6 items-center justify-center rounded-2xl border border-slate-200/60 bg-white p-4 text-xs shadow-lg dark:border-slate-800/80 dark:bg-slate-900 lg:flex animate-float">
                <Image src="/assets/logo.png" width={32} height={32} alt="Fairbyte icon" className="h-8 w-8"/>
                <div className="ml-3 font-semibold">fairbyte.us</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Selected work</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">A showcase of components and interactions we can ship quickly.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold hover:text-brand-500">Start your build →</a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {['Realtime Analytics','Headless Storefront','iOS/Android App'].map((title, i)=> (
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 to-white p-5 shadow-lg dark:border-slate-800/80 dark:from-slate-900 dark:to-slate-950">
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mask-fade">
                  <div className="h-full w-full bg-gradient-to-tr from-brand-600/30 via-sky-400/20 to-indigo-500/20"></div>
                </div>
                <div className="aspect-[16/10] rounded-xl bg-slate-200/50 dark:bg-slate-800/50 grid place-items-center text-slate-500 text-sm">{['App Dashboard','E-commerce','Mobile'][i]}</div>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{['Next.js + SSR + stream charts + role-based access.','Stripe + headless CMS + blazing-fast product pages.','React Native + native modules + offline mode.'][i]}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  {i===0 && ['Next.js','WebSockets','Postgres'].map(t=> <span key={t} className="rounded-full border px-2 py-1 dark:border-slate-700">{t}</span>)}
                  {i===1 && ['Stripe','CMS','Edge'].map(t=> <span key={t} className="rounded-full border px-2 py-1 dark:border-slate-700">{t}</span>)}
                  {i===2 && ['React Native','SQLite','Push'].map(t=> <span key={t} className="rounded-full border px-2 py-1 dark:border-slate-700">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative bg-slate-50 py-24 dark:bg-slate-925">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">What we do</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">From idea to launch—design, develop, deploy. Transparent scopes and fixed timelines.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Web Apps','Next.js, SSR/SSG, auth, dashboards, subscriptions, admin tools.'],
              ['Mobile','React Native, offline-first, native modules, App Store/Play deploys.'],
              ['E-commerce','Stripe flows, tax/shipping, product variants, headless CMS.'],
              ['Brand & UI','Design systems, accessibility, high-polish micro-interactions.'],
              ['APIs & Data','Node/Go, Postgres, caching, background jobs, analytics.'],
              ['DevOps','CI/CD, monitoring, zero-downtime deploys, edge/CDN.']
            ].map(([title,desc])=> (
              <div key={title as string} className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-lg dark:border-slate-800/80 dark:bg-slate-900">
                <div className="text-sm font-semibold text-brand-600">{title}</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">A clear, fast process</h2>
          <ol className="mt-8 space-y-6">
            <li className="rounded-2xl border border-slate-200/60 p-6 dark:border-slate-800/80"><span className="font-bold">1. Scope & Estimate</span> — 48-hour turnaround with transparent deliverables.</li>
            <li className="rounded-2xl border border-slate-200/60 p-6 dark:border-slate-800/80"><span className="font-bold">2. Design & Prototype</span> — interactive Figma and clickable demos.</li>
            <li className="rounded-2xl border border-slate-200/60 p-6 dark:border-slate-800/80"><span className="font-bold">3. Build & Iterate</span> — weekly drops, issue tracking, staged rollouts.</li>
            <li className="rounded-2xl border border-slate-200/60 p-6 dark:border-slate-800/80"><span className="font-bold">4. Launch & Support</span> — deploy, monitor, and improve with data.</li>
          </ol>
        </div>
      </section>

      <section id="pricing" className="relative py-24 bg-slate-50 dark:bg-slate-925">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Simple, honest pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ['Starter','$2k–$5k','Landing pages & marketing sites.'],
              ['Growth','$8k–$20k','Web apps, dashboards, subscriptions.'],
              ['Scale','Custom','Mobile, complex systems, integrations.']
            ].map(([tier,price,desc])=> (
              <div key={tier as string} className={`rounded-2xl ${tier==='Growth' ? 'border border-brand-600 bg-gradient-to-b from-white to-brand-50 shadow-glow dark:from-slate-900 dark:to-slate-900/40' : 'border border-slate-200/60 bg-white shadow-lg dark:border-slate-800/80 dark:bg-slate-900'} p-6`}>
                <div className="text-sm font-semibold text-brand-600">{tier}</div>
                <div className="mt-3 text-3xl font-black">{price}</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">Need something specific? We’ll scope it fast and fairly.</p>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-slate-200/60 p-8 shadow-lg dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              <Image src="/assets/logo.png" width={32} height={32} alt="Fairbyte" className="rounded-lg"/>
              <h2 className="text-2xl font-extrabold">Tell us about your project</h2>
            </div>
            <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" action="/api/contact" method="post">
              <input required placeholder="Name" className="input" name="name"/>
              <input required placeholder="Email" className="input" name="email"/>
              <input placeholder="Company" className="input sm:col-span-2" name="company"/>
              <textarea placeholder="What do you want to build?" className="input sm:col-span-2 h-32" name="details"></textarea>
              <button className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow hover:bg-brand-700 sm:w-max">Request estimate</button>
            </form>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Fairbyte. All rights reserved.</p>
        </div>
      </section>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.png" width={28} height={28} alt="Fairbyte"/>
            <div className="text-sm font-semibold">fairbyte.us</div>
          </div>
          <nav className="flex gap-6 text-sm text-slate-500">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
