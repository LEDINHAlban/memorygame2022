import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import { shuffleArray } from '../../utils/shuffleArray'
import * as global from '../../utils/global'

export default function Play({ setEndGame, tryAgain, setTryAgain }) {
  const [cardNamesShuffle, setCardNamesShuffle] = useState([])
  const lastTwoCardsFlipped = useRef([])
  const cardNamesShuffleTmp = [...cardNamesShuffle]
  const cardNames = [
    { name: global.NODE_ICON, flipped: false },
    { name: global.REACT_ICON, flipped: false },
    { name: global.VUE_ICON, flipped: false }
  ]
  const cardNamesCopy = JSON.parse(JSON.stringify(cardNames))
  const AllCardNames = cardNames.concat(cardNamesCopy)
  const shuffled = shuffleArray(AllCardNames)
  for (let i = 0; i < shuffled.length; i++) {
    shuffled[i].index = i
  }

  useEffect(() => {
    setCardNamesShuffle(shuffled)
    setTryAgain(false)
  }, [tryAgain])

  useEffect(() => {
    if (lastTwoCardsFlipped.current[0] && lastTwoCardsFlipped.current[1]) {
      if (lastTwoCardsFlipped.current[0].name !== lastTwoCardsFlipped.current[1].name) {
        cardNamesShuffleTmp[lastTwoCardsFlipped.current[0].index].flipped = false
        cardNamesShuffleTmp[lastTwoCardsFlipped.current[1].index].flipped = false
        setTimeout(() => setCardNamesShuffle(cardNamesShuffleTmp), 1000)
      }
      lastTwoCardsFlipped.current = []
    }
    const isWin = cardNamesShuffle.every((curr) => curr.flipped === true)
    setEndGame(isWin)
  }, [cardNamesShuffle])

  return cardNamesShuffle.map((el, index) => {
    return (
      <Card
        key={`${index} ${el.name}`}
        card={el}
        index={index}
        cardHasFlipped={() => {
          cardNamesShuffleTmp[index].flipped = true
          setCardNamesShuffle(cardNamesShuffleTmp)
          lastTwoCardsFlipped.current.push(cardNamesShuffleTmp[index])
        }}
      />
    )
  })
}

Play.propTypes = {
  setEndGame: PropTypes.func.isRequired,
  tryAgain: PropTypes.bool.isRequired,
  setTryAgain: PropTypes.func.isRequired
}
