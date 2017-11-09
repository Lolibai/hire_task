import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './models/store'
import rootSaga from './models/saga'
import App from './containers/main'
import './index.css';

const store = createStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)