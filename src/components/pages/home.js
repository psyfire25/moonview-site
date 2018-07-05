import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <div className="home">
    <Link className="moonLink" to="/Copy"></Link>
    <Link className="viewLink" to="/Web"></Link>
  </div>
);

export default Home;
