import { combineReducers }  from 'redux'
import { routerReducer }    from 'react-router-redux'

// Reducers
import registration         from './registration'
import session              from './session'


/**
 * Here we specify all the combined state reducers.
 * routerReducer automatically sets routing changes into the state
 */
const reducers = combineReducers({
  routing: routerReducer,
  registration,
  session,
})

export default reducers
