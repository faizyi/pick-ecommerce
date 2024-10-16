import Header from '@/components/HomeComponents/header/header'
import React from 'react'

export default function Userlayout({ children }) {
  return (
    <div>
        <Header/>
    <div>
      {children}
    </div>
    </div>
  )
}
