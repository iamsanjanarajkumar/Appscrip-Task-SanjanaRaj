import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Discover from './components/Discover'
import FilterItems from './components/FilterItems'
import ProductsDisplay from './components/ProductsDisplay'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     <Navigation/>
     <Discover/>
     <FilterItems/>
     <ProductsDisplay/>
     <Footer/>
    </div>
  )
}

export default App
