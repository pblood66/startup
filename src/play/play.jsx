import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { SocketNotifications } from './notifications';
import "./play.css";

export function Play() {
  const [question, setQuestion] = React.useState('Loading...');
  const [answers, setAnswers] = React.useState(['Unknown', 'Unknown', 'Unknown', 'Unknown']);
  const [score, setScore] = React.useState(0);

  const username = "generic"

  const navigate = useNavigate();

  // Load score from localStorage when the component mounts
  React.useEffect(() => {
    const savedScore = localStorage.getItem('playerScore');
    if (savedScore !== null) {
      setScore(parseInt(savedScore, 10));
    }

    setQuestion("What is the capital of France?");
    setAnswers(['Paris', "Rome", "Berlin", "Madrid"]);
  }, []);

  // Save score to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('playerScore', score.toString());
  }, [score]);

  const handleAnswerClick = (answer) => {
    if (answer === 'Paris') {
      setScore((prev) => prev + 1);
    } else {
        saveHighScore();
        navigate('/game-over');
        setScore(0);
    }
  };

  
  function saveHighScore() {
    const currentScores = JSON.parse(localStorage.getItem('scores') || '[]');
    const newScore = {
      name: username,
      score: score,
    };

    // Add new score and sort descending
    const updatedScores = [...currentScores, newScore].sort((a, b) => b.score - a.score);

    // Keep only top 10
    const topScores = updatedScores.slice(0, 10);

    localStorage.setItem('scores', JSON.stringify(topScores));
  }

  return (
    <main className="container-fluid text-center">
        <div className="game-stats">
            <div className="player-name">
            Player: <span className="player-name">generic_user</span>
            </div>
            <div className="score">
                <label htmlFor="score-count">IQ:</label>
                <input type="text" id="score-count" value={score} readOnly />
            </div>
        </div>

        <SocketNotifications />

        <div className="trivia-question">
            <h2>{question}</h2>
            <div className="answers">
                {answers.map((answer, index) => (
                <Button
                    key={index}
                    variant="primary"
                    size="lg"
                    className="btn-block mb-2"
                    onClick={() => handleAnswerClick(answer)}
                    >
                    {answer}
                </Button>
                ))}
            </div>
        </div>
    </main>
  );
}
