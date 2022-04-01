import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Game.css";
import GameNavBar from "./GameNavBar";
import cursor from "../cursor";

function Game() {
  const location = useLocation();
  const level = location.state;

  const [remainingKeys, setRemainingKeys] = useState(level.keys);

  useEffect(cursor, []);

  return (
    <div className="Game">
      <GameNavBar level={level} remainingKeys={remainingKeys} />
      <div className="game-content">
        <span className="circle"></span>
        <span className="marker" hidden></span>
        <span className="key-dropdown" hidden>
          <div className="keys-container">
            {remainingKeys.map((key) => {
              return (
                <button className="key-btn" key={key.id}>
                  {key.title}
                </button>
              );
            })}
          </div>
        </span>
        <img src={level.imgURL} alt="" className="game-level-img" />
      </div>
    </div>
  );
}

export default Game;
