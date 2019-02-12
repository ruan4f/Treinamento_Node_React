import React, { Component } from 'react';
import { Row, Container, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import Widget03 from '../../components/Widget03';

import api from '../../services/api';
import { loadingService } from '../../components';

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
    loadingService.show();
    api.get('/cicloPagamentos/summary')
      .then(res => {
        loadingService.hide();
        const { credito, debito } = res.data;
        console.log(res.data);

        this.setState({
          credito,
          debito,
          valorConsolidado: credito - debito
        });
      })
      .catch(error => {
        loadingService.hide();
        toast.error('Erro ao obter dados de pagamentos!', { position: 'top-center', className: 'danger' });
      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Container>
          <Row className="justify-content-center">

            <Col>
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
