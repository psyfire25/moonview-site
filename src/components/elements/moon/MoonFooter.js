import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const MoonFooter = () => (
  <div>
    <Menu right />
    <main>
      <Link to="/">HOME</Link>
      <Link to="/About">ABOUT</Link>
      <Link to="/Portfolio">PORTFOLIO</Link>
      <Link to="/Contact">CONTACT</Link>
    </main>
  </div>
);

export default MoonFooter;
