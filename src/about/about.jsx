import React from 'react'
import './about.css'
import { SocketNotifications } from '../play/notifications';

export function About() {
    return (
    <main className="container-fluid text-center">
        <SocketNotifications />
        
        <h2>About</h2>

        <div className="picture">
            <img src="trivia-pursuit.jpg" className="picture-img" width="300px" alt="trivia" />
        </div>

        <div className="about-section">
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