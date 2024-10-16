import React from 'react'; 

import attackOnTitan from './images/attack_on_titan.jpg'; 

import naruto from './images/naruto.jpg'; 

import erased from './images/erased.jpg'; 

import twistedSeries from './images/twisted_series.jpg'; 

 

const Hobbies = () => { 

  return ( 

    <div className="hobbies-container"> 

      <h1>My Hobbies</h1> 

      <h2>Favorite Anime</h2> 

      <img src={attackOnTitan} alt="Attack on Titan" /> 

      <img src={naruto} alt="Naruto" /> 

      <img src={erased} alt="Erased" /> 

      <h2>Favorite Book Series</h2> 

      <img src={twistedSeries} alt="Twisted Series" /> 

    </div> 

  ); 

}; 

 

export default Hobbies; 