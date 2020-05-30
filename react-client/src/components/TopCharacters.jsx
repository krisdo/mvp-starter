import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const TopCharacters = (props) => (
  <div class="col justify-content-center">
      <Row md="auto" center="xs" class="text-center">{props.character.name}</Row>
      <Row md="auto" ><img src={props.character.url} width='100' class="rounded"></img></Row>
      <Row md="auto" center="xs">{props.character.wins} wins</Row>
  </div>

)

export default TopCharacters;