import { Link } from "react-router-dom";
import "../styles/GameNavBar.css";

function GameNavBar({ level, remainingKeys }) {
  console.log(remainingKeys);
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
        {level.keys.map((key) => {
          return remainingKeys.includes(key) ? (
            <div className="key" key={key.id}>
              <img src={key.imgURL} alt="" className="key-img" />
              <div className="key-title">{key.title}</div>
            </div>
          ) : (
            <div className="key found" key={key.id}>
              <img src={key.imgURL} alt="" className="key-img" />
              <div className="key-title">{key.title}</div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default GameNavBar;
