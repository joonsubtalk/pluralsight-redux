import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Website</h1>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
