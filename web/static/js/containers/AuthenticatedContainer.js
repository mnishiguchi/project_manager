import React            from 'react'
import { connect }      from 'react-redux'
import { routeActions } from 'react-router-redux'

// Components
import AppHeader from './AppHeader/AppHeader'

class AuthenticatedContainer extends React.Component {
  render() {
    return (
      <div>
        <AppHeader {...this.props} />

        {this.props.children}
      </div>
    )
  }
} // end class


// ---
// CONNECT TO STORE
// ---


const mapStateToProps = (state) => {
  const { currentUser } = state.session
  return {
    currentUser,
  }
}

export default connect( mapStateToProps )( AuthenticatedContainer )
