"use client"

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import RestaurantFeatures from '../../components/restaurants/RestaurantFeatures'
import RestaurantStatistics from '../../components/restaurants/RestaurantStatistics'
import React from 'react'

function Page() {
  return (
    <main>
      <Navbar />
      <RestaurantFeatures />
      <RestaurantStatistics />
      <Footer />
    </main>
  )
}

export default Page