import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

function PagamentoRow(props) {
    const pagamento = props.pagamento
    const pagamentoLink = `/ciclo-pagamento/${pagamento.id}`

    const getBadge = (status) => {
        return status === 'Active' ? 'success' :
            status === 'Inactive' ? 'secondary' :
                status === 'Pending' ? 'warning' :
                    status === 'Banned' ? 'danger' :
                        'primary'
    }

    return (
        <tr key={pagamento.id.toString()}>
            <th scope="row"><Link to={pagamentoLink}>{pagamento.id}</Link></th>
            <td><Link to={pagamentoLink}>{pagamento.nome}</Link></td>
            <td>{pagamento.ano}</td>
            <td>{pagamento.mes}</td>
            <td><Link to={pagamentoLink}><Badge color={getBadge(pagamento.status)}>{pagamento.status}</Badge></Link></td>
        </tr>
    )
}

class Lista extends Component {

    render() {

        //const userList = usersData.filter((user) => user.id < 10)

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Pagamentos
                            </CardHeader>
                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Mês</th>
                                            <th scope="col">Ano</th>
                                        </tr>
                                    </thead>
                                    <tbody>

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