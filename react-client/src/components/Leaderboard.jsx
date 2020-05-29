import React from 'react';
import TopCharacters from './TopCharacters.jsx';

const Leaderboard = (props) => (
  <div>
    <h4>The top 3 super heroes or villains.</h4>
    <table>{ props.characters.map( (character) => <TopCharacters character={character}/>) }</table>
  </div>
)

export default Leaderboard;