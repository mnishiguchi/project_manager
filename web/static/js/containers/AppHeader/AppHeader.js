import React          from 'react'
import ReactGravatar  from 'react-gravatar'

// Actions
import sessionActions from '../../actions/session'

// Components
import { Link }  from 'react-router'
import NavLink   from './NavLink'
import Hamburger from './Hamburger'

/**
 * BS4 navbar component.
 */
class AppHeader extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
        <Hamburger targetSelector="#navbarToggle" />

        <Link to="/" className="navbar-brand">
          Project Manager
        </Link>

        <div className="collapse navbar-collapse" id="navbarToggle">
          <div className="nav navbar-nav">
            <NavLink to="/" className="nav-item nav-link">
              <i className="fa fa-home"/>{' '}
              Home
            </NavLink>
            {this._renderSignUpLink()}
            {this._renderLogInLink()}
            {this._renderLogOutLink()}
          </div>
        </div>
      </nav>
    )
  }


  // ---
  // PRIVATE METHODS
  // ---


  _renderCurrentUser() {
    const { currentUser } = this.props

    if (!currentUser) { return false }

    const fullName = [currentUser.first_name, currentUser.last_name].join(' ')

    return (
      <a className="current-user">
        <ReactGravatar email={currentUser.email} https />
        {fullName}
      </a>
    )
  }

  _renderSignUpLink() {
    if (this.props.currentUser) { return }

    return (
      <NavLink to="/sign_up" className="nav-item nav-link">
        <i className="fa fa-sign-in"/>{' '}
        Sign up
      </NavLink>
    )
  }

  _renderLogInLink() {
    if (this.props.currentUser) { return }

    return (
      <NavLink to="/log_in" className="nav-item nav-link">
        <i className="fa fa-sign-in"/>{' '}
        Log in
      </NavLink>
    )
  }

  _renderLogOutLink() {
    if (!this.props.currentUser) { return }

    return (
      <a
        href="#"
        className="nav-item nav-link"
        onClick={e => this._handleLogOutClick(e)}>
        <i className="fa fa-sign-out" />{' '}
        Log out
      </a>
    )
  }

  _handleLogOutClick(e) {
    e.preventDefault()
    if (confirm('Are you sure?')) {
      this.props.dispatch( sessionActions.logOut() )
    }
  }
}

export default AppHeader
