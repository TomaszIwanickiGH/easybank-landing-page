import React from 'react'
import { images } from '../constants'

const Navbar = () => {
  return (
    <div className="container flex justify-around items-center py-4">
      <a href="#">
        <img src={images.logo} alt="logo" />
      </a>
      <ul className="flex gap-8">
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
      <button className="custom-button">Request Invite</button>
    </div>
  )
}

export default Navbar
