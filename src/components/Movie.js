import { Link } from 'react-router-dom';

function Movie({title, movieImg, id}) {
    return(
        <div>
            <Link to={`movie/${id}`}><h2>{title}</h2></Link>
            <img src={movieImg} alt="bgImage" />
        </div>
    )
}

export default Movie;