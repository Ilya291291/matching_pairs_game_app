import { createStore, combineReducers  } from 'redux';
import gameReducer from './game/reducers';
import timerReducer from './timer/reducers';
import counterReducer from './counter/reducers';

const rootReducer = combineReducers({
  gameReducer,
  timerReducer,
  counterReducer
})

export const store = createStore(rootReducer)
