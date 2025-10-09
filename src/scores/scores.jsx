import React from 'react'
import './scores.css'

export function Scores() {
    return (
    <main className="container-fluid text-center">
      <div className="game-stats">
                  <div className=""player-name>
                      Player: 
                      <span className="player-name">generic_user</span>
                  </div>
              </div>
              <div className="notifications">
                  <div className="event"><span className="player-event">Bobby</span> started a game</div>    
                  <div className="event"><span className="player-event">Bobby</span> scored 27 pts</div>
                  <div className="event"><span className="player-event">Jimmy</span> started a game</div>    
              </div>

              <div className="scores">
                  <h2>High Scores</h2>
                  <table>
                      <tbody>
                          <tr>
                              <td className="player-name">1. Billy</td>
                              <td className="score">256</td>
                          </tr>
                          <tr>
                              <td className="player-name">2. Bobby</td>
                              <td className="score">251</td>
                          </tr>
                          <tr>    
                              <td className="player-name">3. Johnny</td>
                              <td className="score">189</td>
                          </tr>
                          <tr>
                              <td className="player-name">4. Kyle</td>
                              <td className="score">175</td>
                          </tr>
                          <tr>
                              <td className="player-name">5. Billy</td>
                              <td className="score">142</td>
                          </tr>
                          <tr>
                              <td className="player-name">6. Bobby</td>
                              <td className="score">121</td>
                          </tr>
                          <tr>
                              <td className="player-name">7. Tommy</td>
                              <td className="score">90</td>
                          </tr>
                          <tr>
                              <td className="player-name">8. Johnny</td>
                              <td className="score">54</td>
                          </tr>
                          <tr>
                              <td className="player-name">9. Sammy</td>
                              <td className="score">33</td>
                          </tr>
                          <tr>
                              <td className="player-name">10. Tommy</td>
                              <td className="score">17</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
      </main>
    );
}