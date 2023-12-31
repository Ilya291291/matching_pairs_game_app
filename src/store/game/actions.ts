
export const startGameGlobally = () => {
  return {
    type: 'game/startGameGlobally'
  }
}

export const startGame = () => {
  return {
    type: 'game/startGame'
  }
}

export const finishGame = () => {
  return {
    type: 'game/finishGame'
  }
}

export const resetGame = () => {
  return {
    type: 'game/resetGame',
  }
}

export const shuffleCards = () => {
  return {
    type: 'game/shuffleCards',
  }
}

export const toggleCards = (card : string) : {type: string, payload: string} => {
  return {
    type: 'game/toggleCards',
    payload: card
  }
}


export const findMatches = () => {
  return {
    type: 'game/findMatches',
  }
}

export const findChoiceOne = (item : string, id : string): {type: string, payload: {item:string, id: string}} => {
  return {
    type: 'game/findChoiceOne',
    payload: { item, id }
  }
}

export const findChoiceTwo = (item : string, id : string) => {
  return {
    type: 'game/findChoiceTwo',
    payload: { item, id }
  }
}

export const resetPair = () => {
  return {
    type: 'game/resetPair',
  }
}

export const setClicksToFindMatch = () => {
  return {
    type: 'game/setClicksToFindMatch'
  }
}

export const incrementClicksToMatch = () => {
  return {
    type: 'game/incrementClicksToMatch'
  }
}

export const toggleIsDifficultyChosen = () => {
  return {
    type: 'game/toggleIsDifficultyChosen'
  }
}

export const setDifficulty = (difficulty : string) => {
  return {
    type: 'game/setDifficulty',
    payload: difficulty
  }
}