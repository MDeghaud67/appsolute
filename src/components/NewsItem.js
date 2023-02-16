import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function NewsItem() {
  const [news, setNews] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  var url = 'https://newsapi.org/v2/everything?' +
  'q=bitcoin&' +
  'apiKey='+API_KEY;
  
  React.useEffect(() => {
    axios.get(url)
        .then((response) => {
            setNews(response.data)
        })
}, [url])

const listArticle = news.articles
//console.log(listArticle)

const card = Array.isArray(listArticle) ? listArticle.map((article, index) => {
  return (
    <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.source.name}
        </Card.Text>
        <Button variant="primary" href={article.url}>See Details</Button>
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