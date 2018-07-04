import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <div className="home">
    <Link className="moonLink" to="/Moon"></Link>
    <Link className="viewLink" to="/View"></Link>
    <div className="moonText" />
    <div className="viewText" />
  </div>
);

export default Home;
