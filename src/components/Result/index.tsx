import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './index.css';

import { selectTimer } from "store/timer/selectors";
import { selectCounter } from "store/counter/selectors";
import { selectGame } from "store/game/selectors";


const Result = () => {
  // const dispatch = useDispatch()

  const { timer } = useSelector(selectTimer)
  const { counter } = useSelector(selectCounter)
  const { cards } = useSelector(selectGame)

  const timerResultText = timer > 0 ? 60 - timer : timer
  const foundPairsText = cards.filter((card) => card.isFound) ? cards.filter((card) => card.isFound).length / 2 : 0

  return (
    <div className="result-wrapper">
        <span className="result-text">{String.fromCodePoint(0x1F44F)} Твой результат {String.fromCodePoint(0x1F44F)}</span>
        <div className="timer-counter">Клики : {counter}</div>
        <div className="timer">Время : {timerResultText}</div>
        <div className="pairs-result">Найдено : {foundPairsText}</div>
    </div>
  )
}

export default Result