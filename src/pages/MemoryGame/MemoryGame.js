import React, { useState } from 'react'
import Play from '../../components/Play/Play'
import Button from 'react-bootstrap/Button'

export default function MemoryGame() {
  const [endGame, setEndGame] = useState(false)
  const [tryAgain, setTryAgain] = useState(false)

  const handleTryAgain = () => {
    setTryAgain(true)
  }

  return (
    <>
      <Play setEndGame={setEndGame} tryAgain={tryAgain} setTryAgain={setTryAgain} />
      {endGame && (
        <>
          <h1>Vous avez gagné</h1>{' '}
          <Button variant="primary" onClick={handleTryAgain}>
            Rejouer
          </Button>
        </>
      )}
    </>
  )
}
