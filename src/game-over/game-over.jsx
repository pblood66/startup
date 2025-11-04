import React from 'react'
import "./game-over.css"
import "../scores/scores.css"
import { SocketNotifications } from '../play/notifications';


export function Game_Over() {
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        setScores(scores);
      });
  }, []);
  
  // Sort descending and limit to top 10
  const sortedScores = [...scores].sort((a, b) => b.score - a.score).slice(0, 10);

  const scoreRows = [];
  if (sortedScores.length) {
    for (const [i, score] of sortedScores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key="0">
        <td colSpan="4">Be the first to score</td>
      </tr>
    );
  }

    return (
    <main className="container-fluid text-center">
        <SocketNotifications />

        <div className="game-over-title">
            <h1>Game Over</h1>
            <img src="sad-emoji.webp" width="100px" />
        </div>
        <div className="scores">
            <h2>High Scores</h2>
            <table>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                </thead>
                <tbody id='scores'>{scoreRows}</tbody>
            </table>
        </div>
        <div className="play-again">
            <form method="get" action="./play">
                <button type="submit" className="btn btn-primary">Play Again</button>
            </form>
        </div>
    </main>
    );
}