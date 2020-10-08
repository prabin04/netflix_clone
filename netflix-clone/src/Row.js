import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row( {title, fetchUrl} ) {
    const [movies, setMovies] = useState([]);

    //A snippet of code which runs based on a aspecific condition/variable
    useEffect(() => {
        //if [], run once when the row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            //console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies )


    return (
        <div>
            {/* title */}
            <h2>{title}</h2>
            {/* container -> posters */}
        </div>
    )
}

export default Row
