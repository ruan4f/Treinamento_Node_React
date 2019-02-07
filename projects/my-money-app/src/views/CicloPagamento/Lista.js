import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const PagamentoRow = (item) => {
    const pagamentoLink = `/ciclo-pagamento/${item.id}`

    return (
        <tr key={item.id.toString()}>
            <th scope="row"><Link to={pagamentoLink}>{item.id}</Link></th>
            <td>{item.nome}</td>
            <td>{item.ano}</td>
            <td>{item.mes}</td>
            <td>
                <Link to={pagamentoLink}
                    className="btn btn-success btn-brand icon mr-1 mb-1">
                    <i className="fa fa-edit"></i>
                </Link>
                <Button className="btn btn-danger btn-brand icon mr-1 mb-1"><i className="fa fa-trash-o"></i></Button>
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
        const pagamentosList = [{
            id: 1,
            nome: "teste",
            mes: 1,
            ano: 2019
        }]

        this.setState({ pagamentos: pagamentosList });
    }

    deletePagamento = (id) => {

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
                                            <th scope="col">Id</th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Mês</th>
                                            <th scope="col">Ano</th>
                                            <th scope="col">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.pagamentos.map(PagamentoRow)}
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