import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row
} from 'reactstrap';
import { Link } from 'react-router-dom';

class ContainerCadastro extends Component {
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
                {this.props.linkVoltar !== '/' ? (
                  <span className="pull-right">
                    <Link
                      to={this.props.linkVoltar}
                      className="btn btn-sm btn-danger"
                    >
                      Voltar
                    </Link>
                  </span>
                ) : null}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="12" xl="12">
                    {this.props.children}
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Button
                  color="primary"
                  className="btn-sm"
                  onClick={() => this.props.acaoSalvar()}
                >
                  Salvar
                  </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

ContainerCadastro.defaultProps = {
  title: 'Cadastro/Edição',
  linkVoltar: '/',
  children: null,
  acaoSalvar: () => { }
};

ContainerCadastro.propTypes = {
  title: PropTypes.string,
  linkVoltar: PropTypes.string,
  children: PropTypes.node,
  acaoSalvar: PropTypes.func
};

export default ContainerCadastro;
