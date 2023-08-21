

export default function ActorListPage( {movies} ) {


  const actorsSet = new Set();
  movies.forEach(movie => {
    movie.cast.forEach(actor => {
      actorsSet.add(actor);
    });
  });
  const actors = Array.from(actorsSet);

  return (
    <div>
        {actors.map((actor, idx) => (
          <div className="border-t border-gray-700 m-2">{actor}</div>
        ))}
    </div>
  );
}