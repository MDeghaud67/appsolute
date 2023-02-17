import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function NewsList() {
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
    return (
        Object.values(news).map((index) => (
            <NewsItem key={index} />
        ))
    )
}  

export default NewsList;