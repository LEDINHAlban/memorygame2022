import React from 'react'
import Card from '../Card/Card'
import { shuffleArray } from '../../utils/shuffleArray'
import * as global from '../../utils/global'

export default function Play() {
  const numberOfCards = []
  const cardNames = [global.NODE_ICON, global.REACT_ICON, global.VUE_ICON]
  const AllCardNames = cardNames.concat(cardNames)
  const cardNamesShuffle = shuffleArray(AllCardNames)

  for (let i = 0; i < cardNamesShuffle.length; i++) {
    numberOfCards.push(<Card key={i} name={cardNamesShuffle[i]} />)
  }
  return numberOfCards.map((el) => el)
}
