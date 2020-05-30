import React from 'react';
import TopCharacters from './TopCharacters.jsx';
import { Container, Row, Col, Image, ListGroup} from 'react-bootstrap';

const Leaderboard = (props) => (
  <Container className="text-center mx-auto mt-100-mb-100 bg-secondary" variant="dark">
   <div class="px-md-5">
     <h2 class='text-center'>Top 3 Supers</h2>
     </div>
    <Row  class='mx-auto text-center' className="justify-content-md-center">
    { props.characters.map( (character, index) => <TopCharacters character={character} key={index}/>) }
    </Row>
  </Container>
)

export default Leaderboard;