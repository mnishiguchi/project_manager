import { push }   from 'react-router-redux'
import { Socket } from 'phoenix'

import { httpGet, httpPost, httpDelete } from '../utils/httpUtils'

const actions = {}

actions.fetchCurrentUser = () => {
  return dispatch => {
    httpGet(`/api/v1/current_user`)
    .then(currentUser => {
      dispatch({
        type: 'SET_CURRENT_USER',
        currentUser
      })
    })
    .catch(error => {
      console.log(error)
      dispatch(
        push('/log_in')
      )
    })
  }
}

/**
 * After authenticating the user, whether it was using the sign in form or
 * using a previously stored phoenixAuthToken, we need to retrieve the
 * currentUser to dispatch it to the Redux store so that we can display the
 * user's avatar and name in the header.
 */
actions.setCurrentUser = (dispatch, currentUser) => {
  dispatch({
    type: "SET_CURRENT_USER",
    currentUser
  })

  const socket = new Socket('/socket', {
    params: { token: localStorage.getItem('phoenixAuthToken') }
  })

  socket.connect()

  const channel = socket.channel(`users:${currentUser.id}`)

  channel.join().receive('ok', () => {
    dispatsh({
      type: 'SOCKET_CONNECTED',
      socket,
      chennel,
    })
  })
}

/**
 * Sends a POST request to the application server with the log in form
 * submission data.
 * @param  {Object} key-value pairs from the log in form
 */
actions.logIn = (formSubmission) => {
  const data = {
    session: {
      email:    formSubmission.email,
      password: formSubmission.password,
    }
  }

  return dispatch => {
    httpPost(`/api/v1/sessions`, data)
    .then(result => {
      window.localStorage.setItem('phoenixAuthToken', result.jwt)
      dispatch({
        type:       'SET_CURRENT_USER',
        currentUser: result.user
      })
      dispatch(
        push('/')
      )
    })
    .catch(error => {
      error.response.json()
      .then(errorJSON => {
        dispatch({
          type: 'SESSION_ERROR',
          error: errorJSON.error
        })
      })
    })
  }
}

actions.logOut = () => {
  return dispatch => {
    httpDelete('/api/v1/sessions')
    .then((data) => {
      localStorage.removeItem('phoenixAuthToken')

      dispatch({
        type: 'LOG_OUT',
      })

      dispatch(
        push('/welcome')
      )
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export default actions
