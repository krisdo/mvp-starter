import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Results = (props) => (
  <Container className="text-center mx-auto bg-secondary" variant="dark">
        <Row className="text-center align-items-center align-middle"style={{height: '200px', margin: 'auto'}}>
          <Col>
    <h2>{props.results.text}</h2>
    <h4 class='mx-auto'>{props.results.advice}</h4>
    <img src={props.results.url} class='rounded'></img>
    </Col>
    </Row>
  </Container>
)


export default Results;