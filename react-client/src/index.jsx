import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Leaderboard from './components/Leaderboard.jsx';
import Choose from './components/Choose.jsx';
import Results from './components/Results.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [{name: 'Batman', wins: 4, url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg'}, {name: 'Superman', wins: 2, url: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg'}, {name: 'Joker', wins: 1, url: 'https://www.superherodb.com/pictures2/portraits/10/100/719.jpg'}],
      computer: {name: 'Penguin', url: 'https://www.superherodb.com/pictures2/portraits/10/100/753.jpg'},
      user: {name: 'Robin', url: 'https://www.superherodb.com/pictures2/portraits/10/100/850.jpg'},
      results: {text: 'YOU WON!'},
    }
  }

  search(name) {
    console.log(`Looking for ${name}`);
    //ajax call to server with name

    //success
      //set user state and computer state and results

  }

  handleClickEvent(e) {
    //on click fetch server for computer, character, and results data
    e.preventDefault();
    console.log('Fight!');
    fetch('/results')
    .then( (res) => {res.jSON()})
    .then( (data) => {})


  }



  componentDidMount() {

    //send request to server to get data from mongodb to populate leaderboard
    //populate the last winner

    // $.ajax({
    //   url: '/items',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (<div>
      <h1>Super Fight Club</h1>
      <Leaderboard characters={this.state.characters}/>
      <Choose onSearch={this.search.bind(this)}/>
      <table class='table'>
      <tr>
        <td>{this.state.user.name}</td><td></td><td>{this.state.computer.name}</td>
      </tr>
      <tr>
      <td><img src={this.state.user.url} width='200'></img></td><td>VS</td><td><img src={this.state.computer.url} width='200'></img></td>
      </tr>
      </table>
      <button onClick={this.handleClickEvent}>Let's Fight!</button>
      <Results user={this.state.user} computer={this.state.computer} results={this.state.results}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));