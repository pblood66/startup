import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { SocketNotifications } from './notifications';

import "./play.css"


export function Play(props) {
    const [question, setQuestion] = React.useState('Loading...')
    const [answers, setAnswers] = React.useState(['Unknown', 'Unknown', 'Unknown', 'Unknown'])
    const [score, setScore] = React.useState(0);

    const navigate = useNavigate();

    React.useEffect(() => {
        setQuestion("What is the capital of France?")
        setAnswers(['Paris', "Rome", "Berlin", "Madrid"])
    }, []);

    const handleAnswerClick = (answer) => {
        if (answer === 'Paris') {
        setScore(score + 1);
        } else {
        navigate('/game-over');
        }
    };

    return (
    <main className="container-fluid text-center">
      <div className="game-stats">
                <div className=""player-name>
                    Player: 
                    <span className="player-name">generic_user</span>
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