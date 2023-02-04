import React from 'react'
import { images } from '../constants'

const Footer = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row justify-around bg-darkBlue py-12">
      <div className="flex flex-col justify-center items-center">
        <a href="#">
          <img src={images.footerLogo} alt="logo" />
        </a>
        <div className="flex gap-4 mt-8 md:mt-12">
          <img src={images.iconFacebook} alt="facebook" />
          <img src={images.iconYoutube} alt="youtube" />
          <img src={images.iconTwitter} alt="twitter" />
          <img src={images.iconPinterest} alt="pinterest" />
          <img src={images.iconInstagram} alt="instagram" />
        </div>
      </div>
      <ul className="flex flex-col text-white gap-3 items-center md:items-start mt-8 md:mt-0">
        <a href="#about">
          <li className="hover:text-limeGreen">About Us</li>
        </a>
        <a href="#contact">
          <li className="hover:text-limeGreen">Contact</li>
        </a>
        <a href="#blog">
          <li className="hover:text-limeGreen">Blog</li>
        </a>
      </ul>
      <ul className="flex flex-col text-white gap-3 items-center md:items-start mt-3 md:mt-0">
        <a href="#blog">
          <li className="hover:text-limeGreen">Careers</li>
        </a>
        <a href="#contact">
          <li className="hover:text-limeGreen">Support</li>
        </a>
        <a href="#contact">
          <li className="hover:text-limeGreen">Privacy Policy</li>
        </a>
      </ul>
      <div className="flex flex-col gap-6 items-center md:items-end mt-8 md:mt-0">
        <button className="custom-button">Request Invite</button>
        <p className="text-sm text-grayischBlue">&copy; Easybank. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
