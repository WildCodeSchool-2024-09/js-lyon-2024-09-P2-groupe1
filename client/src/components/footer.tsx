import "./footer.css";
import FB from "../assets/images/facebook.png";
import IG from "../assets/images/instagram.png";
import X from "../assets/images/twitter.png";

function Footer() {
  return (
    <section className="footer">
      <h2>© TEAM TOTOMATOES 🍅 - WCS LYON 2024</h2>
      <div id="networks">
        <a href="https://www.instagram.com/">
          <button type="button">
            <img src={IG} id="IG" alt="Instagram_icon" />
          </button>
        </a>
        <a href="https://www.facebook.com/?locale=fr_FR">
          <button type="button">
            <img src={FB} id="FB" alt="Facebook_icon" />
          </button>
        </a>
        <a href="https://x.com/?logout=1732100753624">
          <button type="button">
            <img src={X} id="X" alt="Twitter_icon" />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Footer;
