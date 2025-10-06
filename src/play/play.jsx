import React from 'react'

export function Play() {
    return (
    <main className="container-fluid text-center">
      <div class="game-stats">
                <div class=""player-name>
                    Player: 
                    <span class="player-name">generic_user</span>
                </div>
                <div class="score">
                    <label for="score-count">IQ:</label>
                    <input type="text" id="score-count" value="--" readonly />
                </div>
            </div>

            <div class="notifications">
                <div class="event"><span class="player-event">Bobby</span> started a game</div>    
                <div class="event"><span class="player-event">Bobby</span> scored 27 pts</div>
                <div class="event"><span class="player-event">Jimmy</span> started a game</div>    
            </div>
            
            <div class="trivia-question">
                <h2>What is the capital of France?</h2>   
                <div class="answers">
                    <form method="get" action="game-over.html">
                        <button type="submit" id="A" class="btn btn-primary btn-lg btn-block">Answer for A goes here</button>
                        <button type="submit" id="B" class="btn btn-primary btn-lg btn-block">Answer for B goes here</button>
                        <button type="submit" id="C" class="btn btn-primary btn-lg btn-block">Answer for C goes here</button>
                        <button type="submit" id="D" class="btn btn-primary btn-lg btn-block">Answer for D goes here</button>
                    </form>
                </div> 
            </div>
    </main>
    );
}