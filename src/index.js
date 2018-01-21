import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Persist Redux state in localStorage
const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk, promiseMiddleware))
);

// Save Redux state in localStorage on state change
store.subscribe(() => {
  saveState({ emailSubmitted: store.getState().emailSubmitted });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
