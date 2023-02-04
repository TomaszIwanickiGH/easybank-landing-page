import React from 'react'
import { images } from '../constants'

const Header = () => {
  return (
    <div id="home" className="container flex justify-around bg-veryLightGray relative overflow-hidden h-[800px]">
      <div className="flex flex-col justify-center items-center]">
        <h1 className="text-5xl w-[50%]">
          Next generation <br /> digital banking
        </h1>
        <p className="text-grayischBlue my-8 w-[40%]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
        <button className="custom-button">Request Invite</button>
      </div>
      <div className="container absolute right-0 top-0">
        <img className="absolute top-[-250px] right-[-500px]" src={images.bgIntroDesktop} alt="intro" />
        <img className="absolute top-[20px] right-[-70px] h-[800px]" src={images.imageMockups} alt="" />
      </div>
    </div>
  )
}

export default Header
