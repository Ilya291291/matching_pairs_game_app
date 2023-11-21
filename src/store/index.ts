import { createStore, combineReducers  } from 'redux';
import gameReducer from './game/reducers';

const rootReducer = combineReducers({
  gameReducer
})

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
export const store = createStore(rootReducer)
