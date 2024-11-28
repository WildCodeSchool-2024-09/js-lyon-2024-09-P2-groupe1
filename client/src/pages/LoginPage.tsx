import { useState } from "react";
import Logo from "../assets/images/Logo_RT.png";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";
import Input from "../components/ui/input";

function LoginPage() {
  const [localUserName, setLocalUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setShowUserLogo, setUserName, setIsLoggedIn } = useUserContext(); //Utilisation UserContext
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Condition remplissage formulaire sinon non-validation

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
            <Input
              type="text"
              id="identifiant"
              placeholder="username"
              value={localUserName}
              onChange={(e) => setLocalUserName(e.target.value)}
              required
            />
          </div>
          <div className="label2">
            <label htmlFor="mdp">Password</label>
            <input
              id="password"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="Homebutton">
            Connect
          </button>
        </form>
      </div>
    </section>
  );
}
export default LoginPage;
