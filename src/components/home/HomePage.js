import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <Link to="about" className="btn">About</Link>
      </div>
    );
  }
}

export default HomePage;
