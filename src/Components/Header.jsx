'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import logo from '../assets/logo.png';
import burgerMenu from '../assets/menu-burger.svg';
import closeIcon from '../assets/cross.svg';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleMobileNav = () => {
    console.log('switched')
    setMobileNav(!mobileNav)
  }

  return (
    <header className='min-w-[95%] md:max-w-[1400px] flex justify-between items-center p-4 mx-auto rounded-4xl before:content-[""] before:absolute before:inset-0 before:rounded-4xl before:bg-gradient-to-b before:from-white/10 before:to-white/20 before:backdrop-blur-3xl isolate before:-z-30 border border-white/20 shadow-md font-bold sticky top-4 z-50'>
      <Image 
        src={logo} 
        alt="Cyberohn Logo" 
        className="logo"
        width={100} 
      />

      <nav className={`${mobileNav ? 'flex bg-gradient-to-b from-white/10 to-white/20 backdrop-blur-3xl' : ' hidden md:flex'}  md:justify-between items-center basis-[60%] absolute md:static border border-white/20 shadow-md md:border-none md:shadow-none h-[100vh] md:h-auto -top-3 -right-3 flex-col md:flex-row p-2 md:p-0 rounded-xl pt-16 w-1/2 long-animate`}>
        <ul className='flex items-start md:items-center md:gap-4  flex-col md:flex-row mb-4 md:mb-0 text-white/70 '>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
        </ul>
        <button className="btn font-black bg-gradient-to-br from-[#00FFFF] via-[#047dce] to-[#FF00FF] text-transparent bg-clip-text cursor-pointer hover:shadow-2xl hover:shadow-[#ff00ff]">Hire Me</button>
      </nav>

      <Image 
        src={mobileNav ? closeIcon : burgerMenu} 
        alt="Burger menu" 
        className='md:hidden cursor-pointer z-50'
        width={25} 
        onClick={handleMobileNav}
      />
    </header>
  )
}

export default Header


// 1. fix the mobile nav.
// 2. add a close button to the mobile nav.
// 3.