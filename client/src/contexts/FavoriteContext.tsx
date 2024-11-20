import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface FavoriteContextProps {
  children: ReactNode;
}

interface Movie {
  image: { medium: string };
  name: string;
  id: number;
}

interface FavoriteContextType {
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
  toggleLike: (id: number) => void;
  shows: Movie[];
  setShows: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export function Favoriteprovider({ children }: FavoriteContextProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    if (favorites.includes(id) === true) {
      setFavorites(favorites.filter((AlreadyId) => AlreadyId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const [shows, setShows] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  return (
    <FavoriteContext.Provider
      value={{ favorites, setFavorites, toggleLike, shows, setShows }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => {
  const value = useContext(FavoriteContext);

  if (value === null) {
    throw new Error("useWeather has to be used within <WeatherProvider>");
  }

  return value;
};

export default FavoriteContext;
