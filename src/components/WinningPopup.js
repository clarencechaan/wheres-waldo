import { Link } from "react-router-dom";
import millisToMinutesAndSeconds from "../scripts/timeConversion";

function WinningPopup(props) {
  const time = millisToMinutesAndSeconds(props.duration);

  return (
    <div className="winning-popup">
      <div className="winning-title">You win!</div>
      <div className="winning-message">
        <div>Your time was {time}</div> <div>You placed #</div>
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
