import { createStore, combineReducers, applyMiddleware } from 'redux';
import gameReducer from './game/reducers';
import timerReducer from './timer/reducers';
import counterReducer from './counter/reducers';
import themeReducer from './theme/reducers';
import { persistReducer , persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  themeReducer,
  gameReducer,
  timerReducer,
  counterReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()))

const persistor = persistStore(store)

export { store, persistor }
