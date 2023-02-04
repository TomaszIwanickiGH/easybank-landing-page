import React from 'react'
import { images } from '../constants'

const Header = () => {
  return (
    <div id="home" className="container flex flex-col xl:flex-row justify-around bg-veryLightGray relative overflow-hidden sm:h-[1200px] h-[800px] lg:h-[800px] z-[-1]">
      <div className="flex flex-col justify-center items-center] absolute top-[50%] sm:top-[70%]  lg:static lg:top-0">
        <h1 className="text-4xl text-center lg:text-left lg:text-5xl lg:w-[50%]">
          Next generation <br /> digital banking
        </h1>
        <p className="text-grayischBlue my-8 text-center px-5 lg:text-start lg:px-0 lg:w-[40%]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
        <button className="custom-button mx-auto lg:mx-0">Request Invite</button>
      </div>
      <div className="container absolute right-0 top-0">
        <img className="hidden sm:flex absolute top-[-250px] right-[-500px]" src={images.bgIntroDesktop} alt="intro" />
        <img className="flex sm:hidden absolute right-0 w-full" src={images.bgIntroMobile} alt="intro" />
        <img className="absolute top-[-120px] lg:top-[20px] lg:right-[-70px] lg:h-[800px]" src={images.imageMockups} alt="" />
      </div>
    </div>
  )
}

export default Header
