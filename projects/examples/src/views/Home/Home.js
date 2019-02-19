import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link className="link-example link-example-primary" to="/" >Home</Link>
        <Link className="link-example link-example-primary" to="/search-select">Search Select</Link>
      </div>
    );
  }
}
