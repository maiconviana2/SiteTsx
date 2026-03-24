import React from 'react'
import Home from './pages/Home'
import CustomCursor from './components/CustomCursor/CustomCursor'
import BackToTop from './components/BackToTop/BackToTop'

export default function App() {
  return (
    <>
      <CustomCursor />
      <BackToTop />
      <Home />
    </>
  )
}
