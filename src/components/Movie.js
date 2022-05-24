import { Link } from 'react-router-dom';

function Movie({title, movieImg, id}) {
    return(
        <div>
            <a href={`movie/${id}`}><h2>{title}</h2></a>
            <img src={movieImg} alt="bgImage" />
        </div>
    )
}

export default Movie;