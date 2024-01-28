import React from 'react'
import "./navbar.scss"
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="../../../public/image/IDEA-removebg-preview.png" alt="" />
        </div>
        <div className="navList">
          <ul>
            {/* <li onClick={()=>navigate("/login")}>Login</li>
            <li onClick={()=>navigate("/register")}>Register</li> */}
            <NavLink to={"/login"}> Login</NavLink>
            <NavLink to={"/register"}> Register</NavLink>
          </ul>
        </div>
    </div>
  )
}

export default Navbar