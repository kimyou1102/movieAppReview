import { useState, useEffect } from 'react';
import Movie from '../components/Movie.js';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=download_count&limit=50`
    )).json();
    // const json = await response.json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
    setLoading(false);
  }
  
  useEffect(() => {
    getMovies();
  }, [])
  
  return (
    <div className="App">
      {!loading ? movies.map(movie =>
        <Movie key={movie.id} id={movie.id} title={movie.title} movieImg={movie.medium_cover_image} />
      ) : null}
    </div>
  );
}

export default Home;