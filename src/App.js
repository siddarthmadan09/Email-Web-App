import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div class="container">
         <nav>
    <div class="nav-wrapper red darken-1">
      <a href="#" class="brand-logo">Email Client</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a >Contact</a></li>
        <li><a >Login</a></li>
        <li><a >Register</a></li>
      </ul>
    </div>
  </nav>
        <NavBar />
         <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => (
                <Redirect to={`${process.env.PUBLIC_URL}/email`} />
            )} />
        </Switch> 
    </div>
    );
  }
}

export default App;
