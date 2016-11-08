import React    from 'react'
import { Link } from 'react-router'

// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links#nav-link-wrappers
const NavLink = (props) => {
  return (
    <Link
      {...props}
      activeClassName="active"
      className={props.className}
    />
  )
}

export default NavLink
