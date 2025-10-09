import React from 'react'
import Button from 'react-bootstrap/Button';

import "./play.css"


export function Play() {
    return (
    <main classNameName="container-fluid text-center">
      <div className="game-stats">
                <div className=""player-name>
                    Player: 
                    <span className="player-name">generic_user</span>
                </div>
                <div className="score">
                    <label for="score-count">IQ:</label>
                    <input type="text" id="score-count" value="--" readonly />
                </div>
            </div>

            <div className="notifications">
                <div className="event"><span className="player-event">Bobby</span> started a game</div>    
                <div className="event"><span className="player-event">Bobby</span> scored 27 pts</div>
                <div className="event"><span className="player-event">Jimmy</span> started a game</div>    
            </div>
            
            <div className="trivia-question">
                <h2>What is the capital of France?</h2>   
                <div className="answers">
                    <form method="get" action="/game-over">
                        <button type="submit" id="A" className="btn btn-primary btn-lg btn-block">Answer for A goes here</button>
                        <button type="submit" id="B" className="btn btn-primary btn-lg btn-block">Answer for B goes here</button>
                        <button type="submit" id="C" className="btn btn-primary btn-lg btn-block">Answer for C goes here</button>
                        <button type="submit" id="D" className="btn btn-primary btn-lg btn-block">Answer for D goes here</button>
                    </form>
                </div> 
            </div>
    </main>
    );
}