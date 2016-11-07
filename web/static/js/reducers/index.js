import { combineReducers }  from 'redux';
import { routerReducer }    from 'react-router-redux';
import sessionReducer       from './session';


/**
 * Here we specify all the combined state reducers.
 */
export default combineReducers({
  // Automatically set routing changes into the state
  routing: routerReducer,
  // Authentication-relalated state
  session: sessionReducer,
});
