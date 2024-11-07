import { useNavigate } from "react-router-dom";

interface MoviecardProps {
  movies: Movie[];
  link: string;
}

interface Movie {
  image: string;
  title: string;
  description: string;
  id: number;
}

function Moviecard({ movies, link }: MoviecardProps) {
  const navigate = useNavigate();

  const cardClick = (Lien: string): undefined => {
    navigate(Lien);
  };

  return (
    <>
      {movies.map((movie) => (
        <figure key={movie.id}>
          onClick={cardClick(link)}
          <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </figure>
      ))}
    </>
  );
}

export default Moviecard;
