import React, {useState, useEffect} from 'react';
import axios from "axios";
import Home from "./Home";
import {Switch, Route} from "react-router-dom";
import ImageSelected from "./ImageSelected"; 



const Main = () => {

    const [galery, setGalery] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/galery/${query}`)
        .then((response) => {
            setGalery(response.data);
            console.log(response)
        })

    }, [query])



    return (
        <div className = "main">
            <Switch>
          <Route exact path="/">
            <Home dataMovie = {{
                galery,
                setGalery,
                query,
                setQuery,
            }}/>
          </Route>
          <Route exact path="/picture">
            <ImageSelected dataMovie = {{
                galery,
                setGalery,
                query,
                setQuery,
            }} />
          </Route>
        </Switch>
        </div>
    );
};

export default Main;