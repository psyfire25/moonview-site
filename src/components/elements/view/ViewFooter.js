import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const ViewFooter = () => (
  <div>
    <Menu className="viewMenu">
      <Link to="/About">ABOUT</Link>
      <Link to="/Portfolio">PORTFOLIO</Link>
      <Link to="/Contact">CONTACT</Link>
    </Menu>
  </div>
);

export default ViewFooter;
