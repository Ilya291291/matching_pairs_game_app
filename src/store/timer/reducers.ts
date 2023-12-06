import { ITimer } from './types';
import { AnyAction } from '@reduxjs/toolkit';

const initialState = {
  speed: 500,
  timer: 60,
  isTimerOn: false,
  isDifficultyChosen: false,
  difficulty: 'easy'
}

const timerReducer = (state: ITimer = initialState, action : AnyAction) => {
  switch(action.type) {
    case 'timer/startTimer':
    return {
      ...state,
      timer: state.timer -= 1,
    }
    case 'timer/toggleIsTimerOn':
    return {
      ...state,
      isTimerOn: true
    }
    case 'timer/timeIsUp':
      return {
        ...state,
        isTimerOn: false
      }
    case 'timer/resetTimer':
      return {
        ...state,
        timer: initialState.timer
      }
    case 'timer/setTimeAndSpeed':
      const [timeOfGame, speedOfTurning] = action.payload
      return {
        ...state,
        timer: Number(timeOfGame),
        speed: Number(speedOfTurning)
      }
    default:
      return state
  }
}

export default timerReducer