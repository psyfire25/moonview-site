import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const ViewFooter = () => (
  <div>
    <Menu className="viewMenu">
      <Link to="/PortfolioWeb">PORTFOLIO</Link>
      <Link to="/ContactWeb">CONTACT</Link>
    </Menu>
  </div>
);

export default ViewFooter;
