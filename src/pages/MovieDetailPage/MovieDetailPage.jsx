

import { useParams } from 'react-router-dom';

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();

  // Find the selected movie based on the movieName parameter
  const movie = movies.find(movie => movie.title === movieName);





  return (
    <>
    <div className="flex flex-wrap justify-center p-8">
        <img className="w-[430px] rounded-3xl" src={movie.posterPath} alt={movie.title} />
        <div className='m-4'>

        <h2 className="text-3xl font-semibold">{movie.title}</h2>
        <h3 className="text-2xl">{movie.releaseDate}</h3>
        <h3 className='text-xl'>Cast:</h3>
        <ul className=''>
            {movie.cast.map((actor) => (
                <li>{actor}</li>
            ))}
        </ul>
        </div>
    </div>
    </>
  );
}