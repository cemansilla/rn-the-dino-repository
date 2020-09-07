import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search/search-box.component'

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      dinosaurs: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({dinosaurs: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value });
  }

  render(){
    const { dinosaurs, searchField } = this.state;
    const filteredDinosaurs = dinosaurs.filter( dinosaur => dinosaur.name.toLowerCase().includes(searchField.toLowerCase()) )

    return (
      <div className="App">
        <h1>Dino Repository</h1>
        <SearchBox 
          placeholder="Buscar dinosaurio"
          handleChange={ this.handleChange } />
        <CardList 
          dinosaurs={ filteredDinosaurs } />
      </div>
    );
  }
}

export default App;
