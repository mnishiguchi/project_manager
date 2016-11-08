import React            from 'react'

// Components
import AppHeader from './AppHeader/AppHeader'

class PublicContainer extends React.Component {
  render() {
    return (
      <div>
        <AppHeader {...this.props} />

        {this.props.children}
      </div>
    )
  }
}

export default PublicContainer
