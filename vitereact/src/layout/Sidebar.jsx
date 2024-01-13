import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Sidebar() {
  return (
   <>
    <div>Sidebar</div>
    <ul>
      <li><Link to="/contact"><a>Contact</a></Link></li>
      <li><Link to="/about"><a>About</a></Link></li>
    </ul>
   </>
  )
}

export default Sidebar