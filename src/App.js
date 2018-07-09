import React from 'react';
import { Route } from 'react-router-dom';
import firebase from './firebase/firebase';
import Home from './components/pages/home'
import Copy from './components/pages/copy';
import Web from './components/pages/web';
import LoginPage from './components/pages/loginPage';
import Contact from './components/pages/copy/contact';
import Portfolio from './components/pages/copy/portfolio';
import ContactW from './components/pages/web/contact';
import PortfolioW from './components/pages/web/portfolio';
import './App.css';

const App = () => (
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/Copy" exact component={Copy} />
        <Route path="/Web" exact component={Web} />
        <Route path="/LoginPage" exact component={LoginPage} />
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/PortfolioWeb" exact component={PortfolioW} />
        <Route path="/ContactWeb" exact component={ContactW} />
      </div>
);

export default App;
