import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


export default function MovieDetails() {

  const navigate = useNavigate();
  let params = useParams();

  const [movie, setMovie] = useState();

  const fetchMovie = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cecb8ae8236231beeb7c24539049cb70&language=en-US`
    )
    const movie = await data.json();
    setMovie(movie);
  }

  useEffect(() => {
    fetchMovie(params.movieId)
  }, [movie])

  return (
    <>
      <button onClick={() => navigate(-1)}>
        Go back
      </button>
      {
        movie && (
          <div>
            <p>{movie.original_title}</p>
            <p>{movie.overview}</p>
          </div>
        )
      }
    </>
  )
}
