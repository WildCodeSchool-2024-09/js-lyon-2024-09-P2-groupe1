import { Link } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";
import Logo from "../assets/images/Logo_RT.png";
import Home from "../assets/images/home2.png";
import Star from "../assets/images/star2.png";
import "./header.css";

function Header() {
  const {
    showUserLogo,
    userName,
    isLoggedIn,
    setIsLoggedIn,
    setUserName,
    setShowUserLogo,
  } = useUserContext();

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setShowUserLogo(false);
  };

  return (
    <section className="header">
      <Link to="/">
        <img src={Logo} id="logo" alt="Logo_Rotten_Tomatoes" />
      </Link>
      <div id="navbar">
        {showUserLogo && (
          <p id="username">Bonjour {userName}, vous êtes connecté</p>
        )}
        <Link to="/">
          <button type="button" className="buttonHomeStar">
            <img src={Home} id="home" alt="Home_Icon" />
          </button>
        </Link>

        <div className="star-container">
          <Link to="/favorites">
            <button type="button" className="buttonHomeStar">
              <img src={Star} id="star" alt="Star_Icon" />
            </button>
          </Link>
        </div>
        {isLoggedIn ? (
          <button type="button" id="Log_Out" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button type="button" id="Log_In">
              Log In
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}

export default Header;
