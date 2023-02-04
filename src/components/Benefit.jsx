import React from 'react'
import { images } from '../constants'

const Benefit = (props) => {
  return (
    <div className="flex flex-col justify-center  w-[20%]">
      <img className="w-[60px] h-[60px] mb-4" src={props.image} alt="img" />
      <h3 className="my-6 text-[18px]">{props.title}</h3>
      <p className="text-grayischBlue text-sm">{props.desc}</p>
    </div>
  )
}

export default Benefit
