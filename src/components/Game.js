import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Game.css";
import GameNavBar from "./GameNavBar";
import { cursor, markerCoordsInPercent } from "../cursor";
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";

function Game() {
  const location = useLocation();
  const level = location.state;

  const [remainingKeys, setRemainingKeys] = useState(level.keys);

  useEffect(cursor, []);

  const functions = getFunctions();
  connectFunctionsEmulator(functions, "localhost", 5001);
  const checkIfCoordsCorrect = httpsCallable(functions, "checkIfCoordsCorrect");

  function handleKeySelected(key) {
    console.log("key Selected");
    console.log(markerCoordsInPercent);

    const reqObj = {
      xPercent: markerCoordsInPercent.xPercent,
      yPercent: markerCoordsInPercent.yPercent,
      levelID: level.id,
      keyID: key.id,
    };

    checkIfCoordsCorrect(reqObj).then((result) => {
      const reqIsCorrect = result.data;
      console.log(reqIsCorrect);
      if (reqIsCorrect) {
        setRemainingKeys((prevRemainingKeys) => {
          const index = prevRemainingKeys.indexOf(key);
          return [
            ...prevRemainingKeys.slice(0, index),
            ...prevRemainingKeys.slice(index + 1),
          ];
        });
      }
    });
  }

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
                <button
                  className="key-btn"
                  key={key.id}
                  onClick={() => {
                    handleKeySelected(key);
                  }}
                >
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
