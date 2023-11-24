import React from "react";
import './index.css';
import { useDispatch, useSelector } from "react-redux";

import { startGame } from "store/game/actions";
import { toggleTimerOn } from "store/timer/actions";
import { resetGame } from "store/game/actions";
import { resetTimer } from "store/timer/actions";
import { resetClicksCounter } from "store/counter/actions";

import { selectTimer } from "store/timer/selectors";


const Button = ({ buttonText }) => {

  const dispatch = useDispatch()

//   const { isGameOn } = useSelector(selectGame)

const { timer } = useSelector(selectTimer)

  const handleClick = () => {
    dispatch(startGame())
    dispatch(toggleTimerOn())
    if(timer === 0) {
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