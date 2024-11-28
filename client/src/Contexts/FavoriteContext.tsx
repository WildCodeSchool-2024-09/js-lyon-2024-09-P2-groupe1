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
  toggleLike: (id: number) => void
}

const FavoriteContext = createContext<FavoriteContextType | null>(null); // Contexte qui permet de transmettre les states liés à la page favorite

export function Favoriteprovider({ children }: FavoriteContextProps) {
  const [favorites, setFavorites] = useState<number[]>([]); // State dans lequel on stocke les id des séries

  const [shows, setShows] = useState<Show[]>([]); // State dans lequel on stocke les données fetchées

  useEffect(() => {
    // permet de récupérer les données de l'API au chargement de la page
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  const toggleLike = (id: number) => {
    // fonction pour le bouton ajouter/retirer des favoris
    if (favorites.includes(id) === true) {
      setFavorites(favorites.filter((AlreadyId) => AlreadyId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, setFavorites, shows, setShows, toggleLike }}
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
