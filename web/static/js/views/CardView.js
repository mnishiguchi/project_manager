import React from 'react'

class CardView extends React.Component {
  render() {
    return (
      <main className='container' style={{margin: '2rem 0'}}>
        <h1>
          CardView
        </h1>
        {this.props.children}
      </main>
    )
  }


  // ---
  // LIFECICLE HOOKS
  // ---


  componentDidMount() {
    setDocumentTitle('Card')
  }
}

export default CardView
