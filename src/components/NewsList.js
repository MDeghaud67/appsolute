import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function NewsList() {
    const [news, setNews] = useState([]);

    //const news = [1, 2, 3, 4, 5]
    var url = 'https://newsapi.org/v2/everything?' +
    'q=bitcoin&' +
    'apiKey=ba69ab307cdb419b8a53abdd9efea53b';
    //var url = 'https://jsonplaceholder.typicode.com/posts/1'

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setNews(response.data)
            })
    }, [url])
    return (
        Object.values(news).map((item, index) => (
            <NewsItem key={index} />
        ))
    )
}  

export default NewsList;