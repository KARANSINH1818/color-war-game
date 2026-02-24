import { useState, useEffect } from "react";
import "./ColorGame.css";
import Button from "@mui/material/Button";

export default function LodoBoard() {

  const [moves, setMoves] = useState({
    Orange: 0,
    Red: 0,
    Green: 0,
    Blue: 0,
    Purple: 0,
    Yellow: 0,
  });

  const [time, setTime] = useState(30);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  /* ✅ MOVE THIS FUNCTION ABOVE useEffect */
  const decideWinner = () => {
    const max = Math.max(...Object.values(moves));

    const winColor = Object.keys(moves).find(
      (color) => moves[color] === max
    );

    setWinner(winColor);
    setGameOver(true);
  };

  /* Timer Logic */
  useEffect(() => {
    if (time > 0 && !gameOver) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (time === 0) {
      decideWinner();
    }

  }, [time, gameOver, moves]); // ✅ added moves dependency

  const updateMove = (color) => {
    if (gameOver) return;

    setMoves((prev) => ({
      ...prev,
      [color]: prev[color] + 1,
    }));
  };

  const resetGame = () => {
    setMoves({
      Orange: 0,
      Red: 0,
      Green: 0,
      Blue: 0,
      Purple: 0,
      Yellow: 0,
    });

    setTime(30);
    setWinner(null);
    setGameOver(false);
  };

  const totalMoves = Object.values(moves).reduce(
    (sum, val) => sum + val,
    0
  );

  return (
    <div className="container">

      <h1>Color War Game 🎮</h1>

      <h2>⏳ Time Left: {time}s</h2>

      <h3>Total Moves: {totalMoves}</h3>

      {winner && <h2 className="winner">{winner} Wins! 🏆</h2>}

      <div className="board">
        {Object.keys(moves).map((color) => (
          <div key={color} className="card">

            <p>{color} Moves</p>
            <h2>{moves[color]}</h2>

            <button
              className={color.toLowerCase()}
              onClick={() => updateMove(color)}
              disabled={gameOver}
            >
              +1
            </button>

          </div>
        ))}
      </div>

      <Button
        onClick={resetGame}
        variant="contained"
        color="error"
        className="reset-btn"
        sx={{
          padding: "15px 50px",
          fontSize: "18px",
          marginTop: "40px",
          borderRadius: "12px"
        }}
      >
        RESET GAME
      </Button>

    </div>
  );
}