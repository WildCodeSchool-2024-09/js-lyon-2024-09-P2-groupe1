import "./App.css";
import Moviecard from "./components/Moviecard";

const movies = [
  {
    title: "Les tomates de l'espace",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un film sur les tomates farcies",
    id: 1,
  },
  {
    title: "Les tomates de l'espace 2: le retour",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un deuxième film sur les tomates farcies",
    id: 2,
  },
  {
    title: "Les tomates de l'espace 3: la vengeance",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un troisième film sur les tomates farcies",
    id: 3,
  },
  {
    title: "Les tomates de l'espace 3: la vengeance",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un troisième film sur les tomates farcies",
    id: 4,
  },
  {
    title: "Les tomates de l'espace 3: la vengeance",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un troisième film sur les tomates farcies",
    id: 5,
  },
  {
    title: "Les tomates de l'espace 3: la vengeance",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un troisième film sur les tomates farcies",
    id: 6,
  },
];

function App() {
  return (
    <>
      <Moviecard
        movies={movies}
        link={
          "https://www.marmiton.org/recettes/recette_tomates-farcies-facile_63622.aspx"
        }
        //* le link n'est ps bon car useNavigate doit permettre de se déplacerau sein
      />
    </>
  );
}

export default App;
