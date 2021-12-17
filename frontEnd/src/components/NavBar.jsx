import React from 'react'


function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/todo'>Task List</Link>
        <Link to='/maintreq'>Maintenace Request</Link>
        <Link to='/properties'>Properties Managed</Link>
      </div>
    </nav>
  )
}

export default Nav;
