import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import Serie from './components/series/Serie';
import SeriesList  from './components/series/SeriesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Marvel Series</h1>
        </header>
        <Switch>
          <Route exact path='/' component={SeriesList}/>
          <Route exact path='/series' component={SeriesList}/>
          <Route path='/series/:id' component={Serie}/>
        </Switch>
      </div>
    );
  }
}

export default App;
