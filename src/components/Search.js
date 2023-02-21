import axios from "axios";
import { useCallback, useEffect, useState } from "react";

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
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Bitcoin :
                            </label>
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
                        </div>
                        <ul>
                            {Array.isArray(listArticle) ? listArticle
                                .filter((val) => {
                                    return val.title.toLowerCase().includes(inputValue.toLowerCase())
                                })
                                .map((val) => {
                                    return (
                                        <li className="block px-4 py-2 text-sm text-gray-700">{val.title}</li>
                                    )
                                }) : []}
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Search