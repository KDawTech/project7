// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p>
        You can create, view, and edit your own Crewmates using the navigation on the left.
      </p>

      <div className="home-buttons">
        <Link to="/create">
          <button>Create a Crewmate</button>
        </Link>
        <Link to="/gallery">
          <button>View Crewmates</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
