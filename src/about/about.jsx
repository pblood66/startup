import React from 'react'
import './about.css'


export function About() {
    return (
    <main className="container-fluid text-center">
      <div class="notifications">
                <div class="event"><span class="player-event">Bobby</span> started a game</div>    
                <div class="event"><span class="player-event">Bobby</span> scored 27 pts</div>
                <div class="event"><span class="player-event">Jimmy</span> started a game</div>    
            </div>
            <h2>About</h2>

            <div class="picture">
                <img src="./images/trivia-pursuit.jpg" width="300px" />
            </div>

            <div class="about-section">
                <p>
                    Trivia Run is a fast-paced game that combines the excitement of game shows like Jeopardy with the accessibility of mobile play. 
                    Unlike traditional trivia apps, it focuses on niche knowledge and real-time competition, letting you challenge friends and family to prove who’s the true expert. 
                    Whether it’s sports, movies, or history, Trivia Run turns your knowledge into a fun, competitive experience you can play anytime, anywhere.
                </p>
    
                <p>
                    Trivia Run is a basic trivia game app that allows players to play games of trivia. 
                    Trivia Run implements basic score keeping and is able to display high scores. 
                    Players are able to compete and compare their level of knowledge in niche areas of information. 
                </p>
            </div>
    </main>
    );
}