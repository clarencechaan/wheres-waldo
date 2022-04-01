import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/" className="navbar-logo">
        findMe
      </Link>
      <Link to="/leaderboard" className="nav-link">
        leaderboard
      </Link>
    </nav>
  );
}

export default NavBar;
