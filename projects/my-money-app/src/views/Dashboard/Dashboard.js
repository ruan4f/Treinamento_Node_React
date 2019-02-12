import React, { Component } from 'react';
import { Row, Container, Col } from 'reactstrap';
import Widget03 from '../../components/Widget03';

import api from '../../services/api';

class DashBoard extends Component {

  state = {
    credito: 0,
    debito: 0,
    valorConsolidado: 0
  }

  componentDidMount() {
    this.listarSumario();
  }

  listarSumario = () => {
    api.get('/cicloPagamentos/summary')
      .then(res => {
        const { credito, debito } = this.state;
        console.log(res.data);

        this.setState({
          credito,
          debito,
          valorConsolidado: credito - debito
        });
      })
      .catch(error => {

      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Container>
          <Row className="justify-content-center">

            <Col xs="6" sm="6" lg="3">
              <Widget03 dataBox={() => ({
                variant: 'twitter',
                credito: this.state.credito,
                debito: this.state.debito,
                consolidado: this.state.valorConsolidado
              })} >

              </Widget03>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DashBoard;
