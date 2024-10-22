import React from 'react';
import './App.css';
import IMG_5497 from './images/IMG_5497.jpeg';
import attackOnTitan from './images/attack_on_titan.jpg';
import erased from './images/erased.jpg';
import naruto from './images/naruto.jpg';
import ticTacToe from './images/tic_tac_toe.png';
import rockPaperScissors from './images/rock_paper_scissors.png';
import twistedSeries from './images/twisted_series.jpg';
import Chatbot from './Chatbot';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Chidera's Portfolio</h1>
        <nav>
          <button>About</button>
          <button>Hobbies</button>
          <button>Projects</button>
        </nav>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <img src={IMG_5497} alt="Profile" className="profile-img" />
        <p>Hi, I'm Chidera, an IT & Cybersecurity student with a passion for coding, anime, and more!</p>
      </section>

      <section className="hobbies">
        <h2>My Hobbies</h2>
        <div className="anime-gallery">
          <img src={attackOnTitan} alt="Attack on Titan" className="anime" />
          <img src={erased} alt="Erased" className="anime" />
          <img src={naruto} alt="Naruto" className="anime" />
        </div>
        <h2>Favorite Book Series</h2>
        <img src={twistedSeries} alt="Twisted Series" className="anime" />
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="projects-gallery">
          <img src={ticTacToe} alt="Tic Tac Toe Game" className="project-img" />
          <p><a href="https://obi2.kean.edu/~guzmanyo@kean.edu/lab4/game1.html">Play Tic Tac Toe</a></p>

          <img src={rockPaperScissors} alt="Rock Paper Scissors" className="project-img" />
          <p><a href="https://obi2.kean.edu/~okafchid@kean.edu/project/game2.html">Play Rock Paper Scissors</a></p>
        </div>
        <div className="chatbot-container">
          <h2>Chatbot</h2>
          <Chatbot /> {/* Render the Chatbot component */}
        </div>
      </section>

      <footer>
        <p>Made with ❤️ by Chidera Okafor</p>
      </footer>
    </div>
  );
}

export default App;
