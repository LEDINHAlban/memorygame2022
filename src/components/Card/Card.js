import React from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import './Card.css'
import * as global from '../../utils/global'
import reactIcon from '../../assets/deck/reactIcon.png'
import vueIcon from '../../assets/deck/vueIcon.png'
import nodeIcon from '../../assets/deck/nodeIcon.png'

export default function Card({ name }) {
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
  return (
    <>
      <Button className="card" onClick={() => console.log('toto')}>
        <img className="card-logo" src={cardName} alt="Logo" />
      </Button>
    </>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired
}
