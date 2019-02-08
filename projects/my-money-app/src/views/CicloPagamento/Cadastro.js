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
import api from '../../services/api';


class Cadastro extends Component {

    state = {
        titulo: 'Novo Pagamento',
        _id: '',
        nome: '',
        mes: 1,
        ano: 2019,
        creditos: [],
        debitos: []
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        if (id) {
            api.get(`/cicloPagamentos/${id}`)
                .then(res => {
                    const { _id, nome, mes, ano, creditos, debitos } = res.data;
                    this.setState({ _id, nome, mes, ano, creditos, debitos, titulo: 'Editar Pagamento' });
                })
                .catch(error => {
                    this.setState({
                        _id: id,
                        titulo: 'Editar Pagamento'
                    });
                });
        } else {
            this.setState({ titulo: 'Novo Pagamento' });
        }
    }

    calculateSummary() {
        const sum = (t, v) => t + v;
        return {
            somaCreditos: this.state.creditos.map(c => + c.valor || 0).reduce(sum, 0),
            somaDebitos: this.state.debitos.map(d => + d.valor || 0).reduce(sum, 0)
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleCreate = async () => {
        const { _id, nome, mes, ano, creditos, debitos } = this.state;

        if (_id) {
            await api.put(`/cicloPagamentos/${_id}`, {
                nome,
                mes,
                ano,
                creditos,
                debitos
            });
        } else {
            await api.post('/cicloPagamentos', {
                nome,
                mes,
                ano,
                creditos,
                debitos
            });
        }
    }

    render() {
        const { somaCreditos, somaDebitos } = this.calculateSummary();

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>{this.state.titulo}</strong>
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
                                            <Label htmlFor="nome">Nome</Label>
                                            <Input type="text" name="nome" id="nome"
                                                onChange={this.handleInputChange}
                                                value={this.state.nome}
                                                placeholder="Entre com o nome do pagamento" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="mes">Mês</Label>
                                            <Input type="select" name="mes" id="mes" 
                                                value={this.state.mes} 
                                                onChange={this.handleInputChange}>
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
                                            <Label htmlFor="ano">Ano</Label>
                                            <Input type="select" name="ano" id="ano" 
                                                value={this.state.ano}
                                                onChange={this.handleInputChange}>
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
                                <Row>
                                    <Col>
                                        <Button className="btn btn-block btn-success" onClick={this.handleCreate}>Salvar</Button>
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
                                <Summary credit={somaCreditos} debt={somaDebitos} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" sm="6" lg="6">
                        <ItemCredList />
                    </Col>
                    <Col xs="12" sm="6" lg="6">
                        <ItemDebList />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cadastro;
