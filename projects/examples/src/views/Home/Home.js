import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/search-select">Search Select</Link>
      </div>
    );
  }
}
