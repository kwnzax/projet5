import { useState } from 'react'
import Header from './Header'
import data from '../datas/logements.json'
import Card from './card'
import Footer from './Footer'
import '../css/App.css'

function App() {
    return (
      <div>
        <Header />
        <div>
          <h1>Chez vous, partout et ailleurs</h1> 
        </div>
        <div className='cardContainer'>
          {data.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
        <Footer />
      </div>
      
    )
}

export default App
