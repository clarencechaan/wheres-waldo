import { useState } from "react";
import { Link } from "react-router-dom";
import { millisToMinutesAndSeconds } from "../scripts/timeConversion";

function WinningPopup({
  duration,
  username,
  setUsername,
  gameID,
  rank,
  funcs,
  setLeaderboard,
  levelID,
}) {
  const time = millisToMinutesAndSeconds(duration);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSubmitClick() {
    setHasSubmitted(true);

    const input = document.querySelector("#name-input");
    input.setAttribute("readonly", true);
    const user = input.value;
    setUsername(user);

    funcs.writeUsername({ gameID, username: user });
    setLeaderboard((prevLeaderboard) => {
      const resultLeaderboard = [
        ...prevLeaderboard,
        { username: user, gameID, duration, start: Date.now(), levelID },
      ];
      resultLeaderboard.sort((a, b) => (a.duration < b.duration ? -1 : 1));
      return resultLeaderboard;
    });
  }

  return (
    <div className="winning-popup">
      <div className="winning-title">You win!</div>
      <div className="winning-message">
        <div>Your time was {time}</div> <div>You placed # {rank}</div>
      </div>
      <div className="submit-time">
        <label htmlFor="name-input" id="name-label">
          Name:{" "}
        </label>
        <input type="text" defaultValue={username} id="name-input" />
        {!hasSubmitted ? (
          <button className="submit-btn active" onClick={handleSubmitClick}>
            Submit Time
          </button>
        ) : (
          <button className="submit-btn inactive" disabled>
            Submitted
          </button>
        )}
      </div>
      <div className="btns-container">
        <Link to="/">
          <button type="button" className="winning-popup-btn">
            Level Select
          </button>
        </Link>
        <Link to="/leaderboard">
          <button type="button" className="winning-popup-btn">
            Leaderboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WinningPopup;
