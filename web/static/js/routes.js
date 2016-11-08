import React                  from 'react'
import { IndexRoute, Route }  from 'react-router'

// Actions
import sessionActions from './actions/session'

// Layouts
import MainLayout from './layouts/MainLayout'

// Containers
import PublicContainer        from './containers/PublicContainer'
import AuthenticatedContainer from './containers/AuthenticatedContainer'

// Views
import WelcomeView  from './views/WelcomeView'
import SignUpView   from './views/SignUpView'
import LogInView    from './views/LogInView'

import HomeView     from './views/HomeView'
import BoardView    from './views/BoardView'
import CardView     from './views/CardView'


const configureRoutes = (store) => {
  const { dispatch }    = store
  const { session }     = store.getState()
  const { currentUser } = session

  /**
   * https://github.com/ReactTraining/react-router/blob/master/docs/API.md#onenternextstate-replace-callback
   */
  const _ensureAuthenticated = (nextState, replace, callback) => {
    if (!currentUser && localStorage.getItem('phoenixAuthToken')) {
      dispatch(
        sessionActions.fetchCurrentUser()
      )
    } else if (!localStorage.getItem('phoenixAuthToken')) {
      replace('/welcome')
    }

    callback()
  }

  // const _redirectIfAuthenticated = (nextState, replace, callback) => {
  //   if (!currentUser && localStorage.getItem('phoenixAuthToken')) {
  //     dispatch(sessionActions.fetchCurrentUser())
  //     replace('/')
  //   }
  //
  //   callback()
  // }

  return (
    <Route component={MainLayout}>

      <Route path="/" component={AuthenticatedContainer} onEnter={_ensureAuthenticated}>
        <IndexRoute component={HomeView} />

        <Route path="/boards/:id" component={BoardView}>
          <Route path="/cards/:id" component={CardView} />
        </Route>
      </Route>

      <Route component={PublicContainer}>
        <Route path="/welcome" component={WelcomeView} />
        <Route path="/sign_up" component={SignUpView} />
        <Route path="/log_in" component={LogInView} />
      </Route>
    </Route>
  )
}

export default configureRoutes
