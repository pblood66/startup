# Trivia Run

[My Notes](notes.md)

Trivia Run is a basic trivia game app that will allow players to play games of trivia. It will implement basic score keeping and able to display high scores. Players will be able to compete and compare their level of knowledge in niche areas of information. 

## 🚀 Specification Deliverable
For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Trivia Run is a fast-paced game that combines the excitement of game shows like Jeopardy with the accessibility of mobile play. Unlike traditional trivia apps, it focuses on niche knowledge and real-time competition, letting you challenge friends and family to prove who’s the true expert. Whether it’s sports, movies, or history, Trivia Run turns your knowledge into a fun, competitive experience you can play anytime, anywhere.

### Design
| ![](/images/TriviaMainScreen.jpg)  |  ![Design Game Play](/images/TriviaInGame.jpg) |![Design Game Over](/images/TriviaGameOver.jpg) | 
|---|---| --- |

Trivia Run will be simple in design to make it accessible to most users. It will include a main menu, where users can input their name and level of difficulty. The game play screen will have challenging and fun trivia questions for the player while also displaying their score in the upper right hand corner. When the player misses a question they will be brought to a game over screen where they can view the current high scores of other players. 


### Key features

- Login, logout, and register new players
- Ability to select difficulty of trivia questions
- Display questions and choices
- Keep track of the players current score as well as the top players and their scores. 
- Scores are stored persistently in a database.
- Players will be able to share their scores with others 

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses HTML structure for the application. It will have three HTML pages. A Main Screen, a screen for gameplay, and a gameover screen that includes a high score table.
- **CSS** - The applicaation will be able to be displayed on a variety of different screen sizes. It will utilize color to differentiate answer choices and make the application pop.
- **React** - Provides input for the players name, buttons for the answers to trivia questions, and displays other players' scores. React will be used to for routing and components.
- **Service** - Backend Service with endpoints for:
  * login, logout, and register users
  * Retrieving Players' high scores
  * Submitting answers
  * Display trivia questions and answers using the https://opentdb.com/api.php?amount=1 service
- **DB/Login** - Store authnetication information, users, and high scores in database.
- **WebSocket** - When a player finishes their game, other players are notified of their score.   

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://triviarun.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I have 4 HTML pages. A Login/Register Home page (`index.html`), gameplay page (`play.html`), a gameover screen (`game-over.html`), and a high scores page (`scores.html`).
- [x] **Proper HTML element usage** - I spent time learning the various HTML elements by going through past assignments and utilizing codepen. I used header, footer, main, nav, img, a, input, form, button, etc...
- [x] **Links** - I used links as a way to navigate between pages. At the top of each page, there is a nav bar that the user can use.
- [x] **Text** - I have text in my about page
- [x] **3rd party API placeholder** - My deliverable put a placeholder for the questions and answers that it will eventual pull from the opentdb API.
- [x] **Images** - I included an icon to the header on all the pages. I also added an image to the game over screen.
- [x] **Login placeholder** - Added a basic placeholder for login on the home page. 
- [x] **DB data placeholder** - Player High Scores are displayed on a table in `scores.html` and `game-over.html`
- [x] **WebSocket placeholder** - `play.html` has a placeholder for websockets to display notifications to the user as text. 

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - styled my header, footer, and main body
- [x] **Navigation elements** - Navigation elements no longer look like blue links. When you hover over them they are highlighted orange
- [x] **Responsive to window resizing** - My pages look good in other window sizing and fullscreen
- [x] **Application elements** - Styled my application elements. Buttons have color and responsive to hovering, future placeholders have been styled
- [x] **Application text content** - Placed my text in the about section in a text box with rounded corners to improve readability
- [x] **Application images** - Added css styling to my images

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - Used Vite to bundle 
- [x] **Components** - Used multiple react components to move html and css to react
- [x] **Router** - used routing to go between pages without needing to reload the page

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
