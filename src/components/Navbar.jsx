import React, { useState } from 'react'
import { images } from '../constants'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="container flex justify-between px-8 sm:px-0 sm:justify-around items-center py-4 relative">
      <a href="#">
        <img src={images.logo} alt="logo" />
      </a>
      <ul className="hidden sm:flex gap-8">
        <a href="#home">
          <li className="border-b-white border-b-4 py-2 text-grayischBlue hover:border-b-limeGreen hover:cursor-pointer hover:text-black">Home</li>
        </a>
        <a href="#about">
          <li className="border-b-white border-b-4 py-2 text-grayischBlue hover:border-b-limeGreen hover:cursor-pointer hover:text-black">About</li>
        </a>
        <a href="#contact">
          <li className="border-b-white border-b-4 py-2 text-grayischBlue hover:border-b-limeGreen hover:cursor-pointer hover:text-black">Contact</li>
        </a>
        <a href="#blog">
          <li className="border-b-white border-b-4 py-2 text-grayischBlue hover:border-b-limeGreen hover:cursor-pointer hover:text-black">Blog</li>
        </a>
        <a href="#blog">
          <li className="border-b-white border-b-4 py-2 text-grayischBlue hover:border-b-limeGreen hover:cursor-pointer hover:text-black">Careers</li>
        </a>
      </ul>
      <button className="hidden lg:flex custom-button">Request Invite</button>
      <img className="flex sm:hidden" src={toggleMenu ? images.iconClose : images.iconHamburger} alt="menu" onClick={() => setToggleMenu(!toggleMenu)} />
      {toggleMenu && (
        <div className="absolute top-[70px] mx-auto w-[80%] rounded bg-white z-5 py-4">
          <ul className="flex flex-col gap-6 text-2xl font-normal justify-center items-center">
            <a href="#">
              <li onClick={() => setToggleMenu(false)}>Home</li>
            </a>
            <a href="#about">
              <li onClick={() => setToggleMenu(false)}>About</li>
            </a>
            <a href="#contact">
              <li onClick={() => setToggleMenu(false)}>Contact</li>
            </a>
            <a href="#blog">
              <li onClick={() => setToggleMenu(false)}>Blog</li>
            </a>
            <a href="#blog">
              <li onClick={() => setToggleMenu(false)}>Careers</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
