import React from 'react';


const Results = (props) => (
  <div>
    <h2>{props.results.heading}</h2>
    <h5>{props.results.text}</h5>
    <h4>{props.results.advice}</h4>
    <img src={props.results.url}></img>
  </div>
)

export default Results;