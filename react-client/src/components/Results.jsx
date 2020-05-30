import React from 'react';


const Results = (props) => (
  <div>
    <h2 class='mx-auto'>{props.results.heading}</h2>
    <h5>{props.results.text}</h5>
    <h4 class='mx-auto'>{props.results.advice}</h4>
    <img src={props.results.url} class='rounded'></img>
  </div>
)


export default Results;