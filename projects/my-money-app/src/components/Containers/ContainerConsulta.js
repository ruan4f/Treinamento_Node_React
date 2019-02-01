import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class ContainerConsulta extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <CardHeader>
                <span className="icon-pencil" />
                &nbsp;
                <b>{this.props.title}</b>
                <span className="pull-right">
                  <Link
                    to={this.props.linkVoltar}
                    className="btn btn-sm btn-danger"
                  >
                    Voltar
                  </Link>
                </span>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="12" xl="12">
                    {this.props.children}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

ContainerConsulta.defaultProps = {
  title: 'Consulta',
  linkVoltar: '/',
  children: null
};

ContainerConsulta.propTypes = {
  title: PropTypes.string,
  linkVoltar: PropTypes.string,
  children: PropTypes.node
};

export default ContainerConsulta;
