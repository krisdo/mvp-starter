import React from 'react';
import TopCharacters from './TopCharacters.jsx';

const Leaderboard = (props) => (
  <div>
    <h4>The top { props.characters.length } super heroes or villains.</h4>
    <table>{ props.characters.map( (character) => <TopCharacters character={character}/>) }</table>
  </div>
)

export default Leaderboard;