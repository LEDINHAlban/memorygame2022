import React, { useState } from 'react'
import Play from '../../components/Play/Play'
import Button from 'react-bootstrap/Button'
import { styles } from './MemoryGame.style'

export default function MemoryGame() {
  const [endGame, setEndGame] = useState(false)
  const [tryAgain, setTryAgain] = useState(false)

  const handleTryAgain = () => {
    setTryAgain(true)
  }

  return (
    <>
      <div style={styles.play}>
        <Play setEndGame={setEndGame} tryAgain={tryAgain} setTryAgain={setTryAgain} />
      </div>
      {endGame && (
        <div>
          <h2>Vous avez gagné</h2>{' '}
          <Button variant="primary" onClick={handleTryAgain}>
            Rejouer
          </Button>
        </div>
      )}
    </>
  )
}
