import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';

class DashBoard extends Component {
  render() {
    return (
      <div className="app flex-row animated fadeIn align-items-center">
        <Container>
          <Row className="justify-content-center">
            <h1>Bem Vindo</h1>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DashBoard;
