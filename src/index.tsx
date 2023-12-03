import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './store';
import App from './components/App';
import './index.css';
import { store, persistor } from 'store/index'
import { PersistGate } from 'redux-persist/integration/react';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
