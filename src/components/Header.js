import "./styles/styles.css";

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <div className="title-header">
        <br></br>
        <div>
          <h1 className="page-title">Driver2Driver</h1>
        </div>
        <div>
          <h2 className="page-title">
            Click all 20 drivers without hitting the same one twice!
          </h2>
        </div>
      </div>
      <br></br>
      <div className="score-header">
        <div className="score-wrapper">
          <div className="score-title">Current Score: </div>
          <div className="score">{score}</div>
        </div>
        <div className="score-wrapper">
          <div className="score-title">High Score: </div>
          <div className="score">{highScore}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
