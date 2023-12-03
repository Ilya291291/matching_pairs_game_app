import React, { useEffect } from "react";
import './index.css';
import { useDispatch, useSelector } from "react-redux";

import { selectTimer } from "store/timer/selectors";
import { selectCounter } from "store/counter/selectors";
import { selectGame } from "store/game/selectors";

import { startTimer } from "store/timer/actions";
import { finishGame } from "store/game/actions";
import { timeIsUp } from "store/timer/actions";

import Button from "components/Button";

const Timer = ({ onOpen }) => {

  const dispatch = useDispatch()

  const { timer, isTimerOn, isDifficultyChosen } = useSelector(selectTimer)
  const { counter } = useSelector(selectCounter)
  const { isGameOn, cards } = useSelector(selectGame)

  useEffect(() => {
    if(isTimerOn && isGameOn) {
      let ticking = setInterval(() => dispatch(startTimer()), 1000)
      if(timer === 0 || cards.every((card) => card.isFound)) {
        dispatch(finishGame())
        dispatch(timeIsUp())
        setTimeout(() => onOpen(), 500)
        clearInterval(ticking)
      }
      return () => clearInterval(ticking)
    }

  }, [dispatch, isTimerOn, timer])

  const timerText = isTimerOn ? timer : ''
  const counterText = isTimerOn ? counter : ''

  const buttonText = timer === 0 || cards.every((card) => card.isFound) ? 'Молоток, зацени свой результат. Рестарт' 
  : isTimerOn ? 'Дерзай' : 'Начать игру'

  return (
    <div className="timer-wrapper">
        <div className="timer">Таймер {timerText}</div>
        <Button buttonText={buttonText}/>
        <div className="timer-counter">Клики {counterText}</div>
    </div>
  )
}

export default Timer