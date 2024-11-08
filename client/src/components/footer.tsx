import "./footer.css";
import FB from "../assets/images/facebook.png";
import IG from "../assets/images/instagram.png";
import X from "../assets/images/twitter.png";

function Footer() {
  return (
    <section className="footer">
      <h2>© TEAM TOTOMATOES 🍅 - WCS LYON 2024</h2>
      <div id="networks">
        <button type="button">
          <img src={IG} id="IG" alt="Instagram_icon" />
        </button>
        <button type="button">
          <img src={FB} id="FB" alt="Facebook_icon" />
        </button>
        <button type="button">
          <img src={X} id="X" alt="Twitter_icon" />
        </button>
      </div>
    </section>
  );
}

export default Footer;
