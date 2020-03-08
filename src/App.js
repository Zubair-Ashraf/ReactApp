import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services/services'
import Products from './components/products/products'
import Team from './components/team'
import Themes from './components/Themes/Themes'
import Packages from './components/packages/packages'
import Blogs from './components/blogs'
import Footer from './components/footer'

function App () {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Services />
      <Team />
      <Themes />
      <Packages />
      <Blogs/>
      <Footer/>
    </>
  )
}

export default App
