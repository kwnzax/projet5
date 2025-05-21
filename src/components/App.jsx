import { useState } from 'react'
import Header from './Header'
import Card from './card'
import Footer from './Footer'
import '../css/App.css'

function App() {
    return (
      <div>
        <Header />
        <div>
          <p>Chez vous, partout et ailleurs</p> 
        </div>
        <div>
          <Card/>
        </div>
        <Footer />
      </div>
      
    )
}

export default App
