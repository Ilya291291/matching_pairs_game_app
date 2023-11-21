import React, { useState, useEffect } from "react";
import './index.css';
import Card from "./components/Card";
import { shuffleCards } from 'utils/shuffleCards'
import { duplicateCards } from 'utils/duplicateCards'

import { toggleCards } from "store/game/actions";
import { findMatches } from "store/game/actions";
import { findChoiceOne, findChoiceTwo } from "store/game/actions";
import { resetPair } from "store/game/actions";

import { useDispatch, useSelector } from "react-redux";
import { selectGame } from "store/game/selectors";


const Cards = () => {

  const dispatch = useDispatch()
  const { 
    cards, 
    choice1, 
    choice2 
  } = useSelector(selectGame)

  const handleClick = (card) => {
      if (!choice1) {
        dispatch(toggleCards(card.id))
        dispatch(findChoiceOne(card.card, card.id))
      }else if(choice1 && !choice2) {
        dispatch(toggleCards(card.id))
        dispatch(findChoiceTwo(card.card, card.id)) 
    }
  }
  useEffect(() => {
    if(choice1?.choice && choice2?.choice) {
      if(choice1.choice === choice2.choice && choice1.id !== choice2.id) {
        dispatch(findMatches())
        setTimeout(() => dispatch(resetPair()),1000)
        //plus count + 1 for the timer
      }else {
        setTimeout(() => dispatch(resetPair()),1000)
      }
    }
    console.log(cards)
  }, [choice1, choice2])


  return (
    <div className="cards_wrapper">
        {cards.map((card) => (
          <Card 
            key={card.id} 
            card={card} 
            handleClick={handleClick}
          />
        ))}
        {/* <button onClick={handleShuffle}>shuffle cards</button> */}
    </div>
  )
}

export default Cards