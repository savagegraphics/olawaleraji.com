import type React from 'react'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Providers } from './providers'
import { MobileNav } from '@/components/mobile-nav'
import { BackToTop } from '@/components/back-to-top'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'T. Olawale RAJI | Frontend Developer',
  description:
    'Frontend developer specializing in React, TypeScript, Next.js, and Tailwind CSS'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileNav />
          <BackToTop />
        </Providers>
      </body>
    </html>
  )
}
