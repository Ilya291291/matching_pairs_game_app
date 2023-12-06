import { ICounter } from "./types"

export const selectCounter = (state: { counterReducer: ICounter }) => state.counterReducer