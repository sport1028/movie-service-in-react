import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [movieInfos, setMovieInfos] = useState([]); 
    const loadMovieDetail = async () =>
    {
        const resJson = await (await fetch(`https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}`) ).json();
        setMovieInfos(resJson.data.movie);
    }
    useEffect( () => {
        loadMovieDetail();
    },[])

    return (
        <div key={movieInfos.id}>
            <img src={movieInfos.large_cover_image}/>
            <h2>{movieInfos.title}</h2>
            <p>{movieInfos.description_full}</p>
        </div>
    );
}

export default Detail;