import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import './index.css';

import Card from "./components/Card";


import { finishGame, toggleCards } from "store/game/actions";
import { findMatches } from "store/game/actions";
import { findChoiceOne, findChoiceTwo } from "store/game/actions";
import { resetPair } from "store/game/actions";
import { setClicksToFindMatch } from "store/game/actions";
import { incrementClicksToMatch } from 'store/game/actions';

import { counterIncrement } from "store/counter/actions";

import { selectGame } from "store/game/selectors";
import { selectTimer } from "store/timer/selectors";
import { ICard } from "types/ICard";

interface CardsParams {
  onOpen: () => void
}

const Cards: React.FC<CardsParams> = ({ onOpen }) => {

  const dispatch = useDispatch()

  const {
    isGameOn, 
    cards, 
    choice1, 
    choice2,
    difficulty
  } = useSelector(selectGame)

  const { speed } = useSelector(selectTimer)

  const handleClick = (card: ICard): void => {
    if(isGameOn) {
      if (!choice1) {
        if(difficulty === 'hard') {
          dispatch(incrementClicksToMatch())
          dispatch(setClicksToFindMatch())
          dispatch(toggleCards(card.id))
          dispatch(findChoiceOne(card.card, card.id))
          dispatch(counterIncrement())
        }else {
          dispatch(toggleCards(card.id))
          dispatch(findChoiceOne(card.card, card.id))
          dispatch(counterIncrement())  
        }
      }else if(choice1 && !choice2) {
        if(difficulty === 'hard') {
          dispatch(incrementClicksToMatch())
          dispatch(setClicksToFindMatch())
          dispatch(toggleCards(card.id))
          dispatch(findChoiceTwo(card.card, card.id))
          dispatch(counterIncrement())
        }else {
          dispatch(toggleCards(card.id))
          dispatch(findChoiceTwo(card.card, card.id))
          dispatch(counterIncrement())   
        }
      }
    }
  }

// console.log(clicksToFindMatch)

  useEffect(() => {
    if(isGameOn) {
      if(difficulty === 'hard') {
        dispatch(setClicksToFindMatch())
      }
      if(choice1?.choice && choice2?.choice) {
        
        if(choice1.choice === choice2.choice && choice1.id !== choice2.id) {
          setTimeout(() => dispatch(findMatches()), speed)
          setTimeout(() => dispatch(resetPair()), speed)
        }else {
          setTimeout(() => dispatch(resetPair()), speed)
        }
      }else if(cards?.every((card) => card.isFound)) {
        setTimeout(() => dispatch(finishGame()))
        setTimeout(() => onOpen(), 1000)
      }
    }
  }, [dispatch, choice1, choice2, difficulty])

  return (
    <div className="cards_wrapper">
        {cards?.map((card) => (
          <Card 
            key={card.id} 
            card={card} 
            handleClick={handleClick}
          />
        ))}
    </div>
  )
}

export default Cards