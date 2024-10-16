import React from 'react'; 

import ticTacToe from './images/tic_tac_toe.png'; 

import rockPaperScissors from './images/rock_paper_scissors.png'; 

 

const Projects = () => { 

  return ( 

    <div> 

      <h1>My Projects</h1> 

      <img src={ticTacToe} alt="Tic Tac Toe" style={{ width: '300px', height: 'auto' }} /> 

      <p><a href="https://obi2.kean.edu/~guzmanyo@kean.edu/lab4/game1.html">Play Tic Tac Toe</a></p> 

      <img src={rockPaperScissors} alt="Rock Paper Scissors" style={{ width: '300px', height: 'auto' }} /> 

      <p><a href="https://obi2.kean.edu/~okafchid@kean.edu/project/game2.html">Play Rock Paper Scissors</a></p> 

    </div> 

  ); 

}; 

 

export default Projects; 