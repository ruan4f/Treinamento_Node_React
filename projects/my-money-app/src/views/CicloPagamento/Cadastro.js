import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';
import Summary from './Summary';
import ItemDebList from './ItemDebList';
import ItemCredList from './ItemCredList';

class Cadastro extends Component {

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>Novo Pagamento</strong>
                                <span className="pull-right">
                                    <Link
                                        to={'/ciclo-pagamento'}
                                        className="btn btn-sm btn-danger">
                                        Voltar
                                    </Link>
                                </span>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="name">Nome</Label>
                                            <Input type="text" id="name" placeholder="Entre com o nome do pagamento" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Mês</Label>
                                            <Input type="select" name="ccmonth" id="ccmonth">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="ccyear">Ano</Label>
                                            <Input type="select" name="ccyear" id="ccyear">
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                                <option>2023</option>
                                                <option>2024</option>
                                                <option>2025</option>
                                                <option>2026</option>
                                                <option>2027</option>
                                                <option>2028</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>Resumo</strong>
                            </CardHeader>
                            <CardBody>
                                <Summary></Summary>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" sm="6" lg="6">
                        <ItemCredList></ItemCredList>
                    </Col>
                    <Col xs="12" sm="6" lg="6">
                        <ItemDebList></ItemDebList>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cadastro;
