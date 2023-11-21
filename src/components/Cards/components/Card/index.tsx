import { stringify } from "querystring";
import React from "react";
import './index.css'

const Card = ({ card, handleClick }) => {
  return (
    <div className={card.isShown ? "card-wrapper flip" : "card-wrapper"} onClick={() => handleClick(card)}>
      <div className="card-inner">
        <div className="card-flip-front">
        </div>
        <div className="card-flip-back">
          {String.fromCodePoint(card.card)}
        </div>
      </div>
    </div>
  )
}

export default Card