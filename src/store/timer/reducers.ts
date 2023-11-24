const initialState = {
  timer: 30,
  isTimerOn: false
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
    default:
      return state
  }
}

export default timerReducer