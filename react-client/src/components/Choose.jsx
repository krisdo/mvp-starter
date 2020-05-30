import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

// import TopCharacters from './TopCharacters.jsx';

class Choose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  search(name) {
    this.props.onSearch(this.state.name);
  }

  render() {
    return (
    <Container class="center-text py-8 mt-10 mb-10" >
      <h4 class="center-text">Time to Battle</h4>
      <p class="center-text" >Enter superhero or villain's name</p>
      <input class="center-text" value={this.state.name} onChange={this.onChange}/>
      <Button variant="dark" class="center-text"  onClick={this.search}>Choose!</Button>
    </Container>
    )
}
}

// const Battle = (props) => (
//   <div>
//     <h4>The top { props.characters.length } super heroes or villains.</h4>
//     <table>{ props.characters.map( (character) => <TopCharacters character={character}/>) }</table>
//   </div>
// )

export default Choose;