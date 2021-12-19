import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/properties'>Properties Managed</Link>
        <Link to='/todo'>Task List</Link>
        <Link to='/maintrequests'>Maintenace Request</Link>
      </div>
    </nav>
  )
}

export default Nav;
