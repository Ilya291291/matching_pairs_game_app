import React from "react";
import './index.css';

import { ICard } from 'types/ICard'

interface CardParams {
  card: ICard,
  handleClick: (card: ICard) => void
}

const Card: React.FC<CardParams> = ({ card, handleClick }) => {

  console.log(card)
  const isShownClassName = card.isShown ? "card-wrapper flip" : "card-wrapper"
  // const isShownClassName = "card-wrapper flip"

  const isFoundClassNameBack = card.isFound === true ? 'isFound' : ''
  const isFoundClassName = card.isFound ? 'found' : ''

  return (
    <div className={isShownClassName} onClick={() => handleClick(card)}>
      <div className={`card-inner ${isFoundClassName}`}>
        <div className="card-flip-front">
        </div>
        <div className={`card-flip-back ${isFoundClassNameBack}`}>
          {String.fromCodePoint(parseInt(card.card))}
        </div>
      </div>
    </div>
  )
}

export default Card