import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function NewsItem() {
  const [news, setNews] = useState([]);
  var url = 'https://newsapi.org/v2/everything?' +
  'q=bitcoin&' +
  'apiKey=ba69ab307cdb419b8a53abdd9efea53b';
  
  React.useEffect(() => {
    axios.get(url)
        .then((response) => {
            //console.log(response.json())
            setNews(response.data)
            //articles: [] 
        })
    /*.then((result) => {
        setNews(result)
    })
    .catch((error) => {
        setError(error);
    })*/
}, [url])
const listArticle = news.articles
//console.log(listArticle)

const card = Array.isArray(listArticle) ? listArticle.map((article) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.source.name}
        </Card.Text>
      </Card.Body>
    </Card>
  )
  
  //,console.log(news.articles.source) 
}) :[] 

/*const title = Array.isArray(listArticle) ? listArticle.map((article, index) => {
  // eslint-disable-next-line no-unused-expressions
  return (
    <Card.Title key={index}>{article.title}</Card.Title>
  )
}) : []
const source = Array.isArray(listArticle) ? listArticle.map((article, index) => {
  return( 
    <Card.Text key={index}>
      {article.source.name}
    </Card.Text>
  )
}) : []*/
  // for (const article in listArticle) {
      //console.log(listArticle.source.name)
      // console.log(article)
    // }
    return (
      <>
        {card}
      </>
    
    //,console.log(news.articles.source)
    )   
  
}

export default NewsItem;