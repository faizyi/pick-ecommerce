"use client"
import "./admin.css"
import React from 'react'
import AdminPage from './admin/page'
import { Provider } from 'react-redux'
import {store} from "../../../src/redux/configStore"
export default function Pageslayout({ children }) {
  return (
    <Provider store={store}>
    <div className=''>
      <AdminPage/>
      <div>
        {children}
      </div>
    </div>
    </Provider>
  )
}
