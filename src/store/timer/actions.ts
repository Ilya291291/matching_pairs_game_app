export const startTimer = () => {
  return {
    type: 'timer/startTimer'
  }
}

export const toggleTimerOn = () => {
  return {
    type: 'timer/toggleIsTimerOn'
  }
}

export const timeIsUp = () => {
  return {
    type: 'timer/timeIsUp'
  }
}

export const resetTimer = () => {
  return {
    type: 'timer/resetTimer'
  }
}

export const setTimeAndSpeed = (arrayOfVals: string[]) => {
  return {
    type: 'timer/setTimeAndSpeed',
    payload: arrayOfVals
  }
}