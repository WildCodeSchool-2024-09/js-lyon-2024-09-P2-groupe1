import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface FavoriteContextProps {
  children: ReactNode;
}

export interface Show {
  image: { original: string };
  name: string;
  id: number;
}

interface FavoriteContextType {
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
  shows: Show[];
  setShows: React.Dispatch<React.SetStateAction<Show[]>>;
}

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export function Favoriteprovider({ children }: FavoriteContextProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  return (
    <FavoriteContext.Provider
      value={{ favorites, setFavorites, shows, setShows }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => {
  const value = useContext(FavoriteContext);

  if (value === null) {
    throw new Error("useFavorite has to be used within <FavoriteProvider>");
  }

  return value;
};
