/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";

function NewsItem() {
  const [news, setNews] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  var url = 'https://newsapi.org/v2/everything?' +
  'q=bitcoin&' +
  'apiKey='+API_KEY;
  
  useEffect(() => {
    axios.get(url)
        .then((response) => {
            setNews(response.data)
        })
  }, [url])

const listArticle = news.articles
//console.log(listArticle)

const card = Array.isArray(listArticle) ? listArticle.map((article, index) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a key={index} href={article.url} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={article.urlToImage}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{article.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{article.source.name}</p>
          </a>
        </div>
      </div>
    </div>
  )
}) :[] 
    return (
      <>
        {card}
      </>
    
    //,console.log(news.articles.source)
    )   
}

export default NewsItem;