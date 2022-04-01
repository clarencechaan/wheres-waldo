import "../styles/Home.css";
import LevelPreview from "./LevelPreview";
import NavBar from "./NavBar";

function Home({ levels }) {
  return (
    <div className="Home">
      <NavBar />
      <div className="home-content">
        <div className="home-title">Choose a level</div>
        <div className="level-previews-container">
          {levels.map((level) => (
            <LevelPreview level={level} key={level.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
