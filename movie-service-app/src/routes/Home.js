import {useState, useEffect} from "react";
import Movie from "../components/Movie";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (await fetch("https://movies-api.accel.li/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect( () => {
    getMovies();
  }, []);
  return (
    <div className="App">
      {
        loading ? <h1>Loading...</h1> : 
        movies.map( (movie) => (
          <Movie id={movie.id} mediumImage={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}></Movie>
        ))
      }
    </div>
  )
}

export default Home;