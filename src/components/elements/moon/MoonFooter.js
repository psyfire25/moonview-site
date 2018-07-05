import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const MoonFooter = () => (
  <div>
    <Menu right>
      <Link to="/About">ABOUT</Link>
      <Link to="/Portfolio">PORTFOLIO</Link>
      <Link to="/Contact">CONTACT</Link>
      <Link to="/LoginPage" className="editBTN"></Link>
    </Menu>
  </div>
);

export default MoonFooter;
