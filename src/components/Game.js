import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Game.css";
import GameNavBar from "./GameNavBar";
import cursor from "../cursor";

function Game() {
  const location = useLocation();
  const level = location.state;

  useEffect(cursor, []);

  return (
    <div className="Game">
      <GameNavBar level={level} />
      <div className="game-content">
        <span class="circle"></span>
        <span class="marker" hidden></span>
        <span class="key-dropdown" hidden></span>
        <img src={level.imgURL} alt="" className="game-level-img" />
      </div>
    </div>
  );
}

export default Game;
