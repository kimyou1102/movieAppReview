import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    console.log('sdfghj');
    console.log(id);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            console.log(json);
            console.log(json.data.movie);
            setMovie(json.data.movie);
    };
    useEffect(()=> {
        getMovie();
    }, []);

    return(
        <div>
            <h2>{movie.title}</h2>
        </div>
    )
}

export default Detail;