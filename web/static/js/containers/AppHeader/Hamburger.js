import React          from 'react'

const Hamburger = ({targetSelector}) => {
  return (
    <button type="button" className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target={targetSelector} aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i></button>
  )
}

export default Hamburger
