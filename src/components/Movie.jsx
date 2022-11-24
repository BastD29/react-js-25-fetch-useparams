import { Link } from 'react-router-dom'

export default function Movie({ movie }) {
  return (
        <li>
            <Link to={`/movie/${movie.id}`} key={movie.id}>
                {movie.title}
            </Link>
        </li>
  )
}
