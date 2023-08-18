import { Link } from "react-router-dom"

export default function MovieCard( {movie} ) {
    const link = `/movies/${movie.title}`
    return (
        <Link to={link} className="bg-gray-500 w-[430px] rounded-3xl overflow-hidden">
            <img className="mx-auto" src={movie.posterPath} alt={movie.title} />
            <h3 className="text-3xl font-semibold">{movie.title}</h3>
            <h3 className="text-2xl">{movie.releaseDate}</h3>
        </Link>
    );
  }