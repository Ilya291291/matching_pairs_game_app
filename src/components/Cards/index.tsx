import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import './index.css';

import Card from "./components/Card";

import { shuffleCards } from 'utils/shuffleCards'
import { duplicateCards } from 'utils/duplicateCards'

import { toggleCards } from "store/game/actions";
import { findMatches } from "store/game/actions";
import { findChoiceOne, findChoiceTwo } from "store/game/actions";
import { resetPair } from "store/game/actions";

import { counterIncrement } from "store/counter/actions";

import { selectGame } from "store/game/selectors";


const Cards = () => {

  const dispatch = useDispatch()

  const {
    isGameOn, 
    cards, 
    choice1, 
    choice2 
  } = useSelector(selectGame)

  const handleClick = (card) => {
    if(isGameOn) {
      if (!choice1) {
        dispatch(toggleCards(card.id))
        dispatch(findChoiceOne(card.card, card.id))
        dispatch(counterIncrement())
      }else if(choice1 && !choice2) {
        dispatch(toggleCards(card.id))
        dispatch(findChoiceTwo(card.card, card.id))
        dispatch(counterIncrement()) 
      }
    }
  }
  console.log(cards)
  useEffect(() => {
    if(isGameOn) {
      if(choice1?.choice && choice2?.choice) {
        if(choice1.choice === choice2.choice && choice1.id !== choice2.id) {
          setTimeout(() => dispatch(findMatches()), 500)
          setTimeout(() => dispatch(resetPair()), 500)
          //plus count + 1 for the timer
        }else {
          setTimeout(() => dispatch(resetPair()), 500)
        }
      }
    }
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