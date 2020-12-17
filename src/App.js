import "./App.css";
import { useState } from "react";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarsDisplay";
import utils from "./utils";

const App = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState([1, 2, 3, 4, 5]);
  const [candidateNumbers, setCandidateNumbers] = useState([2, 3]);

  const candidatesAreWrong = utils.sum(candidateNumbers) > stars;

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return "used";
    }
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayNumber
              key={number}
              number={number}
              status={numberStatus(number)}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};
export default App;
