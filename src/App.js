import React from 'react'
import MemoryGame from './pages/MemoryGame/MemoryGame'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const styles = {
  padding: {
    padding: '5%'
  }
} 

function App() {
  return (
    <div className="App">
      <h1 style={styles.padding}>Projet MemoryGame 23/02/2022</h1>
      <div>
        <MemoryGame />
      </div>
      <footer style={styles.padding}>Alban Le Dinh Ingénieur web développeur</footer>
    </div>
  )
}

export default App
