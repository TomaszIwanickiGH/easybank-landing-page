import React from 'react'
import { data } from '../constants'
import Article from './Article'

const Articles = () => {
  return (
    <div id="blog" className="flex flex-col bg-veryLightGray pt-16 pl-0 lg:pl-32">
      <h2 className="text-3xl font-normal mb-8 text-center lg:text-left">Latest Articles</h2>
      <div className="flex flex-wrap gap-8 mb-16">
        {data.articles.map((article) => (
          <Article key={article.id} image={article.image} author={article.author} title={article.title} desc={article.desc} />
        ))}
      </div>
    </div>
  )
}

export default Articles
