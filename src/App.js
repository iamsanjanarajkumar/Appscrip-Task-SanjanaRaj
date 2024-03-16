import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Discover from './components/Discover'
import FilterItems from './components/FilterItems'
import ProductsDisplay from './components/ProductsDisplay'

const App = () => {
  return (
    <div>
     <Navigation/>
     <Discover/>
     <FilterItems/>
     <ProductsDisplay/>
    </div>
  )
}

export default App
