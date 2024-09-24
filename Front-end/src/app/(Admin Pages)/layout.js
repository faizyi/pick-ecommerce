import React from 'react'
import AdminPage from './admin/page'
export default function Pageslayout({ children }) {
  return (
    <div className=''>
      <AdminPage/>
      <div>
        {children}
      </div>
    </div>
  )
}
