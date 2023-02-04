import React from 'react'
import { data } from '../constants'
import Benefit from './Benefit'

const Benefits = () => {
  return (
    <div id="about" className="bg-lightGrayischBlue flex flex-col pl-0 lg:pl-32">
      <div className="w-full lg:w-[50%] px-4">
        <h2 className="text-3xl mt-12 font-normal text-center lg:text-left">Why choose Easybank?</h2>
        <p className="text-grayischBlue my-4 text-center lg:text-start">We leverage Open Banking to turn your bank account into financial hub. Control your finances like never before.</p>
      </div>
      <div className="flex flex-wrap gap-12 mt-8 mb-16">
        {data.benefits.map((benefit) => (
          <Benefit key={benefit.id} image={benefit.image} title={benefit.title} desc={benefit.desc} />
        ))}
      </div>
    </div>
  )
}

export default Benefits
