import React from 'react'
import './scores.css'

export function Scores() {
    return (
    <main class="container-fluid text-center">
      <div class="game-stats">
                  <div class=""player-name>
                      Player: 
                      <span class="player-name">generic_user</span>
                  </div>
              </div>
              <div class="notifications">
                  <div class="event"><span class="player-event">Bobby</span> started a game</div>    
                  <div class="event"><span class="player-event">Bobby</span> scored 27 pts</div>
                  <div class="event"><span class="player-event">Jimmy</span> started a game</div>    
              </div>

              <div class="scores">
                  <h2>High Scores</h2>
                  <table>
                      <tbody>
                          <tr>
                              <td class="player-name">1. Billy</td>
                              <td class="score">256</td>
                          </tr>
                          <tr>
                              <td class="player-name">2. Bobby</td>
                              <td class="score">251</td>
                          </tr>
                          <tr>    
                              <td class="player-name">3. Johnny</td>
                              <td class="score">189</td>
                          </tr>
                          <tr>
                              <td class="player-name">4. Kyle</td>
                              <td class="score">175</td>
                          </tr>
                          <tr>
                              <td class="player-name">5. Billy</td>
                              <td class="score">142</td>
                          </tr>
                          <tr>
                              <td class="player-name">6. Bobby</td>
                              <td class="score">121</td>
                          </tr>
                          <tr>
                              <td class="player-name">7. Tommy</td>
                              <td class="score">90</td>
                          </tr>
                          <tr>
                              <td class="player-name">8. Johnny</td>
                              <td class="score">54</td>
                          </tr>
                          <tr>
                              <td class="player-name">9. Sammy</td>
                              <td class="score">33</td>
                          </tr>
                          <tr>
                              <td class="player-name">10. Tommy</td>
                              <td class="score">17</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
      </main>
    );
}