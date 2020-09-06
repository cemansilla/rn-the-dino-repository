import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      dinosaurs: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({dinosaurs: users}))
  }

  render(){
    return (
      <div className="App">
        {
          this.state.dinosaurs.map(dinosaur => <h1 key={dinosaur.id}>{dinosaur.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
