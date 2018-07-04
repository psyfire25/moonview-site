import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/pages/home'
import Moon from './components/pages/moon';
import View from './components/pages/view';
import './App.css';

const App = () => (
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/Moon" exact component={Moon} />
        <Route path="/View" exact component={View} />
      </div>
);

export default App;
