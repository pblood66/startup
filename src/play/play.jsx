import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { SocketNotifications } from './notifications';
import "./play.css";

export function Play(props) {
  const [question, setQuestion] = React.useState('Loading...');
  const [answers, setAnswers] = React.useState(['Unknown', 'Unknown', 'Unknown', 'Unknown']);
  const [correct, setCorrect] = React.useState('');
  const [score, setScore] = React.useState(0);

  const userName = props.userName

  const navigate = useNavigate();

  const decodeHTML = (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

 const fetchQuestion = () => {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        const result = data.results[0];
        console.log(result);

        const question = decodeHTML(result.question);
        const correct = decodeHTML(result.correct_answer);
        const incorrect = result.incorrect_answers.map(decodeHTML);

        const shuffledAnswers = [...incorrect, correct].sort(() => Math.random() - 0.5);

        setQuestion(question);
        setAnswers(shuffledAnswers);
        setCorrect(correct);
      })
      .catch((err) => {
        console.error("Error fetching question:", err);
        setQuestion("Failed to load question.");
        setAnswers([]);
      });
  };

  React.useEffect(() => {
    fetchQuestion();
  }, []);

  // Save score to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('playerScore', score.toString());
  }, [score]);

  const handleAnswerClick = (answer) => {
    if (answer === correct) {
      setScore((prev) => prev + 1);
      fetchQuestion();
    } else {
        saveHighScore();
        navigate('/game-over');
        setScore(0);
    }
  };

  
  function saveHighScore() {
    const currentScores = JSON.parse(localStorage.getItem('scores') || '[]');
    const newScore = {
      name: userName,
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
            Player: <span className="player-name">{userName}</span>
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
