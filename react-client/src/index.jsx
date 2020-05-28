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
      battle : {
        user: {name: 'Choose one', url: 'https://media.giphy.com/media/eNdTUcTWKL7O0UvonE/giphy.gif'},
        computer: {name: '???', url: 'https://media.giphy.com/media/eNdTUcTWKL7O0UvonE/giphy.gif'}
      },
      results: {text: 'YOU WON!'},
    }
  }

  fetchStats() {
    //get request for leadboard
    fetch('/characters')
    .then( (data) => {
      //check what kind of data
      console.log(data);
      this.setstate({
        characters: data
      })
    })
    .catch();
  }



  search(name) {
    console.log(`Looking for ${name}`);
    //fetch post request to server with name
      //success
      //set user state and computer state
      let options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name})
    };

      fetch('/characters', options)
      .then( (res) => {
        return res.json()
      })
      .then( (data) => {
        console.log(data);
        var user = data[0];
        var computer = data[1];
        this.setState({
          battle: {
            user: {name: user.name, url: user.image.url},
            computer: {name: computer.name, url: computer.image.url}
        }});
      })
      .catch((err) => {
        console.log(err);
      })

  }

  handleClickEvent(e) {
    //on click, send post req the users characters name to server for results data
    //set the results state with response from server
    e.preventDefault();
    console.log('Fight!');
    fetch('/results', {method: 'POST'})
    .then( (res) => {res.jSON()})
    .then( (data) => {
      //check what kind of data
    })


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
        <td>{this.state.battle.user.name}</td><td></td><td>{this.state.battle.computer.name}</td>
      </tr>
      <tr>
      <td><img src={this.state.battle.user.url} width='200'></img></td><td>VS</td><td><img src={this.state.battle.computer.url} width='200'></img></td>
      </tr>
      </table>
      <button onClick={this.handleClickEvent}>Let's Fight!</button>
      <Results user={this.state.user} computer={this.state.computer} results={this.state.results}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));