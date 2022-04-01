import { Link } from "react-router-dom";
import "../styles/GameNavBar.css";

function GameNavBar({ level }) {
  console.log(level);
  return (
    <nav className="GameNavBar">
      <Link to="/" className="navbar-logo">
        findMe
      </Link>
      <Link to="/leaderboard" className="nav-link">
        leaderboard
      </Link>
      <div className="game-info">
        <div className="game-nav-bar-level-title">{level.title}</div>
        <div className="key">
          <img src={level.keys[0].imgURL} alt="" className="key-img" />
          <div className="key-title">{level.keys[0].title}</div>
        </div>
        <div className="key">
          <img src={level.keys[1].imgURL} alt="" className="key-img" />
          <div className="key-title">{level.keys[1].title}</div>
        </div>
        <div className="key">
          <img src={level.keys[2].imgURL} alt="" className="key-img" />
          <div className="key-title">{level.keys[2].title}</div>
        </div>
      </div>
    </nav>
  );
}

export default GameNavBar;
