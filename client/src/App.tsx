import Moviecard from "./components/Moviecard";
import Footer from "./components/footer";
import Header from "./components/header";

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
  {
    title: "Les tomates de l'espace 3: la vengeance",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un troisième film sur les tomates farcies",
    id: 7,
  },
  {
    title: "Les tomates de l'espace 3: la vengeance",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un troisième film sur les tomates farcies",
    id: 8,
  },
  {
    title: "Les tomates de l'espace 3: la vengeance",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un troisième film sur les tomates farcies",
    id: 9,
  },
];

function App() {
  return (
    <>
      <Header />
      <Moviecard
        movies={movies}
        link={
          "https://www.marmiton.org/recettes/recette_tomates-farcies-facile_63622.aspx"
        }
      //* le link n'est pas bon car useNavigate doit permettre de se déplacer au sein du router
      />
      <Footer />
    </>
  );
}

export default App;
