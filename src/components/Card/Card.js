import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import * as global from '../../utils/global'
import { styles } from './Card.style'

// icons
import reactIcon from '../../assets/deck/reactIcon.png'
import vueIcon from '../../assets/deck/vueIcon.png'
import nodeIcon from '../../assets/deck/nodeIcon.png'

export default function Card({ card, cardHasFlipped }) {
  const handleClick = () => {
    cardHasFlipped()
  }

  let cardName
  switch (card.name) {
    case global.NODE_ICON:
      cardName = nodeIcon
      break
    case global.REACT_ICON:
      cardName = reactIcon
      break
    case global.VUE_ICON:
      cardName = vueIcon
      break
    default:
      break
  }

  if (card.flipped === true) {
    return (
      <>
        <Button style={styles.card} variant="light">
          <img style={styles.icon} src={cardName} alt="Logo" />
        </Button>
      </>
    )
  } else {
    return (
      <>
        <Button style={styles.card} variant="light" onClick={() => handleClick()}></Button>
      </>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  cardHasFlipped: PropTypes.func.isRequired
}
