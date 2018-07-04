import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <div className="home">
    <Link className="moonLink" to="/Moon">Copy</Link>
    <Link className="viewLink" to="/View">Digital</Link>
  </div>
);

export default Home;
