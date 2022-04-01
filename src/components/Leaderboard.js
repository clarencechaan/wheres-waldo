import NavBar from "./NavBar";
import "../styles/Leaderboard.css";

function Leaderboard() {
  return (
    <div className="Leaderboard">
      <NavBar />
      <div className="leaderboard-content">
        <div className="leaderboard-title">Leaderboard</div>
      </div>
    </div>
  );
}

export default Leaderboard;
