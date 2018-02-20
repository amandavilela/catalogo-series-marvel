import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import SerieContainer from './containers/series/SerieContainer';
import SeriesListContainer  from './containers/series/SeriesListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/" className="App-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg" alt="logo" />
            <h1 className="App-title">Marvel Series</h1>
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={SeriesListContainer}/>
          <Route exact path="/series" component={SeriesListContainer}/>
          <Route path="/series/:id" component={SerieContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
