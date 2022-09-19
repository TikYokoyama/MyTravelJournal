import React from 'react'

import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {

  const cards = data.map(item => {
    return (
      <section key={item.id}>
        <Card 
          item={item}
        />
        <hr></hr>
      </section>
    )
  })

  return (
    <div className="App">
      <Navbar />  
      <main className="cards-list">
        {cards}
      </main>
    </div>
  );
}

