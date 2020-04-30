import React from 'react'

import useScrollDirection from '../../hooks/useScrollDirection'

import './Navbar.css'

const Navbar = () => {
  const { scrollingDown } = useScrollDirection()

  return (
    <nav className={scrollingDown ? 'secondaryNav' : ''}>
      <div className='logo'>
        <img src='logo512.png' alt='logo' />
      </div>
      <ul>
        <li className='active'>
          <a href='#home'>home</a>
        </li>
        <li>
          <a href='#news'>news</a>
        </li>
        <li>
          <a href='#about'>about</a>
        </li>
        <li>
          <a href='#contact'>contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
