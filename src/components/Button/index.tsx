import React from "react";
import './index.css';
import { useDispatch, useSelector } from "react-redux";

import { startGame } from "store/game/actions";
import { toggleTimerOn } from "store/timer/actions";
import { resetGame } from "store/game/actions";
import { resetTimer } from "store/timer/actions";
import { resetClicksCounter } from "store/counter/actions";
import { startGameGlobally } from 'store/game/actions';

import { selectTimer } from "store/timer/selectors";
import { selectGame } from "store/game/selectors";


const Button = ({ buttonText }) => {

  const dispatch = useDispatch()

const { timer } = useSelector(selectTimer)
const { cards } = useSelector(selectGame)

  const handleClick = () => {
    dispatch(startGameGlobally())
    dispatch(startGame())
    dispatch(toggleTimerOn())
    if(timer === 0 || cards.every((card) => card.isFound)) {
      dispatch(resetGame())
      dispatch(resetTimer())
      dispatch(resetClicksCounter())
    }
  }
    
  return (
    <button 
      className="timer-btn"
      onClick={handleClick}
    >
    {buttonText}
  </button>
  )
}

export default Button