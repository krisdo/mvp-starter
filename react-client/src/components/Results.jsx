import React from 'react';
import { Container } from 'react-bootstrap';

const Results = (props) => (
  <Container className="text-center mx-auto bg-secondary" variant="dark">
    <h2>{props.results.text}</h2>
    <h4 class='mx-auto'>{props.results.advice}</h4>
    <img src={props.results.url} class='rounded'></img>
  </Container>
)


export default Results;