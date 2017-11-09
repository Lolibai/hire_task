import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './createRootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

export default (history, initialState = {}) => {

  const middleware = [
    sagaMiddleware,
  ]

  const store = createStore(
    createRootReducer(),composeWithDevTools(
      applyMiddleware(...middleware)
    )
  )

  store.runSaga = sagaMiddleware.run
  store.asyncReducers = {}

  return store
}
