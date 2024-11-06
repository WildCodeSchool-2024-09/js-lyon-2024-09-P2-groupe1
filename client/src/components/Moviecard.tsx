interface MoviecardProps {
  movie: Movie[];
}

interface Movie {
  image: string;
  title: string;
  description: string;
  id: number;
}

function Moviecard({ movie }: MoviecardProps) {
  return (
    <>
      {movie.map((movie) => (
        <figure key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </figure>
      ))}
    </>
  );
}

export default Moviecard;
