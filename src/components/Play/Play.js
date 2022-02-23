import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { shuffleArray } from '../../utils/shuffleArray'
import * as global from '../../utils/global'

export default function Play() {
  const [cardNamesShuffle, setCardNamesShuffle] = useState([])
  const cardNamesShuffleTmp = [...cardNamesShuffle]
  const cardNames = [
    { name: global.NODE_ICON, flipped: false },
    { name: global.REACT_ICON, flipped: false },
    { name: global.VUE_ICON, flipped: false }
  ]
  const cardNamesCopy = JSON.parse(JSON.stringify(cardNames))
  const AllCardNames = cardNames.concat(cardNamesCopy)
  const shuffled = shuffleArray(AllCardNames)

  useEffect(() => {
    setCardNamesShuffle(shuffled)
  }, [])

  console.log('cardNamesShuffle', cardNamesShuffle)

  return cardNamesShuffle.map((el, index) => {
    return (
      <Card
        key={`${index} ${el.name}`}
        card={el}
        index={index}
        cardFlipped={(i) => {
          console.log('i', i)
          cardNamesShuffleTmp[index].flipped = true
          setCardNamesShuffle(cardNamesShuffleTmp)
        }}
      />
    )
  })
}
