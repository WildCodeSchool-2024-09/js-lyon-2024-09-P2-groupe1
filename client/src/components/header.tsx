import { Link } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";
import Logo from "../assets/images/Logo_RT.png";
import Home from "../assets/images/home2.png";
import Star from "../assets/images/star2.png";
import User from "../assets/images/user.png";
import "./header.css";

function Header() {
  const { showUserLogo } = useUserContext();
  return (
    <section className="header">
      <Link to="/">
        <img src={Logo} id="logo" alt="Logo_Rotten_Tomatoes" />
      </Link>
      <div id="navbar">
        {showUserLogo && <img src={User} id="user" alt="user" />}
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
        <Link to="/login">
          <button type="button" id="Log_In" className="buttonLogIn">
            Log In
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Header;
