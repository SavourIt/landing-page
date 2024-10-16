"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Router } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <Navbar />
              {children}
            <Footer />   
        </Providers>
        </body>
    </html>
  )
}
