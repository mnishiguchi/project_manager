import React from 'react'

import 'bootstrap'

const MainLayout = (props) => {
  return (
    <div className="MainLayout">
      {props.children}

      <footer>
        <div className="container">
          <div className="contact-info">
            Masatoshi Nishiguchi &middot;
            <a href="http://www.mnishiguchi.com/">mnishiguchi.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
