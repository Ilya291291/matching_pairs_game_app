const initialState = {
  speed: 500,
  timer: 60,
  isTimerOn: false,
  isDifficultyChosen: false,
  difficulty: 'easy'
}

const timerReducer = (state = initialState, action) => {
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
    // case 'timer/setDifficulty': {
    //   return {
    //     ...state,
    //     difficulty: action.payload
    //   }
    // }
    // case 'timer/toggleIsDifficultyChosen':
    //   return {
    //     ...state,
    //     isDifficultyChosen: true
    //   }
    default:
      return state
  }
}

export default timerReducer