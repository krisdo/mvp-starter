import React from 'react';
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
    return (<div>
      <h4>Time to Battle</h4>
      Enter superhero or villain's name
      <input value={this.state.name} onChange={this.onChange}/>
       <button onClick={this.search}>Choose a character</button>
    </div>)
  }
}

// const Battle = (props) => (
//   <div>
//     <h4>The top { props.characters.length } super heroes or villains.</h4>
//     <table>{ props.characters.map( (character) => <TopCharacters character={character}/>) }</table>
//   </div>
// )

export default Choose;