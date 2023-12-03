import React from "react";
import './index.css';

import { ICards } from 'types/ICard'

interface CardParams {
  card: ICards,
  handleClick: () => void
}

const Card: React.FC<CardParams> = ({ card, handleClick }) => {

  const isShownClassName = card.isShown ? "card-wrapper flip" : "card-wrapper"
  // const isShownClassName = "card-wrapper flip"

  const isFoundClassNameBack = card.isFound === true ? 'isFound' : ''
  const isFoundClassName = card.isFound ? 'found' : ''

  return (
    <div className={`${isShownClassName}`} onClick={() => handleClick(card)}>
      <div className={`card-inner ${isFoundClassName}`}>
        <div className="card-flip-front">
        </div>
        <div className={`card-flip-back ${isFoundClassNameBack}`}>
          {String.fromCodePoint(card.card)}
        </div>
      </div>
    </div>
  )
}

export default Card