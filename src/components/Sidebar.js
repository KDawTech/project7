import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Crewmates</h2>
    <Link to="/">Gallery</Link>
    <Link to="/create">Create</Link>
  </div>
);

export default Sidebar;