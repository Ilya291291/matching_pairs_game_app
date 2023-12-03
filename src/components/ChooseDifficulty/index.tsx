import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useDelayUnmount from "hooks/useDelayUnmount";
import './index.css';
import { setTimeAndSpeed } from 'store/timer/actions';
import { toggleIsDifficultyChosen } from 'store/game/actions';
import { setDifficulty } from 'store/game/actions'
import { selectGame } from "store/game/selectors";

const ChooseDifficulty = () => {

  const dispatch = useDispatch()

  const { isDifficultyChosen } = useSelector(selectGame)

  const handleChange = (event) => {
    const timeAndSpeed = event.target.value.split(', ')
    dispatch(setTimeAndSpeed(timeAndSpeed))
    dispatch(toggleIsDifficultyChosen())
    dispatch(setDifficulty(event.target.id))
  }

  const { mountedStyle, unmountedStyle } = useDelayUnmount()

  const style = isDifficultyChosen ? mountedStyle : unmountedStyle

  return (
    <div className="difficulty-wrapper" style={style}>
        <div className="difficulty-text">
            Выберите уровень сложности
        </div>
        <div className="input-wrapper">
                <div className="single-input-wrapper">
                    <input type="radio" name="difficulty" id="easy" value="60, 500" className="difficulty-radiobutton" onChange={handleChange}/>
                    <label htmlFor="easy" className="difficulty-label">Начальный</label>
                </div>
                <div className="single-input-wrapper">
                    <input type="radio" name="difficulty" id="normal" value="45, 400" className="difficulty-radiobutton" onChange={handleChange}/>
                    <label htmlFor="normal" className="difficulty-label">Средний</label>
                </div>
                <div className="single-input-wrapper">
                    <input type="radio" name="difficulty" id="hard" value="30, 300" className="difficulty-radiobutton" onChange={handleChange}/>
                    <label htmlFor="hard" className="difficulty-label">Хард</label>
                </div>
        </div>
    </div>
  )
}

export default ChooseDifficulty