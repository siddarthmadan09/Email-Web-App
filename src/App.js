import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import { Header } from "semantic-ui-react";
import EmailList from './Components/EmailList/EmailList';
import EmailMain from './Components/EmailMain/EmailMain';
import EmailView from './Components/EmailView/EmailView';

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
          <Route exact path="/" render={() => (
                <Redirect to="/email"/>
            )} />
        </Switch> 
    </div>
    );
  }
}

export default App;
