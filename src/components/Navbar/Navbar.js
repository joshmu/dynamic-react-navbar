import React from 'react'

import useScrollTrigger from '../../hooks/useScrollTrigger'

import './Navbar.css'

const Navbar = () => {
  const { showNav, elemToTriggerNav } = useScrollTrigger()
  elemToTriggerNav('.sec2')

  return (
    <nav className={showNav ? 'secondaryNav' : ''}>
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
