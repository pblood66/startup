import React from 'react'
import './scores.css'

import { SocketNotifications } from '../play/notifications';

export function Scores() {  
    const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
        setScores(JSON.parse(scoresText));
        }
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
        <div className="game-stats">
            <div className=""player-name>
                Player: 
                <span className="player-name">generic_user</span>
            </div>
        </div>
              
        <SocketNotifications />   

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
    </main>
    );
}