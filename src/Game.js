import React, { useState } from "react";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";

// Component for Header - title, score
// Component for card - generate card based on images passed in
// Component for card container - set state of cards and shuffle new card output each time
// Component for game logic - track state of current score, high score and array containing cards clicked so far
// Functions to include handleScore, handleHighScore, resetScore,

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardList, setCardList] = useState([]);

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <CardsContainer
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        cardList={cardList}
        setCardList={setCardList}
      />
    </div>
  );
};

export default Game;