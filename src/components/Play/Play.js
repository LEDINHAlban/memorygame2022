import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { shuffleArray } from '../../utils/shuffleArray'
import * as global from '../../utils/global'

export default function Play() {
  const [cardNamesShuffle, setCardNamesShuffle] = useState([])
  const cardNames = [global.NODE_ICON, global.REACT_ICON, global.VUE_ICON]
  const AllCardNames = cardNames.concat(cardNames)
  const shuffled = shuffleArray(AllCardNames)

  useEffect(() => {
    setCardNamesShuffle(shuffled)
  }, [])

  console.log('cardNamesShuffle', cardNamesShuffle)

  return cardNamesShuffle.map((card, index) => {
    console.log('card', card)
    console.log('index', index)
    return <Card key={index} name={card} />
  })
}
