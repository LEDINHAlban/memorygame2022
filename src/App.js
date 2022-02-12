import React, { useState, useEffect } from 'react'
import './App.css'
import Play from './components/Play/Play'

function App() {
  return (
    <div className="App">
      <Play numberOfIcons={3} />
    </div>
  )
}

export default App
