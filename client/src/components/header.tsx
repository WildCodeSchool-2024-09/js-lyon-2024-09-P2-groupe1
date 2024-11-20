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
      <img src={Logo} id="logo" alt="Logo_Rotten_Tomatoes" />
      <div id="navbar">
        {showUserLogo && <img src={User} id="user" alt="user" />}
        <button type="button" className="buttonHomeStar">
          <img src={Home} id="home" alt="Home_Icon" />
        </button>
        <div className="star-container">
          <button type="button" className="buttonHomeStar">
            <img src={Star} id="star" alt="Star_Icon" />
          </button>
        </div>
        <button type="button" id="Log_In" className="buttonLogIn">
          Log In
        </button>
      </div>
    </section>
  );
}

export default Header;
