import { combineReducers, compose } from 'redux'

import * as reducers from './_reducers.register'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

/* eslint-disable no-underscore-dangle */
export const createRootReducer = (asyncReducers) => combineReducers({
  ...reducers,
  ...asyncReducers,
  composeEnhancers
});
/* eslint-enable */

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(createRootReducer(store.asyncReducers))
};

export default createRootReducer
