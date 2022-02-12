import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { shuffleArray } from '../../utils/shuffleArray'
import * as global from '../../utils/global'
import { CardsContext } from '../../context'

export default function Play() {
  const [cardsFlipped, setCardsFlipped] = useState([])
  const cardsFlippedTmp = [...cardsFlipped]
  const [numberOfCards, setNumberOfCards] = useState([])
  const numberOfCardsTmp = [...numberOfCards]
  const cardNames = [global.NODE_ICON, global.REACT_ICON, global.VUE_ICON]
  const AllCardNames = cardNames.concat(cardNames)
  const cardNamesShuffle = shuffleArray(AllCardNames)

  const dispatchCardsEvent = (actionType, payload) => {
    switch (actionType) {
      case 'CARD_FLIPPED':
        cardsFlippedTmp.push(payload)
        setCardsFlipped(cardsFlippedTmp)
        return
      default:
        return
    }
  }

  console.log('cardsFlipped', cardsFlipped)
  useEffect(() => {
    for (let i = 0; i < cardNamesShuffle.length; i++) {
      numberOfCardsTmp.push(<Card key={i} name={cardNamesShuffle[i]} />)
      setNumberOfCards(numberOfCardsTmp)
    }
  }, [])

  useEffect(() => {
    if (cardsFlipped.length === 2) {
      // if cards names are the same
      if (cardsFlipped[0] === cardsFlipped[1]) {
        console.log('the two cards matched')
      } else {
        console.log('flip again the two cards')
      }
      setCardsFlipped([])
    }
  }, [cardsFlipped])

  console.log('cardsFlipped', cardsFlipped)
  return (
    <CardsContext.Provider value={{ dispatchCardsEvent }}>
      {numberOfCards.map((el) => el)}
    </CardsContext.Provider>
  )
}
