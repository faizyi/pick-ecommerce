import Footer from '@/components/Footer'
import Header from '@/components/header/header'
import React from 'react'
export default function Pageslayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
