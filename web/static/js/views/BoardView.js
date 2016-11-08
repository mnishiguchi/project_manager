import React from 'react'

class BoardView extends React.Component {
  render() {
    return (
      <main className='container' style={{margin: '2rem 0'}}>
        <h1>
          BoardView
        </h1>
        {this.props.children}
      </main>
    )
  }


  // ---
  // LIFECICLE HOOKS
  // ---


  componentDidMount() {
    setDocumentTitle('Board')
  }
}

export default BoardView
