import { nanoid } from "@reduxjs/toolkit"
import Card from "components/Cards/components/Card"
import { SHUFFLED_SMILES_ARRAY } from "fixtures/SMILES_ARRAY"


const initialState = {
  isGameOn: false,
  difficulty: {
    easy: 8,
    normal: '',
    hard: ''
  },
  cards: SHUFFLED_SMILES_ARRAY.map((card) => ({
    card,
    id: nanoid(),
    isShown: false,
    // isFound: false
})),
  choice1: null,
  choice2: null
}

const gameReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'game/startGame':
      return {
        ...state,
        isGameOn: true
      }
    case 'game/finishGame':
      return {
        ...state,
        isGameOn: false
      }
    case 'game/resetGame':
      return {
        ...state,
        isGameOn: true,
        cards: state.cards.map((card) => (
          // {...card, isShown: false, isFound: false}
          {...card, isShown: false}
        ))
      }
    case 'game/toggleCards':
      return {
        ...state,
        cards: state.cards.map((card) => {
          if(card.id === action.payload && !card.isFound) {
            // return {...card, isShown: !card.isShown, isFound: false}
            return {...card, isShown: !card.isShown}
          }
          return card
        }),
      }
    case 'game/findChoiceOne':
      return {
        ...state,
        choice1: {choice: action.payload.item, id: action.payload.id}
      }
    case 'game/findChoiceTwo': 
      return {
        ...state,
        choice2: {choice: action.payload.item, id: action.payload.id}
      }
    case 'game/resetPair':
      return {
        ...state,
        cards: state.cards.map((card) => {
          return card.isFound ? card : {...card, isShown: false}
        }),
        choice1: null,
        choice2: null
      }
    case 'game/findMatches' :
      return {
        ...state,
        cards: state.cards.map((card) => {
          if(card.card === state.choice1?.choice || card.card === state.choice2?.choice) {
            return {...card, isFound: true, isShown: true}
          }else {
            return card
            // return {...card, isFound: false}
            // return { ...card, isFound: false, isShown: true };
          }
        }),
      }
    default:
      return state
  }
}

export default gameReducer