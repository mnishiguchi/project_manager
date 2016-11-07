import { createStore, applyMiddleware } from 'redux';
import { routerMiddleare }              from 'react-router-redux';
import createLogger                     from 'redux-logger';
import thunkMiddleware                  from 'redux-thunk';
import reducers                         from '../reducers';

const loggerMiddleware = createLogger({
  level:     'info',
  collapsed: true,
});

/**
 * Here we configure our Redux store with middlewares.
 * - routerMiddleware: to dispatch router actions to the store.
 * - redux-thunk:      to dispatch async actions.
 * - redux-logger:     to log actions and state changes to the browser console.
 */
export default function configureStore(browserHistory) {
  const middlewares = [
    routerMiddleare(browserHistory),
    thunkMiddleware,
    loggerMiddleware,
  ]

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  return createStoreWithMiddleware(reducers);
}
