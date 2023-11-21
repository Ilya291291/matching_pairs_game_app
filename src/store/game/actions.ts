import { nanoid } from "nanoid"

export const createCards = () => {
  return {
    type: 'game/createCards'
  }
}

export const shuffleCards = () => {
  return {
    type: 'game/shuffleCards',
  }
}

export const toggleCards = (card) => {
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

export const findChoiceOne = (item, id) => {
  return {
    type: 'game/findChoiceOne',
    payload: { item, id }
  }
}

export const findChoiceTwo = (item, id) => {
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