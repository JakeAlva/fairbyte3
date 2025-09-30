import './styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fairbyte — Advanced Web & App Studio',
  description: 'Fairbyte builds modern, high-performance websites and apps.',
  icons: { icon: '/assets/logo.png' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
