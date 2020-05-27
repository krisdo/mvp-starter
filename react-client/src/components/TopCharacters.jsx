import React from 'react';

const TopCharacters = (props) => (
  <tr>
    <td><img src={props.character.url} width='100'></img></td>
    <td>{props.character.name}</td>
    <td>{props.character.wins} wins</td>
  </tr>
)

export default TopCharacters;