import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './index.css';

import Button from "components/Button";
import { selectGame } from "store/game/selectors";

import useDelayUnmount from "hooks/useDelayUnmount";

const StartGame = () => {

  const { gameGlobalStart } = useSelector(selectGame)

  // const mountedStyle = { animation: "inAnimation 750ms ease-in" };

  // const unmountedStyle = {

  //   animation: "outAnimation 770ms ease-out",

  //   animationFillMode: "forwards"

  // }

  // const style = gameGlobalStart ? mountedStyle : unmountedStyle

  const { mountedStyle, unmountedStyle } = useDelayUnmount()

  const style = gameGlobalStart ? mountedStyle : unmountedStyle

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