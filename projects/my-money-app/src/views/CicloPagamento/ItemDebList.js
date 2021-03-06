import React, { Component } from 'react';
import {
    Table,
    Button,
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Input,
    Row,
    Col,
    Label
} from 'reactstrap';

export default class ItemDebList extends Component {

    state = {
        nome: '',
        valor: 0,
        status: ''
    }

    add = () => {
        const { nome, valor, status } = this.state;
        if (nome && nome !== '' && valor > 0 && status) {
            this.props.add(this.state);
            this.setState({ nome: '', valor: 0, status: '' });
        }
    }

    remove = (index) => {
        if (this.props.list.length > 0) {
            this.props.remove(index);
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    renderRows = () => {
        const list = this.props.list || [];

        return list.map((item, index) => (
            <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.valor}</td>
                <td>{item.status}</td>
                <td>
                    <Button className="btn btn-danger btn-brand icon mr-1 mb-1" onClick={() => this.remove(index)}><i className="fa fa-trash-o"></i></Button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    <strong>Débitos</strong>
                    <span className="pull-right">
                        <Button className="btn btn-success btn-brand icon mr-1 mb-1 align-bottom" onClick={this.add}><i className="fa fa-plus"></i></Button>
                    </span>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label htmlFor="nome">Nome</Label>
                                <Input type="text" name="nome" id="nome"
                                    onChange={this.handleInputChange}
                                    value={this.state.nome}
                                    placeholder="Informe o nome" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label htmlFor="valor">Valor</Label>
                                <Input type="text" name="valor" id="valor"
                                    onChange={this.handleInputChange}
                                    value={this.state.valor}
                                    placeholder="Informe o valor" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label htmlFor="status">Status</Label>
                                <Input type="select" name="status" id="status"
                                    value={this.state.status}
                                    onChange={this.handleInputChange}>
                                    <option value="PAGO">PAGO</option>
                                    <option value="PENDENTE">PENDENTE</option>
                                    <option value="AGENDADO">AGENDADO</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        )
    }
};