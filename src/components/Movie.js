import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, mediumImage, title, summary, genres})
{
  return (
    <div>
        <div key={id}>
            <img src={mediumImage}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    mediumImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Movie;