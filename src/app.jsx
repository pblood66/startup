import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { Game_Over } from './game-over/game-over';
import { About } from './about/about';
import { AuthState } from './login/authstate';

import './app.css';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  

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
                    {authState === AuthState.Authenticated && (
                      <li className="menu-item">
                        <NavLink to="/play" className="nav-link">
                          Play
                        </NavLink>
                      </li>
                    )}
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

        <main>
          <Routes>
            <Route path="/" element={<Login 
              userName ={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
              exact
              />} 
            />
            <Route path="/play" element={<Play 
              userName={userName}
              />}
            />
            <Route path="/scores" element={<Scores />} />
            <Route path="/about" element={<About />} />
            <Route path="/game-over" element={<Game_Over />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

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