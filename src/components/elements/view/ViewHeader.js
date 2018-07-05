import React from 'react';
import { Link } from 'react-router-dom';

const ViewHeader = () => (
  <div className="viewHeader">
    <Link to="/"><div className="logo" /></Link>
  </div>
);

export default ViewHeader;
