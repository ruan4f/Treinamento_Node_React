import React, { Component } from 'react';
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
    Table,
} from 'reactstrap';

function ItemRow(item) {
    return (
        <tr key={item.id.toString()}>
            <td>
                <FormGroup>
                    <Input type="text" id="nome" placeholder="Informe o nome" required />
                </FormGroup>
            </td>
            <td>
                <FormGroup>
                    <Input type="text" id="valor" placeholder="Informe o valor" required />
                </FormGroup>
            </td>
            <td>
                <FormGroup>
                    <Input type="select" name="ccstatus" id="ccstatus">
                        <option>Selecione o status</option>
                        <option>PAGO</option>
                        <option>PENDENTE</option>
                        <option>AGENDADO</option>
                    </Input>
                </FormGroup>
            </td>
            <td>
                <Button size="lg" className="btn btn-success btn-brand icon mr-1 mb-1"><i className="fa fa-plus"></i></Button>
                <Button size="lg" className="btn btn-danger btn-brand icon mr-1 mb-1"><i className="fa fa-trash-o"></i></Button>
            </td>
        </tr>
    )
}

class ItemDebList extends Component {

    render() {

        const debList = [{ id: 0, nome: '', valor: 0, status: '' }]

        return (
            <Card>
                <CardHeader>
                    <strong>Débitos</strong>
                </CardHeader>
                <CardBody>
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
                            {debList.map(ItemRow)}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        )
    }
}

export default ItemDebList;