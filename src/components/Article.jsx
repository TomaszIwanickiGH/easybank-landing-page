import React from 'react'

const Article = (props) => {
  return (
    <div className="flex flex-col justify-center w-[20%]">
      <img className="h-[170px]" src={props.image} alt="img" />
      <div className="px-4 mt-6">
        <h4 className="text-grayischBlue text-xs">{props.author}</h4>
        <h3 className="text-m mt-4 mb-2">{props.title}</h3>
        <p className="text-grayischBlue text-sm">{props.desc}</p>
      </div>
    </div>
  )
}

export default Article
