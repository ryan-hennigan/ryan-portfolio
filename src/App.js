import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import {Router, Route } from 'react-router-dom';
import {history} from './helpers';

import { Header, Dash, AboutMe } from './components';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Header/>
          <Route exact path='/' component={AboutMe}/>
          <Route path='/dash' component={Dash}/>
        </Router>
      </div>
    );
  }
}

export default App;
