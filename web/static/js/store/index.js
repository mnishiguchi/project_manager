import { browserHistory }               from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware }             from 'react-router-redux'
import thunkMiddleware                  from 'redux-thunk'
import createLogger                     from 'redux-logger'

import reducers from '../reducers'

const loggerMiddleware = createLogger({ level: 'info', collapsed: true })

const middlewares = [
  routerMiddleware(browserHistory), // dispatch router actions to the store
  thunkMiddleware,                  // dispatch async actions
  loggerMiddleware,
]

const configureStore = (browserHistory) => {
  return applyMiddleware( ...middlewares )( createStore )( reducers )
}

export default configureStore
