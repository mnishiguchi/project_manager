import React from 'react'
import Faker from 'Faker'

import { setDocumentTitle } from '../utils/viewUtils'


class WelcomeView extends React.Component {
  render() {
    return (
      <main className='container' style={{margin: '2rem 0'}}>
        <div className="jumbotron">
          <h2 className="display-3">
            Welcome!
          </h2>
          <p className="lead">{Faker.Lorem.paragraphs()}</p>
        </div>

        <p>{Faker.Lorem.paragraphs()}</p>
        <p>{Faker.Lorem.paragraphs()}</p>
      </main>
    )
  }


  // ---
  // LIFECICLE HOOKS
  // ---


  componentDidMount() {
    setDocumentTitle('Welcome')
  }
}

export default WelcomeView
