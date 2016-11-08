import React from 'react'
import { setDocumentTitle } from '../utils/viewUtils'

class HomeView extends React.Component {
  render() {
    return (
      <main className='container' style={{margin: '2rem 0'}}>
        <h1>
          HomeView
        </h1>
        {this.props.children}
      </main>
    )
  }


  // ---
  // LIFECICLE HOOKS
  // ---


  componentDidMount() {
    setDocumentTitle('')
  }
}

export default HomeView
