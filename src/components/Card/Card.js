import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import './Card.css'
import * as global from '../../utils/global'
import reactIcon from '../../assets/deck/reactIcon.png'
import vueIcon from '../../assets/deck/vueIcon.png'
import nodeIcon from '../../assets/deck/nodeIcon.png'

export default function Card({ name }) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }

  let cardName
  switch (name) {
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
  if (clicked) {
    return (
      <>
        <Button className="card">
          <img className="card-logo" src={cardName} alt="Logo" />
        </Button>
      </>
    )
  } else {
    return (
      <>
        <Button className="card" onClick={() => handleClick()}></Button>
      </>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired
}
