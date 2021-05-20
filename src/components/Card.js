import "./styles/styles.css";
import "./styles/cardStyle.css";

const Card = ({
  number,
  firstName,
  lastName,
  flag,
  team,
  colourClass,
  img,
}) => {
  return (
    <div id={`${firstName}${lastName}`} className={`card-wrapper ${colourClass}`}>
      <div className="driver-number">{number}</div>
      <div className="card-row">
        <div className="driver-title">
          <div className={`colour-bar ${colourClass}`}></div>
          <div className="name-wrapper">
            <div className="first-name">{firstName}</div>
            <div className="last-name">{lastName}</div>
          </div>
        </div>
        <div className="flag-wrapper">
          <img className="flag-img" src={flag} alt="Driver Flag" />
        </div>
      </div>

      <div className="team">{team}</div>
      <div className="driver-portrait">
        <img className="driver-img" src={img} alt="Driver Portrait" />
      </div>
    </div>
  );
};

export default Card;
