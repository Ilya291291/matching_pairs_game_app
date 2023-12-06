import { ITimer } from "./types"

export const selectTimer = (state: { timerReducer: ITimer }) => state.timerReducer