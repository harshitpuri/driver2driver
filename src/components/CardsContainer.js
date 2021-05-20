import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./styles/styles.css";


// Import Flags
import uk from "./assets/flags/uk.jpg";
import australia from "./assets/flags/australia.jpg";
import canada from "./assets/flags/canada.jpg";
import finland from "./assets/flags/finland.jpg";
import france from "./assets/flags/france.jpg";
import germany from "./assets/flags/germany.jpg";
import italy from "./assets/flags/italy.jpg";
import japan from "./assets/flags/japan.jpg";
import mexico from "./assets/flags/mexico.jpg";
import monaco from "./assets/flags/monaco.jpg";
import netherlands from "./assets/flags/netherlands.jpg";
import spain from "./assets/flags/spain.jpg";
import whiteFlag from "./assets/flags/whiteFlag.png";


// Import Driver Portraits
import lewisHamilton from "./assets/drivers/lewisHamilton.png";
import antonioGiovinazzi from "./assets/drivers/antonioGiovinazzi.png";
import carlosSainz from "./assets/drivers/carlosSainz.png";
import charlesLeclerc from "./assets/drivers/charlesLeclerc.png";
import danielRicciardo from "./assets/drivers/danielRicciardo.png";
import estebanOcon from "./assets/drivers/estebanOcon.png";
import fernandoAlonso from "./assets/drivers/fernandoAlonso.png";
import georgeRussell from "./assets/drivers/georgeRussell.png";
import kimiRaikkonen from "./assets/drivers/kimiRaikkonen.png";
import lanceStroll from "./assets/drivers/lanceStroll.png";
import landoNorris from "./assets/drivers/landoNorris.png";
import maxVerstappen from "./assets/drivers/maxVerstappen.png";
import mickSchumacher from "./assets/drivers/mickSchumacher.png";
import nikitaMazepin from "./assets/drivers/nikitaMazepin.png";
import pierreGasly from "./assets/drivers/pierreGasly.png";
import sebastianVettel from "./assets/drivers/sebastianVettel.png";
import sergioPerez from "./assets/drivers/sergioPerez.png";
import valtteriBottas from "./assets/drivers/valtteriBottas.png";
import yukiTsunoda from "./assets/drivers/yukiTsunoda.png";
import nicholasLatifi from "./assets/drivers/nicholasLatifi.png";

const CardsContainer = ({
  score,
  setScore,
  highScore,
  setHighScore,
  cardList,
  setCardList,
}) => {
  const driverList = [
    {
      number: "44",
      firstName: "Lewis",
      lastName: "Hamilton",
      flag: uk,
      team: "Mercedes",
      colourClass: "mercedes",
      img: lewisHamilton,
    },
    {
      number: "33",
      firstName: "Max",
      lastName: "Verstappen",
      flag: netherlands,
      team: "Red Bull",
      colourClass: "red-bull",
      img: maxVerstappen,
    },
    {
      number: "4",
      firstName: "Lando",
      lastName: "Norris",
      flag: uk,
      team: "McLaren",
      colourClass: "mclaren",
      img: landoNorris,
    },
    {
      number: "77",
      firstName: "Valtteri",
      lastName: "Bottas",
      flag: finland,
      team: "Mercedes",
      colourClass: "mercedes",
      img: valtteriBottas,
    },
    {
      number: "16",
      firstName: "Charles",
      lastName: "Leclerc",
      flag: monaco,
      team: "Ferrari",
      colourClass: "ferrari",
      img: charlesLeclerc,
    },
    {
      number: "11",
      firstName: "Sergio",
      lastName: "Perez",
      flag: mexico,
      team: "Red Bull",
      colourClass: "red-bull",
      img: sergioPerez,
    },
    {
      number: "3",
      firstName: "Daniel",
      lastName: "Ricciardo",
      flag: australia,
      team: "McLaren",
      colourClass: "mclaren",
      img: danielRicciardo,
    },
    {
      number: "55",
      firstName: "Carlos",
      lastName: "Sainz",
      flag: spain,
      team: "Ferrari",
      colourClass: "ferrari",
      img: carlosSainz,
    },
    {
      number: "31",
      firstName: "Esteban",
      lastName: "Ocon",
      flag: france,
      team: "Alpine",
      colourClass: "alpine",
      img: estebanOcon,
    },
    {
      number: "10",
      firstName: "Pierre",
      lastName: "Gasly",
      flag: france,
      team: "AlphaTauri",
      colourClass: "alpha-tauri",
      img: pierreGasly,
    },
    {
      number: "18",
      firstName: "Lance",
      lastName: "Stroll",
      flag: canada,
      team: "Aston Martin",
      colourClass: "aston-martin",
      img: lanceStroll,
    },
    {
      number: "14",
      firstName: "Fernando",
      lastName: "Alonso",
      flag: spain,
      team: "Alpine",
      colourClass: "alpine",
      img: fernandoAlonso,
    },
    {
      number: "22",
      firstName: "Yuki",
      lastName: "Tsunoda",
      flag: japan,
      team: "AlphaTauri",
      colourClass: "alpha-tauri",
      img: yukiTsunoda,
    },
    {
      number: "7",
      firstName: "Kimi",
      lastName: "Räikkönen",
      flag: finland,
      team: "Alfa Romeo Racing",
      colourClass: "alfa-romeo",
      img: kimiRaikkonen,
    },
    {
      number: "99",
      firstName: "Antonio",
      lastName: "Giovinazzi",
      flag: italy,
      team: "Alfa Romeo Racing",
      colourClass: "alfa-romeo",
      img: antonioGiovinazzi,
    },
    {
      number: "5",
      firstName: "Sebastian",
      lastName: "Vettel",
      flag: germany,
      team: "Aston Martin",
      colourClass: "aston-martin",
      img: sebastianVettel,
    },
    {
      number: "63",
      firstName: "George",
      lastName: "Russell",
      flag: uk,
      team: "Williams",
      colourClass: "williams",
      img: georgeRussell,
    },
    {
      number: "47",
      firstName: "Mick",
      lastName: "Schumacher",
      flag: germany,
      team: "Haas F1 Team",
      colourClass: "haas",
      img: mickSchumacher,
    },
    {
      number: "9",
      firstName: "Nikita",
      lastName: "Mazespin",
      flag: whiteFlag,
      team: "Haas F1 Team",
      colourClass: "haas",
      img: nikitaMazepin,
    },
    {
      number: "6",
      firstName: "Nicholas",
      lastName: "Latifi",
      flag: canada,
      team: "Williams",
      colourClass: "williams",
      img: nicholasLatifi,
    },
  ];

  const [driverListState, setDriverListState] = useState(driverList);

  useEffect(() => {
    const newDriverListState = [...driverListState];
    shuffleArray(newDriverListState);
    setDriverListState(newDriverListState);
  }, [score]);

  const handleHighScore = () => {
    if (score >= highScore) {
      setHighScore(highScore + 1);
    }
  };

  const handleScore = () => {
    setScore(() => {
      if (score === 19) {
        alert("Well done, you won!");
        resetGame();
      } else {
        return score + 1;
      }
    });
  };

  const resetGame = () => {
    setScore(0);
    setCardList([]);
  };

  const shuffleArray = (driverList) => {
    for (let i = driverList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = driverList[i];
      driverList[i] = driverList[j];
      driverList[j] = temp;
    }
  };

  const handleCardClick = (driver) => {
    shuffleArray(driverList);
    if (!cardList.includes(driver)) {
      setCardList([...cardList, driver]);
      handleScore();
      handleHighScore();
    } else {
      resetGame();
      alert("You lost, try again!");
    }
  };

  return (
    <div key="card-container" className="card-container">
      {driverListState.map((driver, index) => (
        <div
          key={driver.lastName}
          className="card-click-box"
          onClick={() => {
            handleCardClick(driver.lastName);
          }}
        >
          <Card
            number={driver.number}
            firstName={driver.firstName}
            lastName={driver.lastName}
            flag={driver.flag}
            team={driver.team}
            colourClass={driver.colourClass}
            img={driver.img}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
