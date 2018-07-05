import React from 'react';
import { Route } from 'react-router-dom';
import firebase from './firebase/firebase';
import Home from './components/pages/home'
import Copy from './components/pages/copy';
import Web from './components/pages/web';
import LoginPage from './components/pages/loginPage';
import './App.css';

const App = () => (
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/Copy" exact component={Copy} />
        <Route path="/Web" exact component={Web} />
        <Route path="/LoginPage" exact component={LoginPage} />
      </div>
);

export default App;
