import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { SocketNotifications } from './notifications';
import "./play.css";
import { gameEvents, GameNotifier } from './gameNotifier';

export function Play(props) {
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const userName = props.userName;
  const navigate = useNavigate();

  const decodeHTML = (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  const fetchQuestionsBatch = React.useCallback(async () => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
      const data = await response.json();
      const processed = data.results.map((q) => {
        const correct = decodeHTML(q.correct_answer);
        const incorrect = q.incorrect_answers.map(decodeHTML);
        const shuffledAnswers = [...incorrect, correct].sort(() => Math.random() - 0.5);

        return {
          question: decodeHTML(q.question),
          correct,
          answers: shuffledAnswers,
        };
      });
      setQuestions(processed);
      setCurrentIndex(0);
      GameNotifier.broadcastEvent(userName, gameEvents.Start, {});
    } catch (err) {
      console.error("Error fetching questions:", err);
      setQuestions([{ question: "Failed to load questions.", answers: [], correct: "" }]);
    }
  }, []);

  React.useEffect(() => {
    fetchQuestionsBatch();
  }, [fetchQuestionsBatch]);

  const handleAnswerClick = (answer) => {
    const current = questions[currentIndex];
    if (!current) return;

    if (answer === current.correct) {
      setScore((prev) => prev + 1);

      const nextIndex = currentIndex + 1;

      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
      } else {
        fetchQuestionsBatch();
      }
    } else {
      saveHighScore();
      navigate('/game-over');
      setScore(0);
    }
  };

  async function saveHighScore() {
    const newScore = { name: userName, score };
    GameNotifier.broadcastEvent(userName, gameEvents.End, newScore);

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });
  }

  const current = questions[currentIndex] || {};
  const { question, answers } = current;

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
        <h2>{question || "Loading..."}</h2>
        <div className="answers">
          {answers && answers.length > 0 ? (
            answers.map((answer, index) => (
              <Button
                key={index}
                variant="primary"
                size="lg"
                className="btn-block mb-2"
                onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </Button>
            ))
          ) : (
            <p>Loading answers...</p>
          )}
        </div>
      </div>
    </main>
  );
}
