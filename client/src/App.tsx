import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
