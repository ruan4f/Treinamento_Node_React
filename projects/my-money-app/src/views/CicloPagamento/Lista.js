import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { toast } from 'react-toastify';
import api from '../../services/api';

const PagamentoRow = ({ item, remover }) => {
    const pagamentoLink = `/ciclo-pagamento/${item._id}`

    return (
        <tr>
            <td>{item.nome}</td>
            <td>{item.mes}</td>
            <td>{item.ano}</td>
            <td>
                <Link to={pagamentoLink}
                    className="btn btn-success btn-brand icon mr-1 mb-1">
                    <i className="fa fa-edit"></i>
                </Link>
                <Button className="btn btn-danger btn-brand icon mr-1 mb-1" onClick={() => remover(item._id)}><i className="fa fa-trash-o"></i></Button>
            </td>
        </tr>
    )
}

class Lista extends Component {

    state = {
        pagamentos: []
    }

    componentDidMount() {
        this.listarPagamentos();
    }

    listarPagamentos = () => {
        api.get('/cicloPagamentos')
            .then(res => {
                this.setState({ pagamentos: res.data });
            })
            .catch(error => {
                toast.error('Erro ao obter a lista de pagamentos!', { position: 'top-center', className: 'danger' });
            });
    }

    excluirPagamento = (id) => {
        api.delete(`/cicloPagamentos/${id}`)
            .then(res => {
                toast.success('Registro excluído com sucesso!', { position: 'top-center', className: 'success' });
            })
            .catch(error => {
                toast.error('Dados do pagamento inválido!', { position: 'top-center', className: 'danger' });
            });

        this.setState({ pagamentos: this.state.pagamentos.filter(item => item._id && item._id !== id) });
    }

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Pagamentos
                                <span className="pull-right">
                                    <Link
                                        to={'/ciclo-pagamento/novo'}
                                        className="btn btn-sm btn-success">
                                        Novo
                                    </Link>
                                </span>
                            </CardHeader>
                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Mês</th>
                                            <th scope="col">Ano</th>
                                            <th scope="col">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.pagamentos.map(item => (<PagamentoRow key={item._id} item={item} remover={this.excluirPagamento} />))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Lista;