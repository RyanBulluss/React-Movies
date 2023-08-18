import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage( { movies } ) {
    return (
      <div className="p-8">
        <div className="flex flex-wrap justify-center gap-8">
            {movies.map((movie, idx) => (
                <MovieCard movie={movie} key={idx} />
            ))}
        </div>
      </div>
    );
  }