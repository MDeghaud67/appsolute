import { useState } from "react";
import Banner from "../components/Banner";
import NewsList from "../components/NewsList";

function Home(){
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    return (
        <><Banner /><NewsList /></>
    )
}
export default Home