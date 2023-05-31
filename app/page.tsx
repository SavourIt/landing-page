"use client"

import { Inter } from 'next/font/google'
import HeroSection from '../components/HeroSection'
import Contact from '../components/Contact'
import Features from '../components/Features'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Contact />
    </main>
  )
}
