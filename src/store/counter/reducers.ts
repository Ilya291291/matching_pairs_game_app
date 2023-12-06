import { AnyAction } from "@reduxjs/toolkit"
import { ICounter } from "./types"

const initialState = {
  counter: 0,
}

const counterReducer = (state: ICounter = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'counter/counterIncrement':
    return {
      ...state,
      counter: state.counter + 1
    }
    case 'counter/resetClicksCounter':
      return {
        ...state,
        counter: 0
      }
    default:
      return state
  }
}

export default counterReducer