import React                from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'

// Actions
import registrationActions from '../actions/registration.js'

// Utils
import {
  setDocumentTitle,
  renderField,
  renderErrorForRef
} from '../utils/viewUtils'


class SignUpView extends React.Component {
  render() {
    const { errors } = this.props

    const signUpForm = (
      <form onSubmit={e => this._handleSubmit(e)}>
        {renderField('first_name')}
        {renderErrorForRef(errors, 'first_name')}

        {renderField('last_name')}
        {renderErrorForRef(errors, 'last_name')}

        {renderField('email', {type: 'email'})}
        {renderErrorForRef(errors, 'email')}

        {renderField('password', {type: 'password'})}
        {renderErrorForRef(errors, 'password')}

        {renderField('password_confirmation', {type: 'password'})}
        {renderErrorForRef(errors, 'password_confirmation')}

        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    )

    return (
      <main className='container' style={{margin: '2rem 0'}}>
        <h1>
          Sign up
        </h1>

        {signUpForm}

        <div className="mt-1" />

        <Link to="/log_in">Log in</Link>
      </main>
    )
  }


  // ---
  // LIFECYCLE HOOKS
  // ---


  // Set the document title when the component is mounted.
  componentDidMount() {
    setDocumentTitle('Sign up')
  }


  // ---
  // PRIVATE METHODS
  // ---


  // Dispatches the `signUp` action with the user's inputted values.
  _handleSubmit(event) {
    event.preventDefault()

    const { dispatch } = this.props

    const payload = {
      first_name:            this.refs.first_name.value,
      last_name:             this.refs.last_name.value,
      email:                 this.refs.email.value,
      password:              this.refs.password.value,
      password_confirmation: this.refs.password_confirmation.value,
    }

    dispatch(registrationActions.signUp(payload))
  }

} // end class


// ---
// CONNECT TO STORE
// ---


const mapStateToProps = (state) => {
  return state.registration
}

export default connect( mapStateToProps )( SignUpView )
