import React from 'react';
import TopCharacters from './TopCharacters.jsx';
import { Container, Row, Col, Image, ListGroup} from 'react-bootstrap';

const Leaderboard = (props) => (
  <div class="text-center" className="justify-content-center">
   <h4 class='text-center'>Top 3 Supers</h4>
    <ListGroup horizontal class='mx-auto text-center' className="justify-content-md-center">
    { props.characters.map( (character) => <ListGroup.Item class="text-center" mx md="auto" className="border border-info rounded"><TopCharacters character={character}/></ListGroup.Item >) }
    </ListGroup>
  </div>
)

export default Leaderboard;