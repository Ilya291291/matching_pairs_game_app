import { AnyAction, nanoid } from "@reduxjs/toolkit"
import { IGame } from "./types";
import { SMILES_ARRAY } from "fixtures/SMILES_ARRAY";
import { shuffleCards } from "utils/shuffleCards";


const initialState = {
  gameGlobalStart: false,
  isGameOn: false,
  cards: shuffleCards(SMILES_ARRAY).map((card) => ({
    card,
    id: nanoid(),
    isShown: false,
    isFound: false
})),
  choice1: null,
  choice2: null,
  clicksToFindMatch: 0,
  foundPairs: [],
  difficulty: 'easy',
  isDifficultyChosen: false
}

const gameReducer = (state: IGame = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'game/startGameGlobally':
      return {
        ...state,
        gameGlobalStart: true
      }
    case 'game/startGame':
      return {
        ...state,
        isGameOn: true
      }
    case 'game/finishGame':
      return {
        ...state,
        isGameOn: false,
      }
    case 'game/resetGame':
      return {
        ...state,
        isGameOn: true,
        cards: shuffleCards(SMILES_ARRAY).map((card) => ({
          card,
          id: nanoid(),
          isShown: false,
          isFound: false
        })),
        gameGlobalStart: false,
        isDifficultyChosen: false
      }
    case 'game/toggleCards':
        const id : string = action.payload
        return {
          ...state,
          cards: state.cards?.map((card) => {
            if(card.id === id && !card.isFound) {
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
        cards: state.cards?.map((card) => {
          return card.isFound ? card : {...card, isShown: false}
        }),
        choice1: null,
        choice2: null
      }
    case 'game/findMatches' :
        return {
          ...state,
          cards: state.cards?.map((card) => {
            if(card.card === state.choice1?.choice || card.card === state.choice2?.choice) {
              return {...card, isFound: true, isShown: true}
            }else {
              return card
            }
          })
        }

    case 'game/incrementClicksToMatch': {
      return {
        ...state,
        clicksToFindMatch: state.clicksToFindMatch + 1
      }
    }
    case 'game/setDifficulty': {
      return {
        ...state,
        difficulty: action.payload
      }
    }
    case 'game/toggleIsDifficultyChosen':
      return {
        ...state,
        isDifficultyChosen: true
      }

    case 'game/setClicksToFindMatch':
      const clickedCards = state.cards?.filter((card) => card?.isFound);
      if(clickedCards!.length % 2 === 0) {
        if(state.foundPairs.length !== clickedCards!.length) {
          return {
            ...state,
            clicksToFindMatch: 0,
            foundPairs: clickedCards,
          }
        }
      }
      if(state.clicksToFindMatch > 8 && clickedCards!.length !== 0) {
        return {
          ...state,
          cards: state.cards!.map((card) => ({...card, isShown: false, isFound: false})),
          clicksToFindMatch: 0,
        }
      }                
      return state
    default:
      return state
  }
}

export default gameReducer