import "./App.css";
import Moviecard from "./components/Moviecard";

const movie = [
  {
    title: "les tomates de l'espace",
    image: "../assets/images/tomates-farcies.jpeg",
    description: "un film sur les tomates farcies",
    id: 1,
  },
];

function App() {
  return (
    <>
      <Moviecard movie={movie} />
    </>
  );
}

export default App;
