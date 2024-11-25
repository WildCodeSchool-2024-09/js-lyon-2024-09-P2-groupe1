import { useState } from "react";
import Logo from "../assets/images/Logo_RT.png";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";

function LoginPage() {
  const [localUserName, setLocalUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setShowUserLogo, setUserName, setIsLoggedIn } = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (localUserName && password) {
      setShowUserLogo(true);
      setUserName(localUserName);
      setIsLoggedIn(true);
      navigate("/");
    }
    setLocalUserName("");
    setPassword("");
  };

  return (
    <section className="loginPage">
      <div className="formulaire">
        <img src={Logo} id="logo1" alt="Logo_Rotten_Tomatoes" />
        <form onSubmit={handleSubmit}>
          <div className="label1">
            <label htmlFor="identifiant">Username</label>
            <input
              id="identifiant"
              type="text"
              required
              value={localUserName}
              onChange={(e) => setLocalUserName(e.target.value)}
            />
          </div>
          <div className="label2">
            <label htmlFor="mdp">Password</label>
            <input
              id="mdp"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="Homebutton">
            Se Connecter
          </button>
        </form>
      </div>
    </section>
  );
}
export default LoginPage;
