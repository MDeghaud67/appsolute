import { Menu } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Search() {
    const [news, setNews] = useState([]);
    const [inputValue, setInputValue] = useState("");

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

    //console.log(inputValue)
    /*const debouncedSave = useCallback(
        debounce((newValue) => requests(newValue), 1000),
        []
    );*/

    /*const updateValue = (newValue) => {
        setInputValue(newValue);
        //debouncedSave(newValue);
    };*/
    return (
        <form action="#" method="POST">
                            <input
                                type="text"
                                //value={inputValue}
                                onChange={(e) => {
                                    let value = e.target.value
                                    value.length > 2 && setInputValue(value) 
                                }}
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        <ul className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {Array.isArray(listArticle) ? listArticle
                                .filter((val) => {
                                    return val.title.toLowerCase().includes(inputValue.toLowerCase())
                                })
                                .map((val, index) => {
                                    return (
                                        <li key={index} className="block px-4 py-2 text-sm text-gray-700">{val.title}</li>
                                    )
                                }) : []}
                        </ul>
        </form>
    )
}

export default Search