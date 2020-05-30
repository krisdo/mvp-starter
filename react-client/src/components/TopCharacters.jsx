import React from 'react';
import { Container, Col, Row, Image, Card } from 'react-bootstrap';

const TopCharacters = (props) => (
  <div class="text-center">
      <Col>
        <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={props.character.url}/>
        <Card.Body>
          <Card.Title>{props.character.name}</Card.Title>
          <Card.Text>
         <p>{props.character.wins} wins.</p>
         <p>{props.character.losses} losses.</p>
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>
      {/* <Row md="auto" center="xs" class="text-center">{props.character.name}</Row>
      <Row md="auto" ><img src={props.character.url} width='100' class="rounded"></img></Row>
      <Row md="auto" center="xs">{props.character.wins} wins</Row> */}
  </div>

)

export default TopCharacters;