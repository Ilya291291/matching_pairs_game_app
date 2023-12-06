import React from "react";
import { useSelector } from "react-redux";
import './index.css';

import Button from "components/Button";
import { selectGame } from "store/game/selectors";

import useDelayUnmount from "hooks/useDelayUnmount";

const StartGame = () => {

  const { gameGlobalStart } = useSelector(selectGame)

  const { mountedStyle, unmountedStyle } = useDelayUnmount()

  const style:{animation: string} = gameGlobalStart ? mountedStyle : unmountedStyle

   return (
    <div className="start-game" style={style}>
      <span className="start-game-name">Игра на совпадение пар</span>
      <span className="start-game-text">Нажми на кнопку, чтобы начать </span>
      <Button 
        buttonText="Тык вот сюда"
      /> 
    </div>
  )
}

export default StartGame