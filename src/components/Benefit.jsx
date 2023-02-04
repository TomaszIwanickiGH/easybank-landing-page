import React from 'react'
import { images } from '../constants'

const Benefit = (props) => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start w-full sm:w-[45%] lg:w-[20%]">
      <img className="w-[60px] h-[60px] mb-4" src={props.image} alt="img" />
      <h3 className="my-6 text-[18px]">{props.title}</h3>
      <p className="text-grayischBlue text-sm px-6 text-center lg:text-start lg:px-0">{props.desc}</p>
    </div>
  )
}

export default Benefit
