"use client"
import Header from '@/components/HomeComponents/header/header'
import React from 'react'
import { Provider } from 'react-redux'
import {store} from "../../../src/redux/configStore"
import Footer from '@/components/HomeComponents/Footer/Footer'
export default function Userlayout({ children }) {
  return (
    <Provider store={store}>
    <div>
        <Header/>
    <div>
      {children}
    </div>
    <Footer/>
    </div>
    </Provider>
  )
}
