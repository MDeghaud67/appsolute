import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function NewsList() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const products = [
        {id: 1, name: 'Shoes', description: 'Running Shoes.' },
        {id: 2, name: 'MacBook', description: 'Apple MacBook.' },
    ];
    //const news = [1, 2, 3, 4, 5]
    var url = 'https://newsapi.org/v2/everything?' +
    'q=bitcoin&' +
    'apiKey=ba69ab307cdb419b8a53abdd9efea53b';
    //var url = 'https://jsonplaceholder.typicode.com/posts/1'

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
    }, [])
    return (
            Object.values(news).map((item, index) => (
            //<NewsItem key={index} title={item.articles.n} source={item.articles} />
            <NewsItem key={index} />
        ))
        //console.log(news)
        
        //<NewsItem />
    )
}  

export default NewsList;