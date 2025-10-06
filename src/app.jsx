import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
      <header class="container-fluid">
          <div class="brand">
              <h1>Trivia Run</h1>
              <img src="logo.jpg" width="80px" />
          </div>
          
          <nav >
              <ul>
                  <li class="menu-item"><a class="nav-link" href="index.html">Home</a></li>
                  <li class="menu-item"><a class="nav-link" href="play.html">Play</a></li>
                  <li class="menu-item"><a class="nav-link" href="scores.html">High Scores</a></li>
                  <li class="menu-item"><a class="nav-link" href="about.html">About</a></li>

              </ul>
          </nav>
      </header>

      <main>App components go here</main>

      <footer>       
        <div class="container-fluid">
          <span class="text-reset">Patrick Blood</span>
          <a class="text-reset" href="https://github.com/pblood66/startup">GitHub</a>
        </div>  
      </footer>
    </div>
  );
}