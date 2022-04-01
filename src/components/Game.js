import { useLocation } from "react-router-dom";
import "../styles/Game.css";
import GameNavBar from "./GameNavBar";

function Game() {
  const location = useLocation();
  const level = location.state;

  console.log(level);

  return (
    <div className="Game">
      <GameNavBar level={level} />
      <div className="game-content">
        <img src={level.imgURL} alt="" className="game-level-img" />
      </div>
    </div>
  );
}

export default Game;
