import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';

import RootReducer from '../reducers/RootReducer';

export const history = createHistory();

function configureStoreProd(initialState) {
  const middlewares = [
    thunk,
    routerMiddleware(history),
  ];

  return createStore(RootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    ),
  );
}

function configureStoreDev(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
    routerMiddleware(history),
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(RootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
    ),
  );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
