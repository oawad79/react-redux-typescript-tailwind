import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="h-20">
      <NavLink
        to="/"
        className={({ isActive }) =>
          (isActive ? 'underline text-blue-500' : '') + ' font-sans text-xl font-normal px-3 '
        }
      >
        Home
      </NavLink>
      {' | '}
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          (isActive ? 'underline text-blue-500' : '') + ' font-sans text-xl font-normal px-3 '
        }
      >
        Courses
      </NavLink>
      {' | '}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          (isActive ? 'underline text-blue-500' : '') + ' font-sans text-xl font-normal px-3 '
        }
      >
        About
      </NavLink>
    </nav>
  )
}

export default Header
