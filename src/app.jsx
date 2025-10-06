import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="container-fluid">
            <div className="brand">
                <h1>Trivia Run</h1>
                <img src="logo.jpg" width="80px" alt="logo" />
            </div>
            
            <nav>
                <ul>
                    <li className="menu-item">
                      <NavLink to="/" end className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/play" className="nav-link">
                        Play
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/scores" className="nav-link">
                        High Scores
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/about" className="nav-link">
                        About
                      </NavLink>
                    </li>
                </ul>
            </nav>
        </header>

        <main>App components go here</main>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/play" element={<Play />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>       
          <div className="container-fluid">
            <span className="text-reset">Patrick Blood</span>
            <a className="text-reset" href="https://github.com/pblood66/startup">GitHub</a>
          </div>  
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}