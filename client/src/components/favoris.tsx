import Footer from "./footer";
import Header from "./header";
import Moviecardfavorite from "./Moviecardfavorite";

const moviesFavorite = [
  {
    title: "Mon film préféré",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un film sur les tomates farcies",
    resume:
      "Dans une galaxie lointaine très lointaine, la princesse tomate se retrouve capturée par l'empire, seul Luke Skytomate peut empêcher la rebellion de courir à sa",
  },
  {
    title: "mon film préféré 2: le retour",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un deuxième film sur les tomates farcies",
    resume:
      "Dans une galaxie lointaine très lointaine, la même chose que le 1 mais en 2 ",
  },
  {
    title: "La vengeance de mon film préféré",
    image:
      "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
    description: "un deuxième film sur les tomates farcies",
    resume:
      "Dans une galaxie lointaine très lointaine, la même chose que le 2 mais en 3 ",
  },
];

function Favoris() {
  return (
    <>
      <Header />
      <Moviecardfavorite movies={moviesFavorite} />
      <Footer />
    </>
  );
}

export default Favoris;
