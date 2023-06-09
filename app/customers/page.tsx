"use client"

import CustomerFeatures from '@/components/customers/CustomerFeatures'
import ComingSoon from '../../components/ComingSoon'
import React from 'react'
import CustomerPerks from '@/components/customers/CustomerPerks'

function Page() {
  return (
    <main>
      <CustomerFeatures />
      <CustomerPerks />
    </main>
  )
}

export default Page