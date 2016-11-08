import React, { PropTypes as T }  from 'react'
import ReactDOM                   from 'react-dom'
import { Provider }               from 'react-redux'
import { Router, browserHistory}  from 'react-router'
import { syncHistoryWithStore }   from 'react-router-redux'
import invariant                  from 'invariant'

import configureStore  from './store'
import configureRoutes from './routes'

const store   = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)


// ---
// CONFIGURE ROOT NODE
// ---


class Root extends React.Component {

  static propTypes = {
    routerHistory: T.object.isRequired,
    store:         T.object.isRequired
  }

  render() {
    const { routerHistory, store } = this.props

    invariant(
      routerHistory,
      '<Root /> needs either a routingContext or routerHistory to render.'
    )

    return (
      <Provider store={store}>
        <Router history={routerHistory}>
          {configureRoutes(store)}
        </Router>
      </Provider>
    )
  }
}


// ---
// START UP
// ---


ReactDOM.render(
  <Root routerHistory={history} store={store} />,
  document.querySelector('#root')
)


// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
// import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
